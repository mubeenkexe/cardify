import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FlashCardSlice {
    flashcards: FlashCard[];
}

const initialState: FlashCardSlice = {
    flashcards: [],
};

const flashcardSlice = createSlice({
    name: "flashcards",
    initialState,
    reducers: {
        /**
         * Adds a new flashcard to the array of flashcards.
         * @param {PayloadAction<FlashCard>} action The action containing the flashcard to add.
         */
        addFlashcard: (state, action: PayloadAction<FlashCard>) => {
            state.flashcards.push(action.payload);
        },

        /**
         * Deletes a flashcard from the array of flashcards.
         * @param {PayloadAction<string>} action The action containing the ID of the flashcard to delete.
         */
        deleteFlashcard: (state, action: PayloadAction<string>) => {
            state.flashcards = state.flashcards.filter(
                (flashcard) => flashcard.id !== action.payload
            );
        },

        /**
         * Edits a flashcard in the array of flashcards.
         * @param {PayloadAction<{id: string, updatedCard: Partial<FlashCard>}>} action The action containing the ID of the flashcard to edit and the updated flashcard.
         */
        editFlashCard: (
            state,
            action: PayloadAction<{
                id: string;
                updatedCard: Partial<FlashCard>;
            }>
        ) => {
            const index = state.flashcards.findIndex(
                (card) => card.id === action.payload.id
            );

            if (index !== -1) {
                state.flashcards[index] = {
                    ...state.flashcards[index],
                    ...action.payload.updatedCard,
                };
            }
        },
    },
});

export const { addFlashcard, deleteFlashcard, editFlashCard } =
    flashcardSlice.actions;

export default flashcardSlice.reducer;
