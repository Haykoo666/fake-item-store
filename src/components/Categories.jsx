import { Select } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { categoriesData, categoriesDataStatus, getData } from '../features/Categories/categoriesSlice';
import { acceptData, changeItemsByCategory } from '../features/items/itemsSlice';
import { fetchDataByCategory } from '../features/items/items_API';

const Categories = () => {
   const dispatch = useDispatch();
   const categories = useSelector(categoriesData);
   
const x = async (val) => {
   let res = await(fetchDataByCategory(val));
   dispatch(changeItemsByCategory(res.data));
   return res.data
}
   const onChange = (value) => {
      console.log(`selected ${value}`);
      x(value)
      // dispatch(changeItemsByCategory())
   };
   const onSearch = (value) => {
      console.log('search:', value);
   };


   useEffect(() => {
      dispatch(getData())
   },[])
   


   return (
      <>
         <Select
            showSearch
            // defaultValue="all"
            style={{
               width: 180,
            }}
            className="float-end m-4"
            placeholder="Select category"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
               (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={
               [
                  {
                     value: "all",
                     label: "all"
                  },
               
               ...categories.map((category, i) => {
                  return (
                     {
                        value: category,
                        label: category
                     }
                  )
               })
            ]
            }
         /> 
      </>
   )
}

export default Categories



