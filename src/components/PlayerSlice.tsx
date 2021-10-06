import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface hand {
    player: 1 | 2 | 3 | 4 | 5 | 6,
    card: number
}

export const PlayerSlice = createSlice({
    name: "Player",
    initialState: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] },
    reducers: {
        drawCard: (state, action: PayloadAction<hand>) => {
            const player = action.payload.player;
            const newCard = action.payload.card;
            return { ...state, [player]: [...state[player], newCard] };
        },
        playCard: (state, action: PayloadAction<hand>) => {
            const player = action.payload.player;
            return {...state, [player]: [state[player].filter(number => number !== action.payload.card)]}
        }
    }
});

export const { drawCard, playCard } = PlayerSlice.actions;

export default PlayerSlice.reducer;