// React Hooks
import { useEffect, useState } from "react";

// Local Components
import useHead from "@hooks/Head.jsx";
import api from "@utils/api";
import Intro from "./components/Intro";
import Quote from "./components/Quote";
import PrincipalSays from "./components/PrincipalSays";
import Enviornment from "./components/Enviornment";
import Questions from "./components/Questions";

function Home() {
  useHead({
    title: "Home | G.S.S.S. Mirzewala",
  });

  return (
    <>
      <Enviornment />
      <Quote />
      <Intro />
      <PrincipalSays />
      <section className="flex flex-col gap-4">
        <Questions />
      </section>
    </>
  );
}

export default Home;
