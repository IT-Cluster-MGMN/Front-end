import ProductInfo from "./ProductInfo";

const ProductList = ({data}) => {
    return(
        <>
            <div className="grid justify-between w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-4 
                xl:grid-cols-5 2xl:grid-cols-6 gap-[0.3rem] bg-inherit">
                {data.map(product => (
                    <>
                        <ProductInfo item={product}/>
                    </>
                ))}
            </div>
        </>
    );
};
export default ProductList;