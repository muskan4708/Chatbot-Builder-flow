import React, { useState } from 'react';

const Props = () => {
  const [color, setColor] = useState("olive");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="main w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed bottom-12 inset-x-0 px-2 flex justify-center">
        <div className="bg-white px-3 py-2 shadow-lg rounded" style={{ maxWidth: '300px' }}>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full mr-2 mb-2" onClick={() => changeColor('red')}>Red</button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mr-2 mb-2" onClick={() => changeColor('blue')}>Blue</button>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full mb-2" onClick={() => changeColor('pink')}>Pink</button>
        </div>
      </div>
    </div>
  );
};

export default Props;
