import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const text  = await (await fetch(`/api/foodSuggestions`)).text();
      console.log(text);
      setData(text);
    })();
  });

  return <div>
          <div>Something before</div>
          {data}
      </div>;
}

export default App;