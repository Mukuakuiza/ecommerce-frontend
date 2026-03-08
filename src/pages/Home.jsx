import {getProducts} from "../data/products.js";
import ProductCart from "../components/ProductCart.jsx";

const Home = () => {
    const products = getProducts();
    return (
        <div className="page">
            <div className="home-hero">
                <h1 className="home-title"><span style={{color: "#007bff"}}>Mais Shopping </span> Your Local Online Shop</h1>
                <p className="home-subtitle">Amazing products and prices</p>
            </div>
            <div className="container">
                <h2 className="home-title">
                    Our Products
                </h2>
                <div className="product-grid">
                    {
                        products.map((product)=>(
                            <ProductCart key={product.id} product={product}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Home
