import React from "react";
import style from "./contactperpage.module.css";

const ContactPerPage = ({ itemPerPage, onChange }) => {
  return (
    <div className={style.selectContainer}>
      <div className={style.selectWrap}>
        <span>Per page: </span>
        <select onChange={onChange} className="custom-select">
          {itemPerPage.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default ContactPerPage;
