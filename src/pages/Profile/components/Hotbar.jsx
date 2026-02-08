// Local Modules
import Logout from "./Logout";
import Upload from "./Upload";

function Hotbar({ neutralizeModal, setUrl, setFile }) {
  return (
    <>
      <div className="px-4 py-2 sm:min-w-[30vw] sm:justify-self-center flex flex-row  items-center justify-between border border-[#c0c0c0] bg-white rounded-full">
        <Upload
          neutralizeModal={neutralizeModal}
          setUrl={setUrl}
          setFile={setFile}
        />
        <Logout />
      </div>
    </>
  );
}

export default Hotbar;
