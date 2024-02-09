import { useContext, useMemo, useState } from "react";

const usePagination = (data, pageSize) => {


  const paginate = (data, PAGE_SIZE) =>{
    
    const paginatedData = [];

    for(let i = 0; i < data.length; i+=PAGE_SIZE){
      paginatedData.push(data.slice(i, i+PAGE_SIZE));
    }

    return paginatedData;
  };

  const paginatedData = useMemo(() => paginate(data, pageSize), [data, pageSize]);

  return paginatedData;
};

export default usePagination;
