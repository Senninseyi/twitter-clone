import Link from "next/link";
import Layout from "../components/layout/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <div>Hello</div>
        <Link href="/signin">Signin</Link>
      </Layout>
    </>
  );
}
