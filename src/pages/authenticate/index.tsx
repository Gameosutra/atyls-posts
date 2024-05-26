import { useRouter } from "next/router";
import { useEffect } from "react";

const Authenticate = () => {
    const router = useRouter();
    useEffect(() => {
        router.push("/authenticate/sign-in");
    })
    return (
        <div></div>
    )
}

export default Authenticate;