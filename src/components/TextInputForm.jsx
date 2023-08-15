import React, { useState } from 'react';
//  import cors from 'cors';
const TextInputForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      try {
      const response = await fetch('https://test2-l57x.onrender.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "user_input": inputValue }),
      });

          const data = await response.json();
          console.log("data",data.predicted_api)
      setResponse(data.predicted_api);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
      <div className="flex flex-col items-center space-y-4">
          
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter task, APi, description etc related to API"
          className="border mr-[15px] w-[700px] text-black rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
          </form>
          <div>
              <div className='text-black'>{ !response?"Created using custom Models. Please give us try ":response && <p className="text-green-500"><span className='text-black'>Output:</span>{response}</p>}</div>
              
          </div>
      
    </div>
  );
};

export default TextInputForm;
