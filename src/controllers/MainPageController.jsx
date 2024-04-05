import MainPageView from "../views/MainPageView"
import model from "../models/MainPageModel"
import { useEffect, useState } from "react"

const MainPageController = () => {
  const [coins,setCoins]=useState([])
  useEffect(()=>{
  model.getCoins().then((data)=>setCoins(data))
  },[])
 
  
   return ( <MainPageView coins={coins}/>
  )
};

export default MainPageController