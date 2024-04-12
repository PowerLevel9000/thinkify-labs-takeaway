import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetColorQuery } from '../../../features/api/colors';
import { filteredTitles } from '../../../features/creative-title/titleSlice';
import filterData from '../../../lib/filterData';

const FilterBy = () => {
  const { data, loading, error } = useGetColorQuery();
  const { titles } = useSelector((state) => state.title);
  const [filters, setFilters] = useState(() => ({
    color: '',
    search: '',
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    // we can use useCallback here to avoid creating a new function on every render
    // but as we are not rerendering (a lot) this component so it's fine to use it here
    const applyFilters = () => {
      const filteredData = filterData(filters, titles);
      dispatch(filteredTitles(filteredData));
    };
    applyFilters();
  }, [filters, titles, dispatch]);

  // as we don't have error and loading page so we are just showing error message and loading status
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <>
      <h2>Filter By</h2>
      <div className="filter-container">
        <div className="color-container">
          <p>Color</p>
          <div className="color-list">
            {data && data.colors.map((color) => (
              <button
                type="button"
                key={color}
                className={`color-item ${filters.color === color ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => setFilters({
                  ...filters,
                  color,
                })}
              />
            ))}
          </div>
        </div>
        <div className="search">
          <p>Search by Title/SubTitle</p>
          <input
            type="text"
            placeholder="Search by Title/SubTitle"
            value={filters.search}
            onChange={(e) => setFilters({
              ...filters,
              search: e.target.value,
            })}
          />
        </div>
      </div>

      {(filters.color || filters.search) && (
        <button
          type="button"
          className="btn-page"
          onClick={() => {
            dispatch(filteredTitles([]));
            setFilters({
              color: '',
              search: '',
            });
          }}
        >
          Reset Filter
        </button>
      )}
    </>
  );
};

export default FilterBy;
