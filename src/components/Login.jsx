import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Login({ setUser }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setUser({ name: name, email: email });
    navigate("/dash");
  };

  return (
    <div className="log-pg">
      <form className="form" onClick={handleSubmit}>
        <h1 className="sign">Вход</h1>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Имя
          </label>
          <div>
            <input
              type="text"
              className="form-input"
              id="name"
              placeholder="Введите свое имя..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Почта
          </label>
          <div>
            <input
              type="email"
              className="form-input"
              id="email"
              placeholder="Введите свою почту..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-block log-sub">
          Войти
        </button>
      </form>
    </div>
  );
}
