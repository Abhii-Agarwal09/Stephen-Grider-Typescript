import { useState, useEffect } from 'react';

interface Users {
  name: string;
  age: number;
}

const users: Users[] = [
  { name: 'John', age: 20 },
  { name: 'Sarah', age: 20 },
  { name: 'Sonal', age: 20 },
  { name: 'Saksham', age: 20 },
  { name: 'Mike', age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [foundUsers, setFoundUsers] = useState<Users[]>([]);

  useEffect(() => {
    if (name.length === 0) {
      setFoundUsers([]);
      return;
    }
    const fu = users.filter((user) => {
      return user.name.toLowerCase().includes(name.toLowerCase());
    });
    setFoundUsers(fu);
  }, [name]);

  const btnClickHandler = () => {
    const foundUser = users.find(
      (user) => user.name.toLowerCase() === name.toLowerCase()
    );
    console.log(foundUser);
    setName('');
  };
  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={btnClickHandler}>Search</button>

      <h1>Found users</h1>
      {foundUsers.length > 0 &&
        foundUsers.map((user, index) => {
          return (
            <div key={index}>
              <h5>Name: {user.name}</h5>
              <p>Age: {user.age}</p>
            </div>
          );
        })}
    </div>
  );
};

export default UserSearch;
