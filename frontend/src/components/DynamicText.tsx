import { useEffect, useState } from "react";
import axios from "axios";

interface DynamicTextProps {
  text: string;
  lang?: string;
  className?: string;
  textColor?: string; // Accepts Tailwind classes or custom styles
}

const DynamicText: React.FC<DynamicTextProps> = ({
  text,
  lang = "en",
  className = "",
  textColor = "text-black", // Default text color
}) => {
  const [translatedText, setTranslatedText] = useState(text);

  useEffect(() => {
    setTranslatedText(text);
  }, [text]);

  useEffect(() => {
    const fetchTranslation = async () => {
      try {
        const response = await axios.get(
          `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
            text
          )}&langpair=en|${lang}`
        );
        if (response.data.responseData?.translatedText) {
          setTranslatedText(response.data.responseData.translatedText);
        }
      } catch (error) {
        console.error("Translation error:", error);
      }
    };

    if (lang !== "en") fetchTranslation();
  }, [text, lang]);

  return <span className={`${textColor} ${className}`}>{translatedText}</span>
};

export default DynamicText;
