import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const SelectCategory = ({handleClick}) => {
    const navigate = useNavigate();
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (clicked) {
          navigate('/game');
        }
      }, [clicked, navigate]);

    const clickHandler = (newCat) => {
        setClicked(true);
        handleClick(newCat);
    }

    return (
        <div>
            <button onClick={() => clickHandler("All")}>All Questions</button>
            <button onClick={() => clickHandler("General Knowledge")}>General Knowledge</button>
            <button onClick={() => clickHandler("Entertainment")}>Entertainment</button>
            <button onClick={() => clickHandler("Science")}>Science</button>
            <button onClick={() => clickHandler("Sports")}>Sports</button>
            <button onClick={() => clickHandler("Geography")}>Geography</button>
            <button onClick={() => clickHandler("History")}>History</button>
        </div>
    );
}

export default SelectCategory;