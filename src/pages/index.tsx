import { useRouter } from "next/router";
import { useEffect } from "react";

const HomePage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/authenticate/sign-in");
  })
  return (
    <div></div>
  )
}

export default HomePage;