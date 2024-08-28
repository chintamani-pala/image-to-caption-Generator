import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
export default function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}
