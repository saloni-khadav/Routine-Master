


// import React, { useState } from 'react';
// import './Calender.css';
// import Calendar from 'react-calendar';
// import { FaRegUser } from 'react-icons/fa';

// function Calender() {
//   const [date, setDate] = useState(new Date());
//   const [notes, setNotes] = useState({});
//   const [selectedDate, setSelectedDate] = useState(null); 
//   const [newNote, setNewNote] = useState("");



//   // const handleDateClick = (date) => {
//   //   setSelectedDate(date);
//   //   setDate(date);
//   //   setNewNote(notes[date.toISOString().split('T')[0]] || "");  
//   // };

//   // const handleSaveNote = () => {
//   //   const dateString = selectedDate.toISOString().split('T')[0];
//   //   setNotes({
//   //     ...notes,
//   //     [dateString]: newNote,  
//   //   });
//   //   setSelectedDate(null);  
//   //   setNewNote("");
//   // };

//   // // Cancel note input
//   // const handleCancelNote = () => {
//   //   setSelectedDate(null);  
//   //   setNewNote("");  
//   // };

//   // const tileClassName = ({ date }) => {
//   //   const dateString = date.toISOString().split('T')[0];  
//   //   const today = new Date().toISOString().split('T')[0];  
  
//   //   if (notes[dateString]) {
//   //     return 'highlighted-date';  
//   //   }
  
//   //   if (dateString === today) {
//   //     return 'highlighted-today';
//   //   }
  
//   //   return '';
//   // };
  



//   const handleDateClick = (date) => {
//     // Normalize the date to just YYYY-MM-DD format
//     const normalizedDate = date.toLocaleDateString('en-CA'); // This will give the date in YYYY-MM-DD format
//     setSelectedDate(date);
//     setDate(date);
//     setNewNote(notes[normalizedDate] || "");  // Get the note for the selected date
//   };
  
//   const handleSaveNote = () => {
//     const normalizedDate = selectedDate.toLocaleDateString('en-CA');  // Normalize the selected date
//     setNotes({
//       ...notes,
//       [normalizedDate]: newNote,  // Save the note with normalized date
//     });
//     setSelectedDate(null);  
//     setNewNote("");
//   };
  
//   const tileClassName = ({ date }) => {
//     const dateString = date.toLocaleDateString('en-CA');  // Normalize the date string for comparison
//     const today = new Date().toLocaleDateString('en-CA');  // Normalize today's date
  
//     if (notes[dateString]) {
//       return 'highlighted-date';  // Highlight if a note exists
//     }
  
//     if (dateString === today) {
//       return 'highlighted-today';  // Highlight today's date
//     }
  
//     return '';
//   };
  
  

 



//   return (
//     <div className="app-container">
//       {/* Navbar */}
//       <div className="navbar">
//         <h1 className="project-title">Calendar</h1>
//         <div className="profile-icon">
//           <FaRegUser size={30} />
//         </div>
//       </div>

//       {/* Calendar */}
//       <div className="calendar-container">
//         <Calendar
//           onClickDay={handleDateClick}  // Handle date click to show notes
//           value={date}  // Set the value of the calendar to the selected date
//           tileClassName={tileClassName}  // Add the custom tileClassName prop
//         />
//       </div>

//       {/* Display Notes for the Selected Date */}
//       {selectedDate && (
//         <div className="note-input-container">
//           <h3>Note for {selectedDate.toDateString()}</h3>
//           <textarea
//             value={newNote}
//             onChange={(e) => setNewNote(e.target.value)}  // Update the note as user types
//             placeholder="Add your note..."
//           />
//           <div className="note-actions">
//             <button onClick={handleSaveNote}>Save Note</button>
//             <button onClick={handleCancelNote}>Cancel</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Calender;





















// import React, { useState } from 'react';
// import './Calender.css';
// import Calendar from 'react-calendar';
// import { FaRegUser } from 'react-icons/fa';

// function Calender() {
//   const [date, setDate] = useState(new Date());
//   const [notes, setNotes] = useState({});
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [newNote, setNewNote] = useState("");

//   // Handle when a date is clicked on the calendar
//   const handleDateClick = (date) => {
//     const normalizedDate = date.toLocaleDateString('en-CA'); // Normalize the date to YYYY-MM-DD format
//     setSelectedDate(date);
//     setDate(date);
//     setNewNote(notes[normalizedDate] || "");  // Get existing note if it exists for that date
//   };

