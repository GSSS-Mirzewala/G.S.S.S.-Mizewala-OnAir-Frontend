// External Modules
import { useRef, useState } from "react";

// Local Modules
import api from "@utils/api.js";
import API_Loader from "@components/API_Loader";

// Assets
import UploadIcon from "@icons/Upload.svg";

function Hotbar() {
  // Constants, References & States
  const [API_CALLED, SET_API_CALLED] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  // Handle file selection
  function handleFileChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile); // store file for upload
      const imageUrl = URL.createObjectURL(selectedFile);
      setAvatarUrl(imageUrl); // show preview immediately
    }
  }

  // Upload file to backend
  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      SET_API_CALLED(true);
      const res = await api(
        "PUT",
        "u/put/p/avatar", // backend route
        true,
        formData,
      );
      if (res.isSuccess) {
        window.location.reload();
      }
    } catch (error) {
      alert("Failed to upload avatar");
    } finally {
      SET_API_CALLED(false);
    }
  };

  return (
    <>
      {API_CALLED && <API_Loader />}
      <div className="px-4 py-2 flex gap-10 sm:gap-20 border border-[#c0c0c0] bg-white rounded-full items-center">
        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        {/* Upload button */}
        <img
          src={UploadIcon}
          alt="Upload Icon"
          width={35}
          className="cursor-pointer"
          onClick={() => fileInputRef.current.click()}
        />

        {/* Optional: Upload button to trigger backend upload */}
        {file && (
          <button
            onClick={handleUpload}
            className="px-3 py-1 bg-green-500 text-white rounded"
          >
            Upload
          </button>
        )}
      </div>
    </>
  );
}

export default Hotbar;
