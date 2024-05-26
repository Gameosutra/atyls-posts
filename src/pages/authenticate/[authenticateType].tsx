import { useRouter } from "next/router";
import AuthenticateSection from "../../components/authenticate-section/authenticate-section";
import { AuthenticationEnums } from "../../models/enums/authenticate.enums";

const AuthenticatePage = () => {
    const router = useRouter();
    const { authenticateType } = router?.query || {};
    return <AuthenticateSection type={authenticateType as AuthenticationEnums} />
}

export default AuthenticatePage;