import ProductInfo from "./ProductInfo";
import "../App.css";
import { useEffect, useState } from "react";
import PageSelector from "./PageSelector";
import usePagination from "../hooks/usePagination";
import ProductEmpty from "./ProductEmpty";

const ProductList = ({ data }) => {
  const paginatedData = usePagination(data, 20);

  const [currentPage, setCurrentPage] = useState(1);

  const [renderData, setRenderData] = useState(paginatedData[0]);

  const handlePageChange = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    setRenderData(paginatedData[currentPage - 1]);
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <>
      <div className="flex flex-col pb-8">
        {renderData ? (
          <div className="grid lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  justify-around p-8 gap-4">
            {renderData.map((product) => (
              <>
                <ProductInfo item={product} />
              </>
            ))}
          </div>
        ) : (
          <ProductEmpty />
        )}

        <PageSelector
          numPages={paginatedData.length}
          currentPage={currentPage}
          selectPage={(e) => handlePageChange(e)}
        />
      </div>
    </>
  );
};
export default ProductList;
