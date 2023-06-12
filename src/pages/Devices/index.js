import React, { useState } from 'react';

const ListPage = () => {
  const [title, setTitle] = useState('');
  const [items, setItems] = useState([]);

  const handleButtonClick = (title) => {
    setTitle(title);
    // Here you can fetch the list of items from an API or any other data source based on the selected title
    // and update the 'items' state accordingly.
    // For simplicity, we'll just use some hardcoded data here:
    const itemList = ['Item 1', 'Item 2', 'Item 3'];
    setItems(itemList);
  };

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => handleButtonClick('Title 1')}>Title 1</button>
      <button onClick={() => handleButtonClick('Title 2')}>Title 2</button>
      <button onClick={() => handleButtonClick('Title 3')}>Title 3</button>
    </div>
  );
};

export default ListPage;
