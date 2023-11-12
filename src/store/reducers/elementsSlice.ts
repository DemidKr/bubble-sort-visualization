import {createSlice} from "@reduxjs/toolkit"
import type {PayloadAction} from "@reduxjs/toolkit"

interface ElementsState {
    elements: number[],
    currentIndex: number,
    length: number,
    speed: number,
    isSorting: boolean,
}

const initialState: ElementsState = {
    elements: [],
    currentIndex: 0,
    length: 50,
    speed: 50,
    isSorting: false,
}

export const elementsSlice = createSlice({
    name: "elements",
    initialState,
    reducers: {
        setLength: (state, action: PayloadAction<number>) => {
            state.length = action.payload
        },
        setSpeed: (state, action: PayloadAction<number>) => {
            state.speed = action.payload
        },
        setIsSorting: (state, action: PayloadAction<boolean>) => {
            state.isSorting = action.payload
        },
        setElements: (state, action: PayloadAction<number[]>) => {
            state.elements = [...action.payload]
        },
        setCurrentIndex: (state, action: PayloadAction<number>) => {
            state.currentIndex = action.payload
        },
        shuffle: (state) => {
            if(state.isSorting) return;

            const array = Array.from(Array(state.length).keys())

            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }

            state.elements = array
        },
    },
})

export const {
    setLength,
    setSpeed,
    shuffle,
    setElements,
    setIsSorting,
    setCurrentIndex
} = elementsSlice.actions

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.elements.