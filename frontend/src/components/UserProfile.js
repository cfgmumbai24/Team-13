import React, { useState } from 'react';
import axios from 'axios';

function UserProfileForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        location: '',
        skills: '',
        interests: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/api/profile', formData)
            .then(response => {
                console.log(response.data);
                alert('Profile created successfully!');
                // Reset form after successful submission (optional)
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    location: '',
                    skills: '',
                    interests: ''
                });
            })
            .catch(error => {
                console.error('Error creating profile:', error);
                alert('Failed to create profile. Please try again.');
            });
    };

    return (
        <div>
            <h2>User Profile Form</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required /><br />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required /><br />

                <label>Mobile Number:</label>
                <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} /><br />

                <label>Location:</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} /><br />

                <label>Skills:</label>
                <input type="text" name="skills" value={formData.skills} onChange={handleChange} /><br />

                <label>Interests:</label>
                <textarea name="interests" value={formData.interests} onChange={handleChange}></textarea><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UserProfileForm;



// import React, { useState } from 'react';
// import axios from 'axios';

// function UserProfileForm() {
//     const [formData, setFormData] = useState({
//         name: '',
//         mobile: '',
//         location: '',
//         skills: '',
//         interests: ''
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         axios.post('http://localhost:5000/api/profile', formData, {
//             headers: {
//                 'X-User-Email': 'user@example.com' // Replace with the actual logged-in user's email
//             }
//         })
//             .then(response => {
//                 console.log(response.data);
//                 alert('Profile created/updated successfully!');
//                 // Reset form after successful submission (optional)
//                 setFormData({
//                     name: '',
//                     mobile: '',
//                     location: '',
//                     skills: '',
//                     interests: ''
//                 });
//             })
//             .catch(error => {
//                 console.error('Error creating/updating profile:', error);
//                 alert('Failed to create/update profile. Please try again.');
//             });
//     };

//     return (
//         <div>
//             <h2>User Profile Form</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>Name:</label>
//                 <input type="text" name="name" value={formData.name} onChange={handleChange} required /><br />

//                 <label>Mobile Number:</label>
//                 <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} /><br />

//                 <label>Location:</label>
//                 <input type="text" name="location" value={formData.location} onChange={handleChange} /><br />

//                 <label>Skills:</label>
//                 <input type="text" name="skills" value={formData.skills} onChange={handleChange} /><br />

//                 <label>Interests:</label>
//                 <textarea name="interests" value={formData.interests} onChange={handleChange}></textarea><br />

//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default UserProfileForm;
