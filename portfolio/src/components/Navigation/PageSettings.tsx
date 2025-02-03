import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

export default function PageSettings() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <FontAwesomeIcon icon={faLanguage} size="2x" color="var(--secondary-100)" />
        <div className="flex flex-row gap-2">
          <div className="cursor-pointer">EN</div>
          <div className="cursor-pointer">ES</div>
        </div>
      </div>
    </div>
  );
}
