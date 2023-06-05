import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [guests, setGuests] = useState<string[]>([]); // never[] = ts has no idea what value will be there

  const btnClickHandler = () => {
    setGuests([...guests, name]);
    setName('');
  };
  return (
    <div>
      <h3>Party guest list</h3>
      <ul>
        {guests.map((guest, index) => {
          return <li key={index}>{guest}</li>;
        })}
      </ul>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type='text'
      />
      <button onClick={btnClickHandler}>Add guest</button>
    </div>
  );
};

export default GuestList;
