import { useParams } from "react-router-dom";
import BlinImg from "../assets/blin.png";

export default function SinglePage() {
  const { id } = useParams();

  return (
    <div className="single">
      <div className="imgs-in">
        <h2>Image: </h2>
        <img src={BlinImg} alt="" />
      </div>
      <h2 className="singid">ID: {id}</h2>
    </div>
  );
}
