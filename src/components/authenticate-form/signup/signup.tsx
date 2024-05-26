import { useState } from 'react';
import Button from '../../helper-components/button/button';
import Input from '../../helper-components/input/input';
import classes from './signup.module.scss';
import { InputTypeEnums } from '../../../models/enums/input.enum';
import { AuthenticationEnums } from '../../../models/enums/authenticate.enums';
import { validateEmail } from '../../../helpers/common.utils';
import { useRouter } from 'next/router';

export const Header = ({ value }: { value: string }) =>
    <div className={classes.header}>{value}</div>

const SignUp = ({ setTypeForm, callBack }: { setTypeForm: (type: string) => void, callBack?: () => void }) => {
    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const onClickSignUp = () => {
        router.push("posts");
        callBack?.();
    }
    return (
        <div className={classes.container}>
            <div className={classes.container_1}>SIGN UP</div>
            <div className={classes.container_2}>Create an account to continue</div>
            <div className={classes.container_3}>
                <div className={classes.container_3_sub}>
                    <Header value="Email" />
                    <Input
                        type={InputTypeEnums.EMAIL}
                        value={email}
                        onChange={(value) => setEmail(value?.target?.value)}
                        placeholder='Enter your email'
                        isError={validateEmail(email)}
                    />
                </div>
                <div className={classes.container_3_sub}>
                    <Header value="Username" />
                    <Input
                        type={InputTypeEnums.TEXT}
                        value={username}
                        onChange={(value) => setUserName(value?.target?.value)}
                        placeholder='Choose a preferred username'
                    />
                </div>
                <div className={classes.container_3_sub}>
                    <div className={classes.container_3_pass}>
                        <Header value="Password" />
                    </div>
                    <Input
                        type={InputTypeEnums.PASSWORD}
                        value={password}
                        onChange={(value) => setPassword(value?.target?.value)}
                        placeholder='Choose a strong password'
                    />
                </div>
            </div>
            <Button
                value="Continue"
                onClick={onClickSignUp}
                disabled={(validateEmail(email) || !password || !username)}
            />
            <div className={classes.container_4}>
                Already have an account? <span onClick={() => setTypeForm(AuthenticationEnums.SIGN_IN)}>Login →</span>
            </div>
        </div>
    )
}

export default SignUp;