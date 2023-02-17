import "./App.css";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Slider from "./components/Slider";
import SummaryProductList from "./components/SummaryProductList";
import VideoWrapper from "./components/VideoWrapper";
import Footer from "./components/Footer";

import MapForm from "./components/MapForm";

const App = () => {
  return (
    <div className="flex justify-center flex-col">
      <Header />
      <Slider />
      <SummaryProductList />
      <Gallery />
      <VideoWrapper />
      <MapForm />
      <Footer />
    </div>
  );
};

export default App;
