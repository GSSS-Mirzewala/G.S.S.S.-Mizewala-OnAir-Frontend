// External Modules
import { useTranslation } from "react-i18next";

// Local Modules
import useHead from "@hooks/Head.jsx";

function Introduction() {
  useHead({
    title: "About | G.S.S.S. Mirzewala",
  });
  const { t } = useTranslation();
  return (
    <div className="p-4 px-3 md:px-6">
      <ul className="flex flex-col gap-8">
        <li>
          <span className="text-lg font-semibold">
            {t("introduction_title")}
          </span>
          <p>{t("introduction")}</p>
        </li>
      </ul>
    </div>
  );
}

export default Introduction;
