// React Hooks
import { useEffect, useState } from "react";

// Data
import Information from "@/data/Information";
import Release_Notes from "@/data/Release_Notes";

// Local Components
import Intro from "./components/Intro";
import Quote from "./components/Quote";
import Question from "./components/Question";
import NewUpdate from "./components/NewUpdate";

function Home() {
  // States & Variables
  const date = new Date();

  // New Update Notification (Block)
  const [NOTIFY, SET_NOTIFY] = useState();
  const TODAY =
    date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();

  useEffect(() => {
    if (Release_Notes[0].NOTIFY_TILL >= TODAY) {
      SET_NOTIFY(true);
    } else {
      SET_NOTIFY(false);
    }
  }, []);

  return (
    <>
      {NOTIFY && <NewUpdate SET_NOTIFY={SET_NOTIFY} />}
      <Quote />
      <Intro />
      {Information.map((Info, Index) => (
        <Question
          key={Index}
          Title={Info.TITLE}
          Hindi_Title={Info.HINDI_TITLE}
          Description={Info.DESCRIPTION}
          Hindi_Description={Info.HINDI_DESCRIPTION}
          Color={Info.COLOR}
        />
      ))}
    </>
  );
}

export default Home;
