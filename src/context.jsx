import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import getStore from "./utils/get";
import data from "./data";
import reducer from "./reducer";

// const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: data,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
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

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

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
        ...state,
        clearCart,
        remove,
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
