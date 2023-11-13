import {ChangeEvent} from "react";

interface InputProps {
    value: number,
    label: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: InputProps) => {
    const {
        value, label, onChange
    } = props

    return (
        <div className="input-box">
            <label>{label}</label>
            <input
                type="number"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;