import { Button } from "@/components/ui/button";
import Image from "next/image";

 export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                    src="/anatomy.jpeg" 
                    alt="Anatomy & Physiology" 
                    height={32} width={40} 
                    className="mr-4 rounded-md"/>
                        Anatomy & Physiology
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                    src="/pharmacology.svg" 
                    alt="Pharmacology" 
                    height={32} 
                    width={40} 
                    className="mr-4 rounded-md"/>
                        Fundamentals
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                    src="/pharmacology.svg" 
                    alt="" 
                    height={32} 
                    width={40} 
                    className="mr-4 rounded-md"/>
                        Maternity
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                    src="/pharmacology.svg" 
                    alt="" 
                    height={32} 
                    width={40} 
                    className="mr-4 rounded-md"/>
                        Pediatrics
                </Button>
                
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                    src="/pharmacology.svg" 
                    alt="" 
                    height={32} 
                    width={40} 
                    className="mr-4 rounded-md"/>
                        Pharmacology
                </Button>
                
                

            </div>

        </footer>
    
    );
 };