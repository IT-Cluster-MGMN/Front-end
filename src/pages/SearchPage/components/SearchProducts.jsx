import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ProductList from "../../../components/ProductList";
import Loading from "../../../components/Loading";

const SearchProducts = ({ descendingSort, range }) => {
  const [data, setData] = useState(null);
  const location = useLocation();
  const searchInput = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (searchInput) {
      axios
        .post(
          ` http://localhost:8000/api/product/search`,
          {
            minPrice: range[0],
            maxPrice: range[1],
            descending: descendingSort,
          },
          {
            withCredentials: true,
            params: {
              search: searchInput,
            },
          },
        )
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [searchInput, descendingSort, range]);

  return (
    <>
      <div className=" px-[0.3rem] min-h-screen w-full flex flex-col items-center">
        {data ? (
          <>
            <ProductList data={data} />
          </>
        ) : (
          <>
            <Loading darkTheme={true} />
          </>
        )}
      </div>
    </>
  );
};
export default SearchProducts;
