import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ProductList from "../../../components/ProductList";

const SearchProducts = () => {
  const [data, setData] = useState(null);
  const location = useLocation();
  const searchInput = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (searchInput) {
      axios
        .post(
          "http://localhost:8000/api/product/search",
          {
            query: searchInput,
          },
          { withCredentials: true },
        )
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {});
    }
  }, [searchInput]);

  return (
    <>
      <div className=" px-[0.3rem] min-h-screen w-full flex flex-col items-center">
        {data ? (
          <>
            <ProductList data={data} />
          </>
        ) : (
          <>
            <p>
              No data for SearchReq: {typeof searchInput} | {searchInput}
            </p>
          </>
        )}
      </div>
    </>
  );
};
export default SearchProducts;
