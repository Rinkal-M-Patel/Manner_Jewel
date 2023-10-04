import React, { useState, useEffect } from "react";

const Accordion = () => {
  const [accordionData, setAccordionData] = useState([
    {
      title: "DESCRIPTION",
      description: "asas",
    },
    {
      title: "MATERIALS",
      description: "Loading description...",
    },
    {
      title: "SIZING",
      description: "Loading description...",
    },
  ]);

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    setTimeout(() => {
      const updatedAccordionData = accordionData.map((item, index) => {
        if (index === 1) {
          return {
            ...item,
            description: "Description",
          };
        } else if (index === 2) {
          return {
            ...item,
            description: "Description",
          };
        }
        return item;
      });

      setAccordionData(updatedAccordionData);
    }, 1000);
  }, []);

  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {accordionData.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                openAccordion === index ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => toggleAccordion(index)}
              aria-expanded={openAccordion === index}
            >
              {item.title}
            </button>
          </h2>
          <div
            id={`flush-collapse${index}`}
            className={`accordion-collapse ${
              openAccordion === index ? "show" : "collapse"
            }`}
          >
            <div className="accordion-body">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
