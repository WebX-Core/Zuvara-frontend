import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import {Navbar as NavbarNew} from "../components/shared/Navbar_new"

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <NavbarNew /> */}
      <Navbar/>
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
