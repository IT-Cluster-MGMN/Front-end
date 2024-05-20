import ProductInfo from "./ProductInfo";
import "../App.css";
import { useEffect, useState } from "react";
import PageSelector from "./PageSelector";
import usePagination from "../hooks/usePagination";
import ProductEmpty from "./ProductEmpty";
import MyProductInfo from "../pages/MyProducts/components/MyProductInfo";

const ProductList = ({
  darkTheme = false,
  data,
  isHorizontal,
  itemsPerPage = 20,
}) => {
  const paginatedData = usePagination(data, itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const [renderData, setRenderData] = useState(null);

  const handlePageChange = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    if (paginatedData) {
      setRenderData(paginatedData[currentPage - 1]);
      window.scrollTo(0, 0);
    }
  }, [currentPage, paginatedData]);

  return (
    <>
      <div className="flex flex-col pb-8">
        {paginatedData ? (
          <>
            {renderData ? (
              <div
                className={`${isHorizontal ? "flex flex-col h-full " : "grid lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1"}   justify-around p-8 gap-4`}
              >
                {renderData.map((product) => (
                  <>
                    {isHorizontal ? (
                      <MyProductInfo data={product} />
                    ) : (
                      <ProductInfo item={product} />
                    )}
                  </>
                ))}
              </div>
            ) : (
              <ProductEmpty />
            )}

            <PageSelector
              darkTheme={darkTheme}
              numPages={paginatedData.length}
              currentPage={currentPage}
              selectPage={(e) => handlePageChange(e)}
            />
          </>
        ) : null}
      </div>
    </>
  );
};
export default ProductList;
