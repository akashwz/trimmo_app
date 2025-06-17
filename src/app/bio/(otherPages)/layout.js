import Footer from "@/components/lending/Footer";
import Header from "@/components/lending/Header";
import "../style.css";
export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
