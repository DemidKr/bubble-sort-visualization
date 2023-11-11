import {ChangeEvent, useState} from "react";
import "./App.css"
import {useShuffle} from "./hooks/useShuffle.ts";
import {useBubbleSort} from "./hooks/useBubbleSort.ts";

const App = () => {
    const [speed, setSpeed] = useState<number>(1)
    const [length, setLength] = useState<number>(100)

    const {shuffle, elements, setElements} = useShuffle(length)
    const {currentIndex, bubbleSort} = useBubbleSort(speed, elements, setElements)

    return (
        <div className="fullscreen-container">
            <div className="toolbar-container">
                <div className="input-box">
                    <label>Number of elements</label>
                    <input
                        type="number"
                        value={length}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setLength(Number(e.target.value))}
                    />
                </div>
                <div className="input-box">
                    <label>Speed (ms)</label>
                    <input
                        type="number"
                        value={speed}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setSpeed(Number(e.target.value))}
                    />
                </div>
                <button className='btn' onClick={shuffle}>Shuffle</button>
                <button className='btn' onClick={bubbleSort}>Start</button>
            </div>
            <div className="elements-container">
                {elements.map((el, index) => (
                    <div
                        key={el}
                        className={currentIndex === index ? "el active" : "el"}
                        style={{height: el * 2 + 2}}
                    />
                )
                )}
            </div>
        </div>

    );
};

export default App;