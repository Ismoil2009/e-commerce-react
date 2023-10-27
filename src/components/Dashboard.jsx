import React from "react";
import Home from "./Home";
import { Link } from "react-router-dom";
import AvatarImg from "../assets/ava.png";
import DnImg from "../assets/dn.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderAll,
  faCartShopping,
  faHeart,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard({ user }) {
  return (
    <div>
      <ul className="nav">
        <Link className="logo-s" to="/">
          <img
            src="https://play-lh.googleusercontent.com/zBnLTE8VsgIkUWbXx3o64uv_NvDoyp-vDnWIpjQ82UGFMQsxPq6MtRlOo5L17FpKMb4=w240-h480-rw"
            alt=""
            width={70}
          />
          <h5>Северяночка</h5>
        </Link>
        <Link to="/input">
          <input className="nav-inp" placeholder="Найти товар..." type="text" />
        </Link>
        <Link to="/add">
          <h3 className="pls">
            <FontAwesomeIcon icon={faPlus} />
          </h3>
          <li className="puncs">Добавить</li>
        </Link>
        <Link to="/liked">
          <h3 className="pls">
            <FontAwesomeIcon icon={faHeart} />
          </h3>
          <li className="puncs">Избранное</li>
        </Link>
        <Link to="/all">
          <h3 className="pls">
            <FontAwesomeIcon icon={faBorderAll} />
          </h3>
          <li className="puncs">Все-продукты</li>
        </Link>
        <Link to="/cart">
          <h3 className="pls">
            <FontAwesomeIcon icon={faCartShopping} />
          </h3>
          <li className="puncs">Корзина</li>
        </Link>
        <Link to="#" className="f-loged">
          <img src={AvatarImg} alt="" />
          <h3 className="loged">{user.name}</h3>
          <img src={DnImg} alt="" />
        </Link>
      </ul>
      <Home />
    </div>
  );
}
