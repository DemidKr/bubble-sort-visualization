import {ChangeEvent} from "react";
import "./App.css"
import {useAppDispatch, useAppSelector} from "./shared/hooks/reduxHooks.ts";
import {setLength, setSpeed, shuffle} from "./store/reducers/elementsSlice.ts";
import {useBubbleSort} from "./shared/hooks/useBubbleSort.ts";

const App = () => {
    const dispatch = useAppDispatch()
    const {bubbleSort} = useBubbleSort()
    const {length, elements, currentIndex, speed} = useAppSelector((state) => state.elements)

    return (
        <div className="fullscreen-container">
            <div className="toolbar-container">
                <div className="input-box">
                    <label>Number of elements</label>
                    <input
                        type="number"
                        value={length}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setLength(Number(e.target.value)))}
                    />
                </div>
                <div className="input-box">
                    <label>Speed (ms)</label>
                    <input
                        type="number"
                        value={speed}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setSpeed(Number(e.target.value)))}
                    />
                </div>
                <button className='btn' onClick={() => dispatch(shuffle())}>Shuffle</button>
                <button className='btn' onClick={bubbleSort}>Start</button>
            </div>
            <div className="elements-container">
                {elements.map((el, index) => (
                    <div
                        key={el}
                        className={currentIndex === index ? "el active" : "el"}
                        style={{height: el * 2 + 2}}
                    />
                ))}
            </div>
        </div>

    );
};

export default App;