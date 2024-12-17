import { Button } from "@/components/ui/button";

const ButtonPage= () => {
    return (
        <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
             <Button variant="default">Default</Button>
            <Button variant="primary"> Primary</Button>
            <Button variant="primaryOutline">Primary Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="secondary Outline"> Secondary Outline</Button>
            <Button variant="danger"> Danger</Button>
            <Button variant="dangerOutline">Danger Outline</Button>
            <Button variant="super">Super</Button>
            <Button variant="superOutline"> Super Outline</Button>
            <Button variant=""> Ghost</Button>
            <Button variant="dangerOutline">Danger Outline</Button>
        </div>
    );
};

export default ButtonPage;