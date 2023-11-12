import {useAppSelector} from "../shared/hooks/reduxHooks.ts";

const ElementsList = () => {
    const {
        elements,
        currentIndex,
    } = useAppSelector((state) => state.elements)

    return (
        <div className="elements-container">
            {elements.map((el, index) => (
                <div
                    key={el}
                    className={currentIndex === index ? "el active" : "el"}
                    style={{height: el * 2 + 2}}
                />
            ))}
        </div>
    );
};

export default ElementsList;