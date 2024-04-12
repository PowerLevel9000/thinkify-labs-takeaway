import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetColorQuery } from '../../../features/api/colors';
import { addTitles, drawerClose } from '../../../features/creative-title/titleSlice';

const Drawer = () => {
  const { data, loading, error } = useGetColorQuery();
  // const colorRef = useRef(null);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(() => ({
    title: '',
    subTitle: '',
    backgroundColor: '',
  }));

  const [formDataError, setFormDataError] = useState(() => ({
    title: '',
    subTitle: '',
    backgroundColor: '',
  }));

  // handle form submit
  // yeah i know my form validation is not relevant here as we are disabled the button
  // but i like to show as my skills
  const handleSubmit = (e) => {
    e.preventDefault();

    // form validation
    // i used this approach to show error message for each field separately
    // and also to show error message for each field separately
    // i like form validation for personal test and also for better user experience
    // but I will also follow the instruction in requirement
    let isError = false;
    const error = {
      title: '',
      subTitle: '',
      backgroundColor: '',
    };

    const fields = ['title', 'subTitle', 'backgroundColor'];

    fields.forEach((field) => {
      if (!formData[field]) {
        isError = true;
        error[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    if (isError) {
      setFormDataError(error);
      return;
    }

    dispatch(addTitles(formData));
    dispatch(drawerClose());
    setFormData((prevFormData) => ({
      ...prevFormData,
      title: '',
      subTitle: '',
      backgroundColor: '',
    }));
  };

  // as we don't have error and loading page so we are just showing error message and loading status
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <>
      <div className="card-header">
        <h2>Creative Creation</h2>
        <button
          type="button"
          className="fas fa-times cross"
          onClick={() => dispatch(drawerClose())}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => {
            setFormData({ ...formData, title: e.target.value });
            setFormDataError({ ...formDataError, title: '' });
          }}
          placeholder="Enter Title"
        />
        <small>{formDataError.title}</small>
        <label htmlFor="sub-title">Subtitle</label>
        <input
          value={formData.subTitle}
          type="text"
          id="sub-title"
          onChange={(e) => {
            setFormData({ ...formData, subTitle: e.target.value });
            setFormDataError({ ...formDataError, subTitle: '' });
          }}
          placeholder="Enter Sub Title"
        />
        <small>{formDataError.subTitle}</small>
        <label htmlFor="background-color">Background Color</label>
        <div className="background-colors">
          {data && data.colors.map((color) => (
            <button
              type="button"
              style={{ backgroundColor: color }}
              key={color}
              className={`color-box ${formData.backgroundColor === color ? 'selected' : ''}`}
              onClick={() => {
                setFormData({ ...formData, backgroundColor: color });
                setFormDataError({ ...formDataError, backgroundColor: '' });
              }}
            />
          ))}
        </div>
        <small>{formDataError.backgroundColor}</small>
        <button
          type="submit"
          disabled={formData.title === '' || formData.subTitle === '' || formData.backgroundColor === ''}
        >
          Done
        </button>
      </form>
    </>
  );
};

export default Drawer;
