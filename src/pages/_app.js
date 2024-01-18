import NavBar from "@/components/Navbar";
import "@/styles/globals.css";
import { userState } from "@/store/atoms/user";
import isMountedState from "@/store/atoms/isMounted";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <InitUser />
        <NavBar />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

function InitUser() {
  const setUser = useSetRecoilState(userState);
  const setMounted = useSetRecoilState(isMountedState);
  useEffect(() => {
    const init = async () => {
      try {
        const response = await fetch(`http://localhost:3001/me`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        const data = await response.json();
        console.log(data);

        if (data.user) {
          setUser({
            user: data.user,
            isLoading: false,
          });
        }
      } catch (e) {
        console.error(e);
      } finally {
        setMounted(true);
      }
    };
    init();
  }, []);
  return null;
}
