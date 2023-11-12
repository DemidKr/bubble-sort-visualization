import "./App.css"
import Toolbar from "./components/Toolbar.tsx";
import ElementsList from "./components/ElementsList.tsx";

const App = () => {
    return (
        <div className="fullscreen-container">
            <Toolbar/>
            <ElementsList/>
        </div>
    );
};

export default App;