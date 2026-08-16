import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  const [, setReady] = useState(false);

  return (
    <>
      <LoadingScreen onDone={() => setReady(true)} />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}
