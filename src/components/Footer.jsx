import React from "react";
import FootImg from "../assets/foot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faTelegram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="f">
      <div className="container">
        <div className="footer">
          <img src={FootImg} alt="" />
          <h4>О компании</h4>
          <h4>Контакты</h4>
          <h4>Вакансии</h4>
          <h4>Статьи</h4>
          <h4>Политика обработки</h4>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faTelegram} />
          <FontAwesomeIcon icon={faFacebook} />
        </div>
      </div>
    </div>
  );
}
