import {ChangeEvent} from "react";
import {setLength, setSpeed, shuffle} from "../store/reducers/elementsSlice.ts";
import {useAppDispatch, useAppSelector} from "../shared/hooks/reduxHooks.ts";
import {useBubbleSort} from "../shared/hooks/useBubbleSort.ts";
import Input from "./Input.tsx";
import Button from "./Button.tsx";

const Toolbar = () => {
    const dispatch = useAppDispatch()
    const {bubbleSort} = useBubbleSort()
    const {
        length,
        speed
    } = useAppSelector((state) => state.elements)

    const handleLengthChange = (e: ChangeEvent<HTMLInputElement>) => dispatch(setLength(Number(e.target.value)))

    const handleSpeedChange = (e: ChangeEvent<HTMLInputElement>) => dispatch(setSpeed(Number(e.target.value)))

    const handleShuffleClick = () => dispatch(shuffle())

    return (
        <div className="toolbar-container">
            <Input
                value={length}
                label={"Number of elements"}
                onChange={handleLengthChange}
            />
            <Input
                value={speed}
                label={"Speed (ms)"}
                onChange={handleSpeedChange}
            />
            <Button description={"Shuffle"} onClick={handleShuffleClick}/>
            <Button description={"Start"} onClick={bubbleSort}/>
        </div>
    );
};

export default Toolbar;