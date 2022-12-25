import React, { useState } from "react";

const Chat = () => {
  const users = [
    { id: 1, name: "ahmed" },
    { id: 2, name: "reef" },
    { id: 3, name: "rahf" },
  ];

  const [chats, setChats] = useState([
    { id: 1, chat: "hi", to: 1, from: 2 },
    { id: 2, chat: "hi2", to: 1, from: 2 },
    { id: 3, chat: "rahf chat hi", to: 3, from: 1 },
  ]);
  const [msg, setMsg] = useState("");

  const idLogin = 1;
  const [person, setPerson] = useState();

  const handleAdd = (e) => {
    e.preventDefault();
    const allChat = [...chats, { id: 3, chat: msg, to: person, from: idLogin }];
    setChats(allChat);
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input type="text" onChange={(e) => setMsg(e.target.value)} />
        <button>send</button>
      </form>

      <div className="chats">
        all Chat :
        {chats
          .filter(
            (data) =>
              (data.to === idLogin && data.from === person) ||
              (data.to === person && data.from === idLogin)
          )
          .map((data, i) => (
            <p key={i}>{data.chat}</p>
          ))}
      </div>
      <div className="users">
        {users
          .filter((data) => data.id !== idLogin)
          .map((data) => (
            <button onClick={(e) => setPerson(data.id)}>{data.name}</button>
          ))}
      </div>
    </div>
  );
};

export default Chat;
