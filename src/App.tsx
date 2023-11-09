import {ChangeEvent, useState} from "react";
import './App.css'

const App = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [length, setLength] = useState<number>(100)
    const [speed, setSpeed] = useState<number>(1)
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
                <button onClick={shuffle} className='btn'>Shuffle</button>
                <button onClick={bubbleSort} className='btn'>Start</button>
            </div>
            <div className="elements-container">

                {elements.map((el, index) =>
                    <div
                        className={currentIndex === index ? 'el active' : 'el'}
                        style={{height: el * 2 + 2}}
                    />
                )}
            </div>
        </div>

    );
};

export default App;