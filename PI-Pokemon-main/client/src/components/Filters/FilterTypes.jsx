import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAlltypes,
  filterCreated,
  setCurrentPage,
} from "../../redux/actions";
import typeLogo from "./types";
import "./FilterType.css";

const FilterTypes = ({ setRefreshState }) => {
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.types);
  useEffect(() => {
    dispatch(getAlltypes());
  }, []);

  const handleFilterType = (e) => {
    e.preventDefault();
    dispatch(filterCreated(e.target.alt));
    dispatch(setCurrentPage(0));
    setRefreshState((prevState) => !prevState);
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
