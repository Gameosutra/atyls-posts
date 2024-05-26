import Image from "next/image";
import { AuthenticationEnums } from "../../models/enums/authenticate.enums";
import classes from './authenticate-section.module.scss';
import { IMAGE_LINKS } from "../../models/constants/common.constant";
import AuthenticateForm from "../authenticate-form/authenticate-form";

const AuthenticateSection = ({ type }: { type: AuthenticationEnums }) => {
    return (
        <div className={classes.container}>
            <Image 
                className={classes.container_img}
                src={IMAGE_LINKS.LOGO}
                alt="atyle"
                width={40}
                height={40}
            />
            <AuthenticateForm type={type} />
        </div>
    )
}

export default AuthenticateSection;