import Footer from "../components/Footer/Footer";
import HeadComponent from "../components/HeadComponent/HeadComponent";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div>
      <HeadComponent />

      <main>
        <Header />
        <h1 className="font-bold"></h1>
      </main>
      <Footer />
    </div>
  );
}
