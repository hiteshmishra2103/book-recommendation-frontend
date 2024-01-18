import Image from "next/image";
import { Inter } from "next/font/google";
import PreferenceForm from "@/components/PreferenceForm";
import { useRecoilValue } from "recoil";
import { userState } from "@/store/atoms/user";
import isMountedState from "@/store/atoms/isMounted";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";
export default function Home() {
  const user = useRecoilValue(userState);
  const isMounted = useRecoilValue(isMountedState);
  if (!isMounted) {
    return null;
  } else {
    if (!user.user) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
            <h1 className="text-6xl font-bold">
              Tell Your Preferences We will {" "}
              <Link className="text-blue-600" href="https://nextjs.org">
                Recommend You Books
              </Link>
            </h1>

            <p className="mt-3 text-2xl">
              Get started by{" "}
              <Link href="/signup" className="text-blue-600 hover:underline">
                creating an account
              </Link>
            </p>
          </main>
        </div>
      );
    } else {
      return <PreferenceForm />;
    }
  }
}
