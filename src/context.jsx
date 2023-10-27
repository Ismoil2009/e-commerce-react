import { createContext, useContext, useState, useEffect } from "react";
import getStore from "./utils/get";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [todo, setTodo] = useState(getStore("todos"));
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
    <AppContext.Provider
      value={{
        user,
        setUser,
        todo,
        setTodo,
        basket,
        setBasket,
        removeItem,
        editItem,
        liked,
        cart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
