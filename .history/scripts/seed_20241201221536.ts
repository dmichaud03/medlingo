import 'dotenv/config';
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "../db/schema";


// Make sure to access the connection string correctly from environment variables
const sql = neon(process.env.DATABASE_URL!); // Ensure DATABASE_URL is set correctly
const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("Seeding database");

        // Clear existing data
        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);


        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Nursing",
                imageSrc: "/anatomy.jpeg"
            },
            {
                id: 2,
                title: "Anatomy & Physiology",
                imageSrc: "/fundamentals.jpeg"
            },
           
        
        ]
    );

    await db.insert(schema.units).values([
        {
            id: 1,
            courseId: 2, // Anatomy & Physiology
            title: "Unit 1",
            description: "Introduction to Anatomy and Physiology",
            order: 1,
        },
        {
            id: 2,
            courseId: 2, // Anatomy & Physiology
            title: "Unit 2",
            description: "The Chemical Basis of Life",
            order: 2,
        },
        {
            id: 3,
            courseId: 2, // Anatomy & Physiology
            title: "Unit 3",
            description: "Cells and Tissues",
            order: 3,
        },
        {
            id: 4,
            courseId: 2, // Anatomy & Physiology
            title: "Unit 4",
            description: "Integumentary System",
            order: 4,
        },
        {
            id: 5,
            courseId: 2, // Anatomy & Physiology
            title: "Unit 5",
            description: "Skeletal System",
            order: 5,
        },
    ]);

    await db.insert(schema.lessons).values([

        // Unit 1: Introduction to Anatomy and Physiology
        {
            id: 1,
            unitId: 1,
            order: 1,
            title: " Overview of Anatomy and Physiology"
        },
        {
            id: 2,
            unitId: 1,
            order: 2,
            title: "Structural Organization of the Body"
        },
        {
            id: 3,
            unitId: 1,
            order: 3,
            title: "Anatomical Terminology"
        },
        {
            id: 4,
            unitId: 1,
            order: 4,
            title: "Homeostasis and Feedback Mechanisms"
        },

        {
            id: 5,
            unitId: 1,
            order: 5,
            title: "Body Systems Overview",
        },

        // Unit 2: The Chemical Basis of Life
        {
            id: 6,
            unitId: 2,
            order: 1,
            title: "Elements and Compounds"
        },
        {
            id: 7,
            unitId: 2,
            order: 2,
            title: "Atomic Structure and Chemical Bonds"
        },
        {
            id: 8,
            unitId: 2,
            order: 3,
            title: "Water and Solutions in the Body"
        },
        {
            id: 9,
            unitId: 2,
            order: 4,
            title: "Acids, Bases, and Buffers"
        },
        {
            id: 10,
            unitId: 2,
            order: 5,
            title: "Organic Molecules – Carbohydrates, Proteins, Lipids, Nucleic Acids"
        },

        // Unit 3: Cells and Tissues
        {
            id: 11,
            unitId: 3,
            order: 1,
            title: "Cell Structure and Function"
        },
        {
            id: 12,
            unitId: 3,
            order: 2,
            title: "Membrane Transport Mechanisms"
        },
        {
            id: 13,
            unitId: 3,
            order: 3,
            title: "Cell Cycle and Division"
        },
        {
            id: 14,
            unitId: 3,
            order: 4,
            title: "Overview of Tissue Types"
        },
        {
            id: 15,
            unitId: 3,
            order: 5,
            title: "Tissue Repair and Regeneration"
        },

        // Unit 4: Integumentary System
        {
            id: 16,
            unitId: 4,
            order: 1,
            title: "Skin Structure and Function"
        },
        {
            id: 17,
            unitId: 4,
            order: 2,
            title: "Accessory Structures of the Skin"
        },
        {
            id: 18,
            unitId: 4,
            order: 3,
            title: "Temperature Regulation and Skin"
        },
        {
            id: 19,
            unitId: 4,
            order: 4,
            title: "Skin Disorders and Conditions"
        },
        {
            id: 20,
            unitId: 4,
            order: 5,
            title: "The Healing Process of Skin"
        },

        // Unit 5: Skeletal System
        {
            id: 21,
            unitId: 5,
            order: 1,
            title: "Overview of the Skeletal System"
        },
        {
            id: 22,
            unitId: 5,
            order: 2,
            title: "Bone Growth and Development"
        },
        {
            id: 23,
            unitId: 5,
            order: 3,
            title: "Bone Structure and Anatomy"
        },
        {
            id: 24,
            unitId: 5,
            order: 4,
            title: "Joint Structure and Function"
        },
        {
            id: 25,
            unitId: 5,
            order: 5,
            title: "Common Bone and Joint Disorders"
        },
        {
            id: 26,
            unitId: 2,
            order: 1,
            title: "Elements and Compounds"
        },
        {
            id: 27,
            unitId: 2,
            order: 2,
            title: "Atomic Structure and Chemical Bonds"
        },
        {
            id: 28,
            unitId: 2,
            order: 3,
            title: "Water and Solutions in the Body"
        },
        {
            id: 29,
            unitId: 2,
            order: 4,
            title: "Acids, Bases, and Buffers"
        },
        {
            id: 30,
            unitId: 2,
            order: 5,
            title: "Organic Molecules – Carbohydrates, Proteins, Lipids, Nucleic Acids"
        },
    
        // Unit 3: Cells and Tissues
        {
            id: 31,
            unitId: 3,
            order: 1,
            title: "Cell Structure and Function"
        },
        {
            id: 32,
            unitId: 3,
            order: 2,
            title: "Membrane Transport Mechanisms"
        },
        {
            id: 33,
            unitId: 3,
            order: 3,
            title: "Cell Cycle and Division"
        },
        {
            id: 34,
            unitId: 3,
            order: 4,
            title: "Overview of Tissue Types"
        },
        {
            id: 35,
            unitId: 3,
            order: 5,
            title: "Tissue Repair and Regeneration"
        },
    
        // Unit 4: Integumentary System
        {
            id: 36,
            unitId: 4,
            order: 1,
            title: "Skin Structure and Function"
        },
        {
            id: 37,
            unitId: 4,
            order: 2,
            title: "Accessory Structures of the Skin"
        },
        {
            id: 38,
            unitId: 4,
            order: 3,
            title: "Temperature Regulation and Skin"
        },
        {
            id: 39,
            unitId: 4,
            order: 4,
            title: "Skin Disorders and Conditions"
        },
        {
            id: 40,
            unitId: 4,
            order: 5,
            title: "The Healing Process of Skin"
        },
    
        // Unit 5: Skeletal System
        {
            id: 41,
            unitId: 5,
            order: 1,
            title: "Overview of the Skeletal System"
        },
        {
            id: 42,
            unitId: 5,
            order: 2,
            title: "Bone Growth and Development"
        },
        {
            id: 43,
            unitId: 5,
            order: 3,
            title: "Bone Structure and Anatomy"
        },
        {
            id: 44,
            unitId: 5,
            order: 4,
            title: "Joint Structure and Function"
        },
        {
            id: 45,
            unitId: 5,
            order: 5,
            title: "Common Bone and Joint Disorders"
        },
    ]);
    
