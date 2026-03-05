// External Modules
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

// Local Modules
import api from "@utils/api.js";
import API_Loader from "@components/API_Loader";
import { APIsContext } from "@/contexts/APIs";
import Banner from "./components/Banner";
import Hotbar from "./components/Hotbar";
import Modal from "./components/Modal";

function Profile() {
  // Declarations
  const navigate = useNavigate();
  const User = useSelector((store) => store.User);
  const { SET_AUTH_API_CALLED, PROFILE_API_CALLED } = useContext(APIsContext);

  // Constants & States
  const { id } = useParams();
  const [User_INFO, UPDATE_User_INFO] = useState({});
  const [MODAL_OPEN, SET_MODAL_OPEN] = useState(false);
  const [IMAGE_URL, SET_IMAGE_URL] = useState("");
  const [IMAGE_FILE, SET_IMAGE_FILE] = useState("");

  // Functions
  async function callAPI() {
    SET_AUTH_API_CALLED(true);
    const response = await api("GET", `u/get/p/${id}`);
    UPDATE_User_INFO(response.data);
  }

  function neutralizeModal() {
    SET_MODAL_OPEN(!MODAL_OPEN);
  }

  useEffect(() => {
    if (id) {
      callAPI();
      SET_AUTH_API_CALLED(false);
    } else if (!id && User?._id) {
      navigate(`/profile/${User._id}`, { replace: true });
    }
  }, [id, User?._id, navigate]);

  return (
    <div className="p-2">
      {PROFILE_API_CALLED && <API_Loader />}
      <Banner info={User_INFO} />
      {MODAL_OPEN && (
        <Modal
          neutralizeModal={neutralizeModal}
          url={IMAGE_URL}
          file={IMAGE_FILE}
        />
      )}
      {User?._id === User_INFO?._id && (
        <Hotbar
          neutralizeModal={neutralizeModal}
          setUrl={SET_IMAGE_URL}
          setFile={SET_IMAGE_FILE}
        />
      )}
    </div>
  );
}

export default Profile;
