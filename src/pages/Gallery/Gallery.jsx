// Local Modules
import Carousel from "./components/Carousel";
import useHead from "@hooks/Head.jsx";

function Gallery() {
  useHead({
    title: "Gallery | G.S.S.S. Mirzewala",
  });
  return (
    <>
      <Carousel />
    </>
  );
}

export default Gallery;
