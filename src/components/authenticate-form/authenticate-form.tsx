import { useCallback, useEffect, useState } from "react";
import { AuthenticationEnums } from "../../models/enums/authenticate.enums";
import classes from './authenticate-form.module.scss';
import SignIn from "./signin/signin";
import SignUp from "./signup/signup";

const AuthenticateForm = ({ type, callBack } : {type: AuthenticationEnums; callBack?: () => void}) => {
    const [typeForm, setTypeForm] = useState<string>(type);

    useEffect(() => {
        setTypeForm(type);
    }, [type])

    const getRequiredForm = useCallback((typeForm: string) => {
        switch(typeForm) {
            case AuthenticationEnums.SIGN_IN: 
                return <SignIn callBack={callBack} setTypeForm={(type: string) => setTypeForm(type)} />;
            case AuthenticationEnums.SIGN_UP:
                return <SignUp callBack={callBack} setTypeForm={(type: string) => setTypeForm(type)} />
            default: 
                return <></>;
        }
    }, [typeForm]);

    return (
        <div className={classes.container}>
            {getRequiredForm(typeForm)}
        </div>
    )
}

export default AuthenticateForm;