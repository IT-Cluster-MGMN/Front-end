import { useEffect, useMemo, useState } from "react";

const usePagination = (data, pageSize) => {
  const paginate = (data, PAGE_SIZE) => {
    const paginatedData = [];

    for (let i = 0; i < data.length; i += PAGE_SIZE) {
      paginatedData.push(data.slice(i, i + PAGE_SIZE));
    }

    return paginatedData;
  };

  const [paginatedData, setPaginatedData] = useState();

  useEffect(() => {
    setPaginatedData(() => paginate(data, pageSize), [data, pageSize]);
  }, [data]);

  return paginatedData;
};

export default usePagination;
