import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddProduct";
import Todo from "./components/AllProducts";
import getStore from "./utils/get";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Liked from "./components/Liked";
import Login from "./components/Login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Logo from "./components/Logo";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import SinglePage from "./components/SinglePage";
import { useGlobalContext } from "./context";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { user, setUser } = useGlobalContext();

  const [todo, setTodo] = useState(getStore("todos"));
  const [price, setPrice] = useState(getStore("price"));
  const [basket, setBasket] = useState(getStore("basket"));

  const removeItem = (id) => {
    const newitem = todo.filter((item) => item.id !== id);
    setTodo(newitem);
  };

  const editItem = (id) => {
    const newItem = todo.find((item) => item.id === id);
    setEditId(true);
  };

  const liked = (id) => {
    const newItem = todo.find((item) => item.id === id);
    setBasket([...basket, newItem]);
  };

  const cart = (id) => {
    const newItem = todo.find((item) => item.id === id);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo)),
      localStorage.setItem("basket", JSON.stringify(basket));
  }, [todo, basket]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/all"
          element={
            <Todo
              todo={todo}
              removeItem={removeItem}
              editItem={editItem}
              liked={liked}
              cart={cart}
            />
          }
        />
        <Route
          path="/add"
          element={<AddTodo todo={todo} setTodo={setTodo} />}
        />
        <Route path="/liked" element={<Liked basket={basket} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/cart" element={<Cart basket={basket} />} />
        <Route path="/single/:id" element={<SinglePage />} />
        <Route
          path="/dash"
          element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
