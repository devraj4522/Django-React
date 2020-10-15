import React, { useState, useEffect } from "react";

import { getProducts } from "./helper/coreapicalls";

import "../styles.css";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const loadAllProducts = () => {
        getProducts()
            .then((data) => {
                if (data.error) {
                    console.log("\n\n=>Error ");
                    setError(data.error);
                    console.log(error + "\n\n=>Error ");
                } else {
                    console.log(data);
                    setProducts(data);
                }
            
            })
            .catch((err) => console.log(err))
            ;
            
    };

    useEffect(() => {
        loadAllProducts();
    }, []);

    return (
        <div>
            <h1>Home component</h1>
            <div className="row">
                {products.map((product, index) => {
                    return (
                        <div key={index} className="col-4 mb-4">
                            <h1>{product.name} </h1>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
