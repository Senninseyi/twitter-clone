import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="w-full h-full min-h-screen bg-primary dark:bg-black">
          <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
            <div className="">
              <Image
                src="/logowhite.svg"
                width={250}
                height={250}
                alt="logo"
                className="object-contain"
              />
            </div>
            <div>
              <Link href="/signin" className="text-white font-medium">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
