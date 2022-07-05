import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlltypes, filterCreated } from "../../redux/actions";
import typeLogo from "./types";
import "./FilterType.css";

const FilterTypes = ({ setCurrentPage }) => {
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.types);
  useEffect(() => {
    dispatch(getAlltypes());
  }, [dispatch]);

  const handleFilterType = (e) => {
    e.preventDefault();
    dispatch(filterCreated(e.target.alt));
    setCurrentPage(0);
  };

  return (
    <div className="filterType">
      {allTypes?.map((t, k) => (
        <button
          className="btn"
          key={k}
          onClick={(e) => handleFilterType(e)}
          value={t.name}
        >
          <div className="img-filterType">
            <img src={typeLogo[t.name]} value={t.name} alt={`${t.name}`} />
          </div>
        </button>
      ))}
    </div>
  );
};

export default FilterTypes;
