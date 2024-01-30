import Header from "./header";
import Footer from "./footer";
import { FaStar, FaHeart, FaPlus, FaSearch } from "react-icons/fa";
import { products } from "./constant";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Shop() {
    const [values, setValues] = useState(products.filter((product) => (
        product.category.toLowerCase() === "sofa"
    )))

    let navigate = useNavigate();
    const singleProduct = (item) => {
        navigate("singleProductInfo", { state: item })
    }

    const productSelectionListener = (e) => {
        let filterList = products.filter((product) => (
            product.category.toLowerCase() === e.target.value.toLowerCase()
        ))
        setValues(filterList)
    }
    return (
        <>
            <Header />
            <div style={{ position: 'relative' }}>
                <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '2', color: 'white' }}>product</h1>
                <img style={{ position: 'relative', zIndex: '1', filter: 'grayscale(45%)' }} src="images/background.jpg" alt="backgroundImg" width={'100%'} height={'250px'} />
                <div style={{ marginTop: '50px', marginLeft: '30px', display: 'flex', marginBottom: '80px' }}>
                    <div>
                        <select id="dropdown" onChange={(e) => productSelectionListener(e)} style={{ fontSize: '25px', padding: '5px', backgroundColor: 'navy', color: 'white', borderRadius: '10px' }}>
                            <option value="Sofa">Filter By Category |</option>
                            <option value="Sofa">Sofa</option>
                            <option value="Chair">Chair</option>
                            <option value="Watch">Watch</option>
                            <option value="Mobile">Mobile</option>
                            <option value="wireless">Wireless</option>
                        </select>
                    </div>
                    <div style={{ width: '60%', marginLeft: '200px' }}>
                        <input type="search" placeholder="Search..." style={{ width: '90%', fontSize: '25px', borderRadius: '25px' }} /><FaSearch size={'25px'} style={{ marginLeft: '-40px', marginTop: '-10px' }} />
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '25% 25% 25%', justifyContent: 'space-evenly', marginBottom: '50px' }}>
                {values.map((item, index) => (
                    < span key={index} className="border p-3 my-3 border-light" style={{ boxShadow: '0px 8px 10px -2px rgba(0, 0, 0, 0.5)', backgroundColor: 'white' }}
                        onMouseEnter={(e) => e.currentTarget.querySelector('.heart-icon').style.display = 'block'}
                        onMouseLeave={(e) => e.currentTarget.querySelector('.heart-icon').style.display = 'none'}>
                        <div style={{ display: 'flex' }}>
                            <img onClick={() => singleProduct(item)} style={{ cursor: 'pointer' }} src={item.imgUrl} alt="img" width={item.imgUrl.includes(".png") ? "78%" : "75%"} />
                            <p style={{ display: 'none', marginLeft: '50px' }} className="heart-icon">
                                <FaHeart />
                            </p>
                        </div>
                        <h3>{item.productName}</h3>
                        {Array.from({ length: Math.ceil(item.avgRating) }).map((_, index) => (
                            <FaStar key={index} size={23} style={{ color: 'yellow', margin: '20px 3px' }} />
                        ))}
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>{"$" + item.price}</h3>
                            <FaPlus size={35} className="hoverpart" style={{ border: '1px solid black', padding: '5px', borderRadius: '100%', cursor: 'pointer' }} />
                        </div>
                    </span >
                ))}
            </div>
            <Footer />
        </>
    );
}
export default Shop;