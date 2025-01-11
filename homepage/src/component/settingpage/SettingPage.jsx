// // src/components/SettingsPage.js
// import React, { useState } from "react";
// import './SettingsPage.css';

// const SettingsPage = () => {
//   // State to manage user preferences
//   const [notificationsEnabled, setNotificationsEnabled] = useState(true);
//   const [selectedTheme, setSelectedTheme] = useState("light");
//   const [reminderTime, setReminderTime] = useState("08:00");

//   // Handle saving the settings
//   const handleSave = (e) => {
//     e.preventDefault();
//     // Save the settings (e.g., to localStorage or an API)
//     console.log({
//       notificationsEnabled,
//       selectedTheme,
//       reminderTime,
//     });
//     alert("Settings Saved Successfully!");
//   };

//   return (
//     <div className="settings-container">
//       <h1>Settings</h1>
//       <form onSubmit={handleSave}>
//         {/* Notifications Section */}
//         <div className="setting-item">
//           <label htmlFor="notifications">
//             Enable Notifications
//           </label>
//           <input
//             type="checkbox"
//             id="notifications"
//             checked={notificationsEnabled}
//             onChange={() => setNotificationsEnabled(!notificationsEnabled)}
//           />
//         </div>

//         {/* Theme Selection */}
//         <div className="setting-item">
//           <label htmlFor="theme">Select Theme</label>
//           <select
//             id="theme"
//             value={selectedTheme}
//             onChange={(e) => setSelectedTheme(e.target.value)}
//           >
//             <option value="light">Light</option>
//             <option value="dark">Dark</option>
//           </select>
//         </div>

//         {/* Reminder Time */}
//         <div className="setting-item">
//           <label htmlFor="reminderTime">Set Reminder Time</label>
//           <input
//             type="time"
//             id="reminderTime"
//             value={reminderTime}
//             onChange={(e) => setReminderTime(e.target.value)}
//           />
//         </div>

//         {/* Save Button */}
//         <button type="submit">Save Settings</button>
//       </form>
//     </div>
//   );
// };

// export default SettingsPage;






// src/components/SettingsPage.js
import React, { useState } from "react";
import './SettingPage.css';

const SettingsPage = () => {
  // State to manage user preferences
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [selectedTheme, setSelectedTheme] = useState("light");
  const [reminderTime, setReminderTime] = useState("08:00");

  // Handle saving the settings
  const handleSave = (e) => {
    e.preventDefault();
    // Save the settings (e.g., to localStorage or an API)
    console.log({
      notificationsEnabled,
      selectedTheme,
      reminderTime,
    });
    alert("Settings Saved Successfully!");
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <form onSubmit={handleSave}>
        {/* Notifications Section */}
        <div className="setting-item">
          <label htmlFor="notifications">
            Enable Notifications
          </label>
          <input
            type="checkbox"
            id="notifications"
            checked={notificationsEnabled}
            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
          />
        </div>

        {/* Theme Selection */}
        <div className="setting-item">
          <label htmlFor="theme">Select Theme</label>
          <select
            id="theme"
            value={selectedTheme}
            onChange={(e) => setSelectedTheme(e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        {/* Reminder Time */}
        <div className="setting-item">
          <label htmlFor="reminderTime">Set Reminder Time</label>
          <input
            type="time"
            id="reminderTime"
            value={reminderTime}
            onChange={(e) => setReminderTime(e.target.value)}
          />
        </div>

        {/* Save Button */}
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default SettingsPage;

