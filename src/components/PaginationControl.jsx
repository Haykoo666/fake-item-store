import React from 'react'
import { Pagination } from 'antd';


const PaginationControl = () => {
   return (
      <>
         <p className='text-danger'>todo pagination</p>
         <Pagination className='text-center' defaultCurrent={1} total={50} />
      </>
   )
}

export default PaginationControl