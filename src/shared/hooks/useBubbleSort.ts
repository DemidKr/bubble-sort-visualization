import {useAppDispatch, useAppSelector} from "./reduxHooks.ts";
import {timer} from "../helpers/timer.ts";
import {setCurrentIndex, setElements, setIsSorting} from "../../store/reducers/elementsSlice.ts";

export function useBubbleSort() {
    const dispatch = useAppDispatch()
    const {
        elements, isSorting, speed
    } = useAppSelector((state) => state.elements)
    const array = JSON.parse(JSON.stringify(elements));

    const bubbleSort = async () => {
        // prevent multiple sorting
        if(isSorting) return;

        dispatch(setIsSorting(true))
        let swapped

        for (let i = 0; i < array.length - 1; i++)
        {
            swapped = false;
            for (let j = 0; j < array.length - i - 1; j++)
            {
                dispatch(setCurrentIndex(j))
                if (array[j] > array[j + 1])
                {
                    const temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    dispatch(setElements(array))
                    swapped = true;
                }
                await timer(speed)
            }

            if (swapped == false)
                break;
        }
        dispatch(setIsSorting(false))
    }

    return {bubbleSort}
}