//   // Save the note for the selected date
//   const handleSaveNote = () => {
//     const normalizedDate = selectedDate.toLocaleDateString('en-CA');
//     setNotes({
//       ...notes,
//       [normalizedDate]: newNote,  // Save the note with the normalized date
//     });
//     setSelectedDate(null);  // Deselect date after saving
//     setNewNote("");  // Clear the note input
//   };

//   // Cancel the note input and reset everything
//   const handleCancelNote = () => {
//     setSelectedDate(null);  // Deselect the date
//     setNewNote("");  // Clear the note input
//   };

//   // Add custom styles for dates that have notes or are today's date
//   const tileClassName = ({ date }) => {
//     const dateString = date.toLocaleDateString('en-CA');
//     const today = new Date().toLocaleDateString('en-CA');

//     if (notes[dateString]) {
//       return 'highlighted-date';  // Highlight if a note exists for the date
//     }

//     if (dateString === today) {
//       return 'highlighted-today';  // Highlight today's date
//     }

//     return '';
//   };

//   return (
//     <div className="app-container">
//       {/* Navbar */}
//        {/* <div className="navbar">
//         <h1 className="project-title">Calendar</h1>
//         <div className="profile-icon">
//           <FaRegUser size={30} />
//         </div>
//       </div> */}

//       {/* Calendar */}
//       <div className="calendar-container">
//         <Calendar
//           onClickDay={handleDateClick}  // Handle date click to show notes
//           value={date}  // Set the value of the calendar to the selected date
//           tileClassName={tileClassName}  // Add the custom tileClassName prop
//         />
//       </div>

//       {/* Display Notes for the Selected Date */}
//       {selectedDate && (
//         <div className="note-input-container">
//           <h3>Note for {selectedDate.toDateString()}</h3>
//           <textarea
//             value={newNote}
//             onChange={(e) => setNewNote(e.target.value)}  // Update the note as user types
//             placeholder="Add your note..."
//           />
//           <div className="note-actions">
//             <button onClick={handleSaveNote}>Save Note</button>
//             <button onClick={handleCancelNote}>Cancel</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Calender;


















import React, { useState } from 'react';
import './Calender.css';
import Calendar from 'react-calendar';
import { FaRegUser } from 'react-icons/fa';

function Calender() {
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [newNote, setNewNote] = useState("");
  const [isNoteOpen, setIsNoteOpen] = useState(false);  // Track whether the note input is open

  // Handle when a date is clicked on the calendar
  const handleDateClick = (date) => {
    const normalizedDate = date.toLocaleDateString('en-CA');
    setSelectedDate(date);
    setDate(date);
    setNewNote(notes[normalizedDate] || "");
    setIsNoteOpen(true);  // Open the note input
  };

  // Save the note for the selected date
  const handleSaveNote = () => {
    const normalizedDate = selectedDate.toLocaleDateString('en-CA');
    setNotes({
      ...notes,
      [normalizedDate]: newNote,
    });
    setIsNoteOpen(false);  // Close the note input after saving
    setSelectedDate(null);
    setNewNote("");
  };

  // Cancel the note input and reset everything
  const handleCancelNote = () => {
    setIsNoteOpen(false);  // Close the note input
    setSelectedDate(null);
    setNewNote("");
  };

  // Add custom styles for dates that have notes or are today's date
  const tileClassName = ({ date }) => {
    const dateString = date.toLocaleDateString('en-CA');
    const today = new Date().toLocaleDateString('en-CA');

    if (notes[dateString]) {
      return 'highlighted-date';
    }

    if (dateString === today) {
      return 'highlighted-today';
    }

    return '';
  };

  return (
    <div className="app-container">
      {/* Note Input */}
      {isNoteOpen && (
        <div className="note-input-container">
          <h3>Note for {selectedDate.toDateString()}</h3>
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Add your note..."
          />
          <div className="note-actions">
            <button onClick={handleSaveNote}>Save Note</button>
            <button onClick={handleCancelNote}>Cancel</button>
          </div>
        </div>
      )}

      {/* Calendar */}
      <div className={`calendar-container ${isNoteOpen ? 'blurred' : ''}`}>
        <Calendar
          onClickDay={handleDateClick}
          value={date}
          tileClassName={tileClassName}
        />
      </div>
    </div>
  );
}

export default Calender;
