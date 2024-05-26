import { useState } from 'react';
import Button from '../../helper-components/button/button';
import Input from '../../helper-components/input/input';
import classes from './signin.module.scss';
import { InputTypeEnums } from '../../../models/enums/input.enum';
import { AuthenticationEnums } from '../../../models/enums/authenticate.enums';
import { validateEmail } from '../../../helpers/common.utils';
import { useRouter } from 'next/router';

export const Header = ({ value }: { value: string }) =>
    <div className={classes.header}>{value}</div>

const SignIn = ({ setTypeForm, callBack }: { setTypeForm: (type: string) => void, callBack?: () => void }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const onClickSignIn = () => {
        router.push("/posts");
        callBack?.();
    }
    return (
        <div className={classes.container}>
            <div className={classes.container_1}>WELCOME BACK</div>
            <div className={classes.container_2}>Log into your account</div>
            <div className={classes.container_3}>
                <div className={classes.container_3_sub}>
                    <Header value="Email or Username" />
                    <Input
                        type={InputTypeEnums.EMAIL}
                        value={email}
                        onChange={(value) => setEmail(value?.target?.value)}
                        placeholder='Enter your email or username'
                        isError={validateEmail(email)}
                    />
                </div>
                <div className={classes.container_3_sub}>
                    <div className={classes.container_3_pass}>
                        <Header value="Password" />
                        <Header value="Forgot password?" />
                    </div>
                    <Input
                        type={InputTypeEnums.PASSWORD}
                        value={password}
                        onChange={(value) => setPassword(value?.target?.value)}
                        placeholder='Enter your password'
                    />
                </div>
            </div>
            <Button
                value="Login Now"
                onClick={onClickSignIn}
                disabled={(validateEmail(email) || !password)}
            />
            <div className={classes.container_4}>
                Not registered yet? <span onClick={() => setTypeForm(AuthenticationEnums.SIGN_UP)}>Register →</span>
            </div>
        </div>
    )
}

export default SignIn;