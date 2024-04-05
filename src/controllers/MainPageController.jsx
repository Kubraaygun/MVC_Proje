import MainPageView from "../views/MainPageView"
import model from "../models/MainPageModel"
import { useEffect, useState } from "react"

const MainPageController = () => {
  const [coins,setCoins]=useState([])
  const [page,setPage]=useState(1)
  useEffect(()=>{
  model.getCoins(page).then((data)=>setCoins(data))
  },[page])
 
   return ( <MainPageView coins={coins} setPage={setPage}/>
  )
};

export default MainPageController