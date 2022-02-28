import './App.css';
import { useSelector } from 'react-redux';

function App() {

  const userList = useSelector((state) => state.users.value)

  return (
    <div className="App">
      <div>
        <input type="text" placeholder="Name..." />
        <input type="text" placeholder="Username..." />
        <button>Add User</button>
      </div>
      <div>
        {userList.map((user) => (
          <p>{user.name}</p>
        ))}
      </div>
      
    </div>
  );
}

export default App;
