import { useEffect, useState } from "react";
import "./App.css";
import { addUser, deleteUser, getUsers } from "./services/users";
import { addRedis, deleteRedis, getRedis } from "./services/redis";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const promGetUsers = async () => {
      const response = await getUsers();
      for (const user of response) {
        const { time } = await getRedis(user.id);
        user.time = time;
      }
      setUsers(response);
    };

    promGetUsers();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await addUser(e.target.name.value);
    setUsers((prevState) => prevState.concat(response));
  };

  const handleDeleteUser = async (id) => {
    const resId = await deleteUser(id);
    setUsers((prevState) =>
      prevState.filter((user) => user.id !== Number(resId.id))
    );
  };

  const handleAddRedis = async (id) => {
    const response = await addRedis(id);
    setUsers((prevState) =>
      prevState.map((user) =>
        user.id === id ? { ...user, time: response.time } : user
      )
    );
  };

  const handleDeleteRedis = async (id) => {
    await deleteRedis(id);
    setUsers((prevState) =>
      prevState.map((user) => (user.id === id ? { ...user, time: "" } : user))
    );
  };

  return (
    <>
      <h1>Add name update_4</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="#name">Name :</label>
        <input type="text" id="name" name="name" />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {users.length > 0 &&
          users.map((user) => (
            <li key={user.id}>
              {user.name}{" "}
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              <button onClick={() => handleAddRedis(user.id)}>
                Add to Redis
              </button>
              {user.time && (
                <>
                  {user.time}
                  <button
                    onClick={async () => {
                      await handleDeleteRedis(user.id);
                    }}
                  >
                    Delete Redis
                  </button>
                </>
              )}
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;
