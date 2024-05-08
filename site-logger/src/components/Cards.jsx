import React, { useState } from 'react';

const Cards = () => {
  const [activities, setActivities] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  //const [selectedActivity, setSelectedActivity] = useState(null);

  const handleAddActivity = (event) => {
    if (event.key === 'Enter' && event.target.value.trim()) {
      setActivities([...activities, event.target.value]);
      event.target.value = '';  // Clear the input after adding
    }
  };

  return (
    <div className='w-full py-40 px-4 bg-gray-900'> {/* Changed background to a darker shade */}
      <div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-gray-700'> {/* Darker box for input */}
          <input
            type="text"
            placeholder="Type and hit Enter to add activity"
            onKeyPress={handleAddActivity}
            className="p-2 text-white bg-gray-800" // Text input styling for darker theme
          />
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-gray-700'> {/* Darker box for category */}
          {activities.map((activity, index) => (
            <div key={index}>
              <button
                onClick={() => setSelectedCategory(activity)}
                className="w-full text-left p-2 bg-gray-800 hover:bg-gray-900 text-white rounded">
                {activity}
              </button>
            </div>
          ))}
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-gray-700'> {/* Darker box for details */}
          {selectedCategory && (
            <div>
              <h3 className="text-lg font-semibold text-white">{selectedCategory}</h3>
              <p className="text-gray-300">Details about how to get to and what to do in {selectedCategory}.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
