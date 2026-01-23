// import Image from "next/image";
// import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  return redirect("/babyCare");
}
// <main className="h-screen w-screen relative">
//   <nav className="fixed top-0 w-full py-4 flex items-center justify-center">
//     <Link href="/">
//       <Image src="/logo.png" alt="Zuvara Logo" width={90} height={90} />
//     </Link>
//   </nav>
//   <section className="h-screen flex justify-center items-center">
//     <Link href="/babyCare">baby Care</Link>
//     <Link href="/personalCare">Personal Care</Link>
//   </section>
// </main>
