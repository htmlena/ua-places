import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col px-3.5 md:px-11">
      <Header />
      <main className="grow px-3.5 md:px-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
