import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/newopening.css';

const BusinessFormComponent = () => {
  const [businessDetails, setBusinessDetails] = useState({
    name: '',
    description: '',
    city: '',
    salary: '',
    images: [],
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBusinessDetails({
      ...businessDetails,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imagesArray = files.map((file) => URL.createObjectURL(file));
    setBusinessDetails({
      ...businessDetails,
      images: imagesArray,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Business Details:', businessDetails);
    // Redirect or submit form logic here
    navigate('/'); // Example: Redirect to home page after form submission
  };

  return (
    <div className="container">
      <h1>Add New Business</h1>
      <form className="businessForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name">Job Role:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={businessDetails.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={businessDetails.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={businessDetails.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="salary">Salary:</label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={businessDetails.salary}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="images">Images:</label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={handleImageChange}
            multiple
            accept="image/*"
          />
        </div>
        <div className="previewImages">
          {businessDetails.images &&
            businessDetails.images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index}`} />
            ))}
        </div>
        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BusinessFormComponent;
