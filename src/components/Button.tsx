interface ButtonProps {
    description: string,
    onClick: () => void
}

const Button = (props: ButtonProps) => {
    const {description, onClick} = props

    return (
        <button className='btn' onClick={onClick}>{description}</button>
    );
};

export default Button;