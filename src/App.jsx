import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddTodo from "./components/AddProduct";
import Todo from "./components/AllProducts";
import Navbar from "./components/Navbar";
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
  const {
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
  } = useGlobalContext();

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