await  db.insert(schema.challenges).values([
    {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: 'Identify the nervous system.',
    },
    {
        id: 2,
        lessonId: 1,
        type: "ASSIST",
        order: 2,
        question: 'A patient complains of numbness in their fingers. Which part of the nervous system might be affected?',
    },
   
]);

await  db.insert(schema.challengeOptions).values([
    {
   
        challengeId: 1,
        type: "SELECT",
        imageSrc: "/nervous system.png",
        correct: true,
        text: "nervous system"
    },
    {
        
        challengeId: 1,
        type: "SELECT",
        imageSrc: "/cardiovascular system.png",
        correct: false,
        text: "cardiovascular system",
    },

    {
        
        challengeId: 1,
        type: "SELECT",
        imageSrc: "/skeleton system.png",
        correct: false,
        text: "skeleton system",
    },
    {
       
        challengeId: 1,
        type: "SELECT",
        imageSrc: "/respiratory system.png",
        correct: false,
        text: "respiratory system",
    },
    {
   
        challengeId: 2,
        type: "ASSIST",
        correct: true,
        text: "Peripheral Nervous System"
    },
    {
        
        challengeId: 2,
        type: "ASSIST",       
        correct: false,
        text: "Central Nervous System",
    },

    

]);



        console.log("Seeding finished");
    } catch (error) {
        console.error("Error:", error);
        throw new Error("Failed to seed the database");
    }
};

main();
