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
}

export {};
