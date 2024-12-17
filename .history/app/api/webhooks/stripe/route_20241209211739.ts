import Stripe from "stripe";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.text(); // Raw body is required for Stripe signature verification
    const rawHeaders = headers();
    const signature = (await rawHeaders).get("Stripe-Signature") as string;

    if (!signature) {
        return NextResponse.json(
            { error: "Missing Stripe-Signature header" },
            { status: 400 }
        );
    }

    let event: Stripe.Event;

    try {
        // Ensure STRIPE_WEBHOOK_SECRET is available
        if (!process.env.STRIPE_WEBHOOK_SECRET) {
            throw new Error("Stripe webhook secret is not configured");
        }

        // Construct the event with raw body and signature
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET
        );

        // Log event details (optional for debugging)
        console.log("Received event:", event);
    } catch (error: any) {
        console.error("Error verifying webhook:", error);

        return NextResponse.json(
            { error: `Webhook error: ${error.message || "Unknown error"}` },
            { status: 400 }
        );
    }

    // Respond with status 200 for successful processing
    return NextResponse.json({ message: "Webhook received successfully" }, { status: 200 });
}
