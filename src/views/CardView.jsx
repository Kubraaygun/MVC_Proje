import millify from "millify";
import { useNavigate } from "react-router-dom";

const CardView = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/coin/${data.id}`)}
      className="coin-card d-flex flex-column justify-content-between border rounded p-3"
    >
      <div>
        <h6>{data.name}</h6>
        <h3>{data.symbol}</h3>
        <p>{millify(data.priceUsd)}</p>
      </div>
      <p>
        <span>Günlük Değişim: </span>
        <span className={data.changePercent24Hr >= 0 ? "up" : "down"}>
          %{Number(data.changePercent24Hr).toFixed(2)}
        </span>
      </p>
    </div>
  );
};

export default CardView;
