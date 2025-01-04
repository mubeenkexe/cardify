declare global {
    interface Children {
        children: React.ReactNode;
    }

    interface FlashCard {
        id: string;
        question: string;
        answer: string;
        category: string;
    }

    interface ButtonProps {
        children: React.ReactNode;
        type?: "button" | "submit" | "reset";
        onClick?: () => void;
        href?: string;
        className?: string;
    }
}

export {};
