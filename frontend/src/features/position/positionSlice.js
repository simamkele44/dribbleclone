import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    position: 1
}

const positionSlice = createSlice({
    name: "position",
    initialState,
    reducers: {
        setPosition: (state, action) => {
            state.position = action.payload;
        }
    }
})

export const { setPosition } = positionSlice.actions;

export const selectPosition = (state) => state.position.position;

export default positionSlice.reducer;