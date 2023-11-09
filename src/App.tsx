import {useState} from "react";
import './App.css'

const App = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [elements, setElements] = useState<number[]>(Array.from(Array(200).keys()))

    const sortElements = (): number[] => {
        const array = [...elements]


        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        setElements(array)
        return array
    }

    const timer = (ms: number) => new Promise(res => setTimeout(res, ms));

    const bubbleSort = async () => {
        const array = sortElements()
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
                await timer(1)
            }

            if (swapped == false)
                break;
        }
        setElements(array)

    }

    return (
        <div className="container">
            <button onClick={bubbleSort} className='start-btn'>Start</button>
            {elements.map((el, index) =>
                <div
                    className={currentIndex === index ? 'el active' : 'el'}
                    style={{height: el * 2 + 2}}
                />
            )}
        </div>
    );
};

export default App;