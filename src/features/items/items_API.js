import axios from "axios";

export const fetchData = async () => {

   const res = await axios({
      method: "get",
      url: import.meta.env.VITE_APP_API
   });
   return res
}

export const fetchDataByCategory = async (currentCategory) => {

   const res = await axios({
      method: "get",
      url: `${import.meta.env.VITE_APP_API}/category/${currentCategory}`
   });
   return res
}