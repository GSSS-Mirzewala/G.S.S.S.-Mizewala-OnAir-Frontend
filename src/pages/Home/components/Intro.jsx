// Local Hooks
import { usePreference } from "@hooks/ContextHooks";

// Styles
import styles from "./Intro.module.css";

function Intro() {
  const { LANGUAGE } = usePreference();
  return (
    <div className={styles.Box}>
      <h1 className={`${styles.Headings} text-[#FFA109]`}>
        राजकीय उच्च माध्यमिक विद्यालय, मिर्जेवाला
      </h1>
      <h1 className={`${styles.Headings} text-[#007736]`}>
        Government Senior Secondary School, Mirzewala
      </h1>
      <h1 className={`${styles.Headings} text-[#944B01]`}>
        {LANGUAGE === "hi"
          ? "(राजस्थान माध्यमिक शिक्षा बोर्ड (RBSE) से सम्बद्ध)"
          : "(Affiliated with the Rajasthan Board of Secondary Education (RBSE))"}
      </h1>
    </div>
  );
}

export default Intro;
