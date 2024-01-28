import ProductInfo from "./ProductInfo";
import "../App.css";

const ProductList = ({data}) => {
    return(
        <>
            <div className = "card-container">
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