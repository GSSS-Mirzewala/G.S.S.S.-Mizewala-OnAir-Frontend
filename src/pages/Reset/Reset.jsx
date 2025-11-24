// React Router (Components)
import { Form, Link } from "react-router-dom";

// Hooks
import { useBSF } from "@hooks/SecurityHooks";

// UI/UX Components
import Button from "@ui/Button";

function Reset() {
  return (
    <div className="w-full min-h-[100vh] bg-white px-4 py-2">
      <div className="w-full text-end">
        <Link to="/login">
          <span className="text-blue-500 font-semibold cursor-pointer">
            Go Back
          </span>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">Forget Password?</h1>
        <p className={`font-extralight font-inter`}>
          In order to Recieve OTP for Resetting Password - Fill out the USTA
          (Unique Student, Teacher & Administrator) PIN in the Form below.
        </p>
      </div>
      <div className="mt-10">
        <Form method="POST" className="w-full h-fit flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="USTA_PIN" className="font-medium">
              USTA PIN
            </label>
            <input
              type="text"
              id="USTA_PIN"
              name="USTA_PIN"
              autoComplete="USTA_PIN"
              required
              className={`w-[95%] max-sm:w-full border-2 border-gray-400 rounded-sm py-1 px-2 outline-0 hover:border-blue-600 font-semibold transition-colors ease-in-out duration-300`}
              minLength={11}
              maxLength={11}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="OTP" className="font-medium">
              OTP
            </label>
            <input
              type="text"
              id="OTP"
              name="OTP"
              autoComplete="off"
              required
              className={`w-[95%] max-sm:w-full border-2 border-gray-400 rounded-sm py-1 px-2 outline-0 hover:border-blue-500 transition-colors ease-in-out duration-300 tracking-widest`}
              maxLength={6}
              minLength={6}
            />
          </div>
          <Button text="Get OTP" type="dark" px="1.5" py="0.5" />
        </Form>
      </div>
    </div>
  );
}

export default Reset;

// Submit Action
export async function ResetAction({ request }) {
  const formData = await request.formData(); // Getting FormData object

  // Sanitizing Data
  const USTA_PIN = useBSF(formData.get("USTA_PIN"));
  const OTP = useBSF(formData.get("OTP"));

  // Creating Credentials Object
  const Credentials = {
    USTA_PIN: USTA_PIN,
    OTP: OTP,
  };

  // Converting Credentials into JSON Format
  const CREDENTIALS_JSON = JSON.stringify(Credentials);
  console.log("JSON Credentials:", CREDENTIALS_JSON);
}
