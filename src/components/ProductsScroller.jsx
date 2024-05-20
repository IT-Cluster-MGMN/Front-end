import { useRef } from "react";
import ProductInfo from "./ProductInfo";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductScroller = ({ data }) => {
  const scrollRef = useRef(null);

  const handleLeftArrow = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 500;
    }
  };

  const handleRightArrow = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 500;
    }
  };

  return (
    <>
      {data ? (
        <>
          {data[0] ? (
            <div className="flex flex-row gap-8 w-full items-center justify-around">
              {data.length > 3 ? (
                <FaChevronLeft
                  onClick={handleLeftArrow}
                  size={"1.5rem"}
                  color="#48C54B"
                  className={`p-2 hover:bg-zinc-100 transition rounded-full shadow shadow-black `}
                />
              ) : null}
              <div
                ref={scrollRef}
                className="flex flex-row scroll-smooth w-[50rem] gap-2 overflow-x-scroll"
              >
                {data.map((product) => (
                  <ProductInfo item={product} />
                ))}
              </div>
              {data.length > 3 ? (
                <FaChevronRight
                  onClick={handleRightArrow}
                  size={"1.5rem"}
                  color="#48C54B"
                  className={`p-2 hover:bg-zinc-100 transition rounded-full shadow shadow-black `}
                />
              ) : null}
            </div>
          ) : (
            <span className="font-sans font-bold ">
              Ніяких товарів ще не додано
            </span>
          )}
        </>
      ) : null}
    </>
  );
};

export default ProductScroller;
