import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import './SelectCategory.css';

const SelectCategory = ({handleClick}) => {
    const navigate = useNavigate();

    const clickHandler = (newCat) => {
        handleClick(newCat);
        navigate('/game');
    }

    return (
        <div>
            <h1 className="greeting">Select A Category</h1>
            <div className="selectButtons">
                <button className="selectButton" onClick={() => clickHandler("All")}>All Questions</button>
                <button className="selectButton" onClick={() => clickHandler("General Knowledge")}>General Knowledge</button>
                <button className="selectButton" onClick={() => clickHandler("Entertainment")}>Entertainment</button>
                <button className="selectButton" onClick={() => clickHandler("Science")}>Science</button>
                <button className="selectButton" onClick={() => clickHandler("Sports")}>Sports</button>
                <button className="selectButton" onClick={() => clickHandler("Geography")}>Geography</button>
                <button className="selectButton" onClick={() => clickHandler("History")}>History</button>
            </div>
        </div>
    );
}

export default SelectCategory;