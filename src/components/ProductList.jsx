import ProductInfo from "./ProductInfo";
import "../App.css";
import { useEffect, useState } from "react";
import PageSelector from "./PageSelector";
import usePagination from "../hooks/usePagination";

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
      <div className="card-container">
        {renderData
          ? renderData.map((product) => (
              <>
                <ProductInfo item={product} />
              </>
            ))
          : null}
      </div>

      <PageSelector
        numPages={paginatedData.length}
        currentPage={currentPage}
        selectPage={(e) => handlePageChange(e)}
      />
    </>
  );
};
export default ProductList;
