import {useState} from "react";

export function useBubbleSort(
    speed: number,
    elements: number[],
    setElements: React.Dispatch<React.SetStateAction<number[]>>
) {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const timer = (ms: number) => new Promise(res => setTimeout(res, ms));

    const bubbleSort = async () => {
        const array = [...elements]
        let swapped

        for (let i = 0; i < array.length - 1; i++)
        {
            swapped = false;
            for (let j = 0; j < array.length - i - 1; j++)
            {
                setCurrentIndex(j)
                if (array[j] > array[j + 1])
                {
                    const temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    swapped = true;
                    setElements(array)
                }
                await timer(speed)
            }

            if (swapped == false)
                break;
        }
        setElements(array)
    }

    return {currentIndex, bubbleSort}
}