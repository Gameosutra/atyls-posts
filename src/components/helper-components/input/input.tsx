import Image from "next/image";
import { InputTypeEnums } from "../../../models/enums/input.enum"
import classes from './input.module.scss';
import { IMAGE_LINKS } from "../../../models/constants/common.constant";

const Input = ({
    type,
    classNames,
    placeholder = '',
    onChange,
    value,
    isError
}: {
    type: InputTypeEnums;
    classNames?: { [key: string]: string };
    placeholder?: string;
    onChange: (value: any) => void;
    value: string | number;
    isError?: boolean
}) => {
    return (
        <div className={classes.parent}>
            <input
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                className={`
                    ${classes.container} 
                    ${classNames?.container}
                    ${isError && classes.error}
                `}
            />
            {type === InputTypeEnums.PASSWORD &&
                <Image
                    className={classes.hoverimg}
                    src={IMAGE_LINKS.EYE}
                    alt="eye"
                    width={20}
                    height={20}
                />}
        </div>
    )
}

export default Input;