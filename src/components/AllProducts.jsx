import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faHeart,
  faCartShopping,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import BlinImg from "../assets/blin.png";
import { useNavigate } from "react-router-dom";

export default function Todo({ id, todo, removeItem, liked }) {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="all">Все продукты</h2>
      <h2 className="add-more-btn">
        <a href="/add" className="add-more">
          Добавить
        </a>
      </h2>
      <div className="fdf">
        {todo.map((item) => {
          const { id, title } = item;
          return (
            <div key={id}>
              <div className="full-card">
                <img src={BlinImg} alt="" />
                <h2 className="ttl">{title}</h2>
                <div className="btns">
                  <button className="btn-1">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </button>
                  <button className="btn-2" onClick={() => liked(id)}>
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                  <button
                    className="btn-4"
                    onClick={() => navigate(`/single/${id}`)}
                  >
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </button>
                  <button className="btn-3" onClick={() => removeItem(id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
