import React from "react";
import "./Coments.scss"


export const Coments = (props) => {
  return (
    <div className="comment">
      <div className="head">
        <div className="head_title">
          <p>Студент:</p>
          <p>Направление подготовки:</p>
          <p>Форма обучения:</p>
        </div>
        <div>
          <p>{props.name}</p>
          <p>{props.way}</p>
          <p>{props.status}</p>
        </div>
      </div>
      <hr className="hr"/>
      <div className="com_body">
        {props.children}
      </div>
    </div>
  );
};
