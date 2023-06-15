import React, { useState, useEffect } from "react";

import classes from "./Item.module.css";

import Hambur from "../assets/icon-hamburger.png";
import Info from "../assets/icon-info.png";
import Pencil from "../assets/icon-edit.png";
import YesTogg from "../assets/icon-switch-purple.png";
import NoTogg from "../assets/icon-switch-dark.png";

const Item = ({ item, index }) => {
  const [isDisplay, setIsDisplay] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(item.text);
  const [isTextBold, setIsTextBold] = useState(false);


  const [showDescription, setShowDescription] = useState(false);

  const handleDisplay = () => {
    setIsDisplay(!isDisplay);
    setIsTextBold(!isTextBold);
  };

  const handleEdit = () => {
    setIsEditing(true);
    
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSave = () => {
    setIsEditing(false);
   
  };

  const handleDescriptionToggle = () => {
    setShowDescription(!showDescription);
  };

 

  return (
    <>
      

      <div className={classes["into-section"]}>
    
        <div>
          <img
            className={classes.iconHB}
            src={Hambur}
            alt="Move"
            width="20px"
          />
        </div>

        <button onClick={handleDescriptionToggle}>
          <div className={classes.imageContainer}>
            <img className={classes.info} src={Info} alt="Info" width="20px" />
            {showDescription && (
              <div className={classes.description}>{item.desp}</div>
            )}
          </div>
        </button>

        {isEditing ? (
          <input
            className={classes.input}
            type="text"
            value={title}
            onChange={handleTitleChange}
          />
        ) : (
          <p
            className={`inputText`}
            style={{ fontWeight: isTextBold ? "normal" : "bold" }}

          >
            {title}
          </p>
        )}

        {isEditing ? (
          <button className={classes.pencil} onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className={classes.pencil} onClick={handleEdit}>
            <img
              className={classes.pencil}
              src={Pencil}
              alt="Edit"
              width="20px"
            />
          </button>
        )}

        <button onClick={handleDisplay}>
          {isDisplay ? (
            <img
              className={classes.toggle}
              src={YesTogg}
              alt="Yes"
              width="20px"
            />
          ) : (
            <img
              className={classes.toggle}
              src={NoTogg}
              alt="Yes"
              width="20px"
            />
          )}
        </button>
      </div>
    </>
  );
};

export default Item;
