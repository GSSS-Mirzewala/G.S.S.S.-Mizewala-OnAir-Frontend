// Local Hooks
import { usePreference } from "@hooks/ContextHooks";

function Introduction() {
  const { LANGUAGE } = usePreference();
  return (
    <div className="p-4 px-3 md:px-6">
      <ul className="flex flex-col gap-8">
        <li>
          <span className="text-lg font-semibold">
            {LANGUAGE === "hi" ? "श्रेय" : "Introduction"}
          </span>
          <p>
            {LANGUAGE === "hi"
              ? "राजकीय वरिष्ठ माध्यमिक विद्यालय, मिर्जेवाला, श्रीगंगानगर (राजस्थान) में स्थित एक प्रतिष्ठित शैक्षणिक संस्था है। क्षेत्र के विद्यार्थियों को गुणवत्तापूर्ण शिक्षा प्रदान करने के उद्देश्य से स्थापित यह विद्यालय कई वर्षों से ज्ञान और विकास का केंद्र रहा है। शैक्षणिक उत्कृष्टता, अनुशासन तथा समग्र विकास पर विशेष ध्यान देते हुए, जी.एस.एस.एस. मिर्जेवाला का लक्ष्य है नवोदित मस्तिष्कों को संवारना और उन्हें भविष्य की चुनौतियों के लिए तैयार करना।"
              : "Government Senior Secondary School, Mirzewala, is a reputed educational institution situated in Sri Ganganagar, Rajasthan. Established with the vision of providing quality education to students of the region, the school has been a center of learning and growth for many years. With a focus on academic excellence, discipline, and holistic development, G.S.S.S. Mirzewala strives to nurture young minds and prepare them for future challenges."}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Introduction;
