import Accordion from "../components/Accordion";
import { accordionData } from "../utils/content";
import "../styles/Accordion.scss";

const AccordionPage = () => {
  return (
    <div className="acc-root">
      <div className="accordion">
        {accordionData.map(({ title, content }, index) => (
          <Accordion key={index} title={title} content={content} />
        ))}
      </div>
    </div>
  );
};
export default AccordionPage;
