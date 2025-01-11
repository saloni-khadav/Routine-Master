

// // src/components/Profile.jsx
// import React, { useState } from 'react';
// import './Profile.css';  // Importing styles for the profile component

// const Profile = () => {
//   // Simulating user details (In a real app, this would come from a database)
//   const [userData, setUserData] = useState({
//     username: 'John Doe',
//     email: 'john.doe@example.com',
//     age: 30,
//     bio: 'Software developer, passionate about technology.',
//     profilePicture: 'https://via.placeholder.com/150', // Placeholder image
//   });

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setUserData((prevState) => ({
//           ...prevState,
//           profilePicture: reader.result,
//         }));
//       };
//       reader.readAsDataURL(file);  // Read image as data URL
//     }
//   };

//   return (
//     <div className="profile-container">
//       {/* Profile Picture Section */}
//       <div className="profile-picture-container">
//         <img
//           src={userData.profilePicture}
//           alt="Profile"
//           className="profile-picture"
//         />
//         <input
//           type="file"
//           onChange={handleImageChange}
//           accept="image/*"
//           className="file-input"
//         />
//       </div>

//       {/* Username Section */}
//       <div className="username">
//         <h2>{userData.username}</h2>
//       </div>

//       {/* User Details Section */}
//       <div className="user-details">
//         <p><strong>Email:</strong> {userData.email}</p>
//         <p><strong>Age:</strong> {userData.age}</p>
//         <p><strong>Bio:</strong> {userData.bio}</p>
//       </div>
//     </div>
//   );
// };

// export default Profile;









import React, { useState } from 'react';
import './Profile.css';  // Importing the CSS file for styling

const Profile = () => {
  // Simulating user details (In a real app, this would come from a database)
  const [userData, setUserData] = useState({
    username: 'Lisa Dee',
    email: 'lisa.dee@example.com',
    age: 30,
    bio: 'Software developer, passionate about technology.',
    profilePicture: 'https://via.placeholder.com/150', // Placeholder image
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData((prevState) => ({
          ...prevState,
          profilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);  // Read image as data URL
    }
  };

  return (
    <div className="profile-container">
      {/* Profile Picture Section */}
      <div className="profile-picture-container">
        <img
          src={userData.profilePicture}
          alt="Profile"
          className="profile-picture"
        />
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          className="file-input"
        />
      </div>

      {/* Username Section */}
      <div className="username">
        <h2>{userData.username}</h2>
      </div>

      {/* User Details Section */}
       <div className="user-details">
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Age:</strong> {userData.age}</p>
        <p><strong>Bio:</strong> {userData.bio}</p>
      </div>
    </div>
  );
};

export default Profile;


