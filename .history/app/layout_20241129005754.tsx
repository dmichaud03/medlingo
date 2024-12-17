import type { Metadata } from "next";
import Nunito, { Nunito_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const font = Nunito_Sans({
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <html lang="en">
        <ClerkProvider>
          <body
            className={font.className}>
            <Toaster />
          
            {children}
          </body> 
        </ClerkProvider>
      </html>
   
  );
}