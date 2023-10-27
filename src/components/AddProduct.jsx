import { useState } from "react";
import { uid } from "uid";

export default function AddTodo({ todo, setTodo }) {
  const id = uid();
  const [task, settask] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      alert("Bo'sh !");
    } else if (task && editId) {
    } else {
      const newItem = { id: id, title: task, img: "" };
      setTodo([...todo, newItem]);
      settask("");
    }
  };

  return (
    <div className="login-pg">
      <h1 className="all">Добавить продукт</h1>
      <form action="" className="ad" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          className="add-inp"
          placeholder="Введите..."
          value={task}
          onChange={(e) => settask(e.target.value)}
        />
        <button className="btn-sub">Добавить</button>
      </form>
      <div>
        <h2 className="dest">
          Перейдите во <a className="destin" href="/all"> все продукты</a> чтобы увидеть все товары !
        </h2>
      </div>
    </div>
  );
}

