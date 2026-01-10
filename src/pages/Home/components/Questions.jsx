// External Modules
import { useTranslation } from "react-i18next";

function Questions() {
  // Constants
  const { t } = useTranslation();

  return (
    <>
      <div className="rounded-[7px] bg-white p-4 flex items-start justify-start flex-col gap-1.5">
        <h2 className="text-[22px] font-medium" style={{ color: "#30DFC2" }}>
          {t("home_introduction_title")}
        </h2>
        <p className="text-[22px] font-medium max-sm:text-lg">
          {t("home_introduction")}
        </p>
      </div>
      <div className="rounded-[7px] bg-white p-4 flex items-start justify-start flex-col gap-1.5">
        <h2 className="text-[22px] font-medium" style={{ color: "#7930DF" }}>
          {t("home_staff_introduction_title")}
        </h2>
        <p className="text-[22px] font-medium max-sm:text-lg">
          {t("home_staff_introduction")}
        </p>
      </div>
    </>
  );
}

export default Questions;
