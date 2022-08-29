import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
