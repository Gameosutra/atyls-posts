import classes from './button.module.scss';

const Button = ({
    classNames,
    value,
    onClick,
    disabled
}: {
    classNames?: { [key: string]: string };
    value: string;
    onClick: () => void;
    disabled?: boolean
}) => {
    return (
        <button className={`${classes.container} ${classNames?.container} ${disabled && classes.disabled}`}
            onClick={onClick}
            disabled={disabled}
        >
            {value}
        </button>
    )
}

export default Button;