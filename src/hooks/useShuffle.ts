import {useState} from "react";

export function useShuffle(length: number) {
    const [elements, setElements] = useState<number[]>([])

    const shuffle = () => {
        const array = Array.from(Array(length).keys())

        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        setElements(array)
    }


    return {shuffle, elements, setElements}
}