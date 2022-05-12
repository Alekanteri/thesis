import React from "react";
import Accordion from "./components/Accordion";
import elem_1 from "../json/elems_1.json";
import elem_2 from "../json/elems_2.json";
import elem_3 from "../json/elems_3.json";
import elem_4 from "../json/elems_4.json";
import elem_5 from "../json/elems_5.json";
import elem_6 from "../json/elems_6.json";
import elem_7 from "../json/elems_7.json";
import elem_8 from "../json/elems_8.json";
import elem_9 from "../json/elems_9.json" 
import elem_10 from "../json/elems_10.json" 
import elem_11 from "../json/elems_11.json" 
import elem_12 from "../json/elems_12.json" 

const doc_1 = elem_1.map((elem) => {
  return (
    <div className="doc_link">
      <a href={elem.link}>{elem.title}</a>
    </div>
  );
});
const doc_2 = elem_2.map((elem) => {
  return (
    <div className="doc_link">
      <a href={elem.link}>{elem.title}</a>
    </div>
  );
});
const doc_3 = elem_3.map((elem) => {
  return (
    <div className="doc_link">
      <a href={elem.link}>{elem.title}</a>
    </div>
  );
});
const doc_4 = elem_4.map((elem) => {
  return (
    <div className="doc_link">
      <a href={elem.link}>{elem.title}</a>
    </div>
  );
});
const doc_5 = elem_5.map((elem) => {
  return (
    <div className="doc_link">
      <a href={elem.link}>{elem.title}</a>
    </div>
  );
});
const doc_6 = elem_6.map((elem) => {
  return (
    <div className="doc_link">
      <a href={elem.link}>{elem.title}</a>
    </div>
  );
});
const doc_7 = elem_7.map((elem) => {
  return (
    <div className="doc_link">
      <a href={elem.link}>{elem.title}</a>
    </div>
  );
});
const doc_8 = elem_8.map((elem) => {
  return (
    <div className="doc_link">
      <a href={elem.link}>{elem.title}</a>
    </div>
  );
});
const doc_9 = elem_9.map((elem) => {
  return (
    <div className="doc_link">
      <a href={elem.link}>{elem.title}</a>
    </div>
  );
})
const doc_10 = elem_10.map((elem) => {
  return (
    <div className="doc_link">
      <a href={elem.link}>{elem.title}</a>
    </div>
  );
})
const doc_11 = elem_11.map((elem) => {
  return (
    <div className="doc_link">
      <a href={elem.link}>{elem.title}</a>
    </div>
  );
})
const doc_12 = elem_12.map((elem) => {
  return (
    <div className="doc_link">
      <a href={elem.link}>{elem.title}</a>
    </div>
  );
})

export const Documents = () => {
  return (
    <div className="container">
      <h2 className="top_title">Список документов</h2>
      <Accordion
        title={"Устав образовательной организации"}
        content={doc_1}
      />
      <Accordion
        title={
          "Свидетельство о государственной аккредитации (с приложениями) (при наличии)"
        }
        content={doc_2}
      />
      <Accordion
        title={"Правила внутреннего распорядка обучающихся"}
        content={doc_3}
      />
      <Accordion
        title={"Правила внутреннего трудового распорядка"}
        content={doc_4}
      />
      <Accordion
        title={"Коллективный договор (при наличии)"}
        content={doc_5}
      />
      <Accordion
        title={"Отчёты о результатах самообследования"}
        content={doc_6}
      />
      <Accordion title={"Правила приема обучающихся"} content={doc_7} />
      <Accordion title={"Режим занятий обучающихся"} content={doc_8} />
      <Accordion title={"Документы регламентирующие учебный процесс в АНО ВО МГЭУ по образовательным программам высшего образования - программам бакалавриата, программам специалитета и программам магистратуры"} content={doc_9} />
      <Accordion title={"Документы, регламентирующие учебный процесс в АНО ВО МГЭУ по образовательным программам высшего образования - программам подготовки научно-педагогических кадров в аспирантуре"} content={doc_10} />
      <Accordion title={"Документы, регламентирующие учебный процесс в АНО ВО МГЭУ по образовательным программам дополнительного образования"} content={doc_11} />
      <Accordion title={"Документы, регламентирующие учебный процесс в АНО ВО МГЭУ по образовательным программам среднем профессиональном образования"} content={doc_12} />
    </div>
  );
};
