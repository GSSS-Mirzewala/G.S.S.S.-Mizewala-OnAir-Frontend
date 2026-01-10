// Local Hooks
import { usePreference } from "@hooks/ContextHooks";

function Intro() {
  const { LANGUAGE } = usePreference();
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 sm:gap-2.5 bg-white rounded-sm p-6">
      <h1 className="text-center text-xl sm:text-2xl text-[#FFA109] font-normal sm:font-semibold">
        राजकीय उच्च माध्यमिक विद्यालय, मिर्जेवाला
      </h1>
      <h1 className="text-center text-xl sm:text-2xl text-[#007736] font-normal sm:font-semibold">
        Government Senior Secondary School, Mirzewala
      </h1>
      <h1 className="text-center text-xs sm:text-2xl text-[#944B01] font-normal sm:font-semibold">
        {LANGUAGE === "hi"
          ? "(राजस्थान माध्यमिक शिक्षा बोर्ड (RBSE) से सम्बद्ध)"
          : "(Affiliated with the Rajasthan Board of Secondary Education (RBSE))"}
      </h1>
    </div>
  );
}

export default Intro;
