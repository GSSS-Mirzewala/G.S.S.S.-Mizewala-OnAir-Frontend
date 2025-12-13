// External Modules
import { useEffect, useState } from "react";

// Local Modules
import Message from "@components/Message";
import useHead from "@hooks/Head.jsx";

// Graphics
import Empty_Notification_Light from "@graphics/Empty_Notifications_Light.svg";

function Notifications() {
  useHead({
    title: "Notifications | G.S.S.S. Mirzewala",
  });
  const [MESSAGE, SET_MESSAGE] = useState();
  const Messages = [
    "No updates… maybe the teachers are on a coffee break ☕",
    "Nothing new from school – enjoy the silence! 🤫",
    "Breaking News: Nothing to announce today!",
    "No fresh notices — only fresh air 🍃",
    "No notifications yet… looks like even the notice board is on vacation 🏖️",
    "No updates… perhaps the staff room WiFi is slow 🐌",
    "Notice board is empty. Maybe it’s shy today 🙈",
    "Oh! Wait… wait… something might be on the way 👀",
    "Almost… almost… nope, no notification yet! 🤣",
    "Oh! Wait… maybe an update is cooking in the staff room 🍵",
    "Something is loading… just kidding, nothing yet!",
    "Shh… listen… that’s the sound of no notifications 🎶",
    "The notice board is on a tea break ☕",
    "Notifications are shy today 🙈",
    "Maybe the notifications missed the bus 🚌",
    "Loading… loading… ah, just kidding! Still nothing 😂",
  ];

  function GetNotificationMessage() {
    const RandomNumber = Math.floor(Math.random() * Messages.length);
    return Messages[RandomNumber];
  }

  useEffect(() => {
    SET_MESSAGE(GetNotificationMessage());
  }, []);

  const Notifications = [];
  return (
    <>
      {Notifications.length === 0 ? (
        <Message MESSAGE={MESSAGE} Graphic={Empty_Notification_Light} />
      ) : null}
    </>
  );
}

export default Notifications;
