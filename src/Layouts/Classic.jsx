// Dependencies
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

// Local Components
import Navbar from "@components/Navbar";
import Navigation from "@components/Navigation";
import Hero from "@components/Hero";
import Footer from "@components/Footer";
import Loader from "@components/Loader";

function Classic() {
  // Loader (Block)
  const [LOADING, IsLoading] = useState(true);

  useEffect(() => {
    const showLoader = sessionStorage.getItem("showLoader");

    if (!showLoader) {
      const Delay = Math.random() * (5.5 - 1.5) + 1.5;
      const timer = setTimeout(() => {
        IsLoading(false);
        sessionStorage.setItem("showLoader", "true");
      }, Delay * 1000);

      return () => clearTimeout(timer);
    } else {
      IsLoading(false);
    }
  }, []);

  if (LOADING) {
    return <Loader />;
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero>
          <Outlet />
        </Hero>
        <Navigation />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Classic;
