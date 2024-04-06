import millify from "millify";
import { FaBitcoin } from "react-icons/fa6";
import CardView from "./CardView";
import { useNavigate } from "react-router-dom";
const MainPageView = ({ coins, setPage }) => {
  const navigate = useNavigate();
  console.log(coins[0]);
  return (
    <div className="container-xl mt-5">
      <h4 className="d-flex align-items-center gap-3">
        <FaBitcoin />
        <span>Hoşgeldiniz, Coin Listesi</span>
      </h4>
      <p>
        Coin Listesi, dünya genelindeki kripto para birimlerini ve dijital
        varlıkları takip etmek için mükemmel bir kaynaktır
      </p>

      {/*KARTLAR */}

      <div  className="d-flex gap-4 justify-content-around my-6">
        {coins.slice(0, 3).map((data) => (
          <CardView key={data.id} data={data} />
        ))}
      </div>
      {/*Tablo */}
      <table className="table table-dark table-hover table-responsive mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>fiyat</th>
            <th>Market Hacmi</th>
            <th>İşlem Hacmi</th>
            <th>% Değişim Hacmi (24s)</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id} onClick={()=>navigate(`/coin/${coin.id}`)}>
              <td>{coin.rank}</td>
              <td>
                <span className="text-warning fw-bold me-2">{coin.symbol}</span>
                <span>{coin.name}</span>
              </td>

              <td>{millify(coin.priceUsd)}</td>
              <td>{millify(coin.marketCapUsd)}</td>
              <td>{millify(coin.volumeUsd24Hr)}</td>
              <td className={coin.changePercent24Hr >= 0 ? "up" : "down"}>
                %{Number(coin.changePercent24Hr).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/**Daha Fazla Butonu */}
      <div className="d-flex my-5 justify-content-center">
        <button onClick={() => setPage((page) => page + 1)} className="button2">
          {" "}
          Daha Fazla{" "}
        </button>
      </div>
    </div>
  );
};

export default MainPageView;
