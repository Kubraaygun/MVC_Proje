import { useParams } from "react-router-dom";
import DetailView from "../views/DetailView";
import { useEffect, useState } from "react";
import Model from "../models/DetailModel";

const DetailController = () => {
  const [coin, setCoin] = useState(null);
  //1- urlden id yi al
  const { id } = useParams();

  //2-coin in detay verilerini ve fiyat gecmisini al

  useEffect(() => {
    Model.getCoin(id).then((res) => setCoin(res));
  }, []);

  const model = new Model(coin);
  console.log(model);

  return <DetailView model={model} />;
};

export default DetailController;
