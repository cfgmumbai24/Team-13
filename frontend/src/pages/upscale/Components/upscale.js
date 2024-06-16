import React from 'react';
import '../Style/upscale.css'; // Importing the CSS file directly

const courses = [
  {
    title: 'Business Management',
    description: 'Learn the fundamentals of business management including planning, organization, and leadership.',
    duration: '2 hours 30 minutes'
  },
  {
    title: 'Marketing Strategy',
    description: 'Develop effective marketing strategies to reach your target audience and grow your business.',
    duration: '1 hour 45 minutes'
  },
  {
    title: 'Financial Accounting',
    description: 'Understand the principles of financial accounting to manage your business finances better.',
    duration: '3 hours 15 minutes'
  },
  {
    title: 'Entrepreneurship',
    description: 'Gain the skills and knowledge needed to start and run your own business successfully.',
    duration: '2 hours 10 minutes'
  },
  {
    title: 'Human Resource Management',
    description: 'Learn how to manage your team effectively and create a productive work environment.',
    duration: '1 hour 30 minutes'
  }
];

function UpscaleComponent() {
  return (
    <div className="container">
      <h1>Courses</h1>
      <div className="courses">
        {courses.map((course, index) => (
          <div key={index} className="course">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpscaleComponent;