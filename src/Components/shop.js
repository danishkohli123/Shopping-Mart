import { FaStar, FaHeart, FaPlus, FaSearch } from "react-icons/fa";
import { products } from "./constant";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css';

function Shop(props) {
    const { addDataFn } = props

    const clickFn = (item) => (
        addDataFn(item)
    )
    const [values, setValues] = useState(products.filter((product) => (
        product.category.toLowerCase() === "sofa"
    )))

    let navigate = useNavigate();
    const singleProduct = (item) => {
        navigate("/singleProductInfo", { state: item, replace: true })
    }

    const productSelectionListener = (e) => {
        let filterList = products.filter((product) => (
            product.category.toLowerCase() === e.target.value.toLowerCase()
        ))
        setValues(filterList)
    }
    const searchEvent = (event) => {
        let searchValue = event.target.value.trim();
        let hello = products.filter((product) => {
            if (searchValue === "") {
                return product.category.toLowerCase() === "sofa";
            }
            return product.productName.toLowerCase().includes(searchValue.toLowerCase())
        })
        setValues(hello);
    }

    return (
        <>

            <div style={{ position: 'relative' }}>
                <h1 style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '2', color: 'white' }}>product</h1>
                <div style={{ width: '100%' }}>
                    <img style={{ position: 'relative', zIndex: '1', filter: 'grayscale(100%) brightness(0.5)', height: '280px' }} src="images/table.jpg" alt="backgroundImg" width={'100%'} />
                </div>
                <div style={{ marginTop: '50px', marginLeft: '30px', display: 'flex', marginBottom: '80px' }}>
                    <div>
                        <select id="dropdown" onChange={(e) => productSelectionListener(e)} style={{ fontSize: '20px', padding: '5px', backgroundColor: '#020249', color: 'white', borderRadius: '10px' }}>
                            <option className="dropList" hidden value="Sofa">Filter By Category |</option>
                            <option className="dropList" value="Sofa">Sofa</option>
                            <option className="dropList" value="Chair">Chair</option>
                            <option className="dropList" value="Watch">Watch</option>
                            <option className="dropList" value="Mobile">Mobile</option>
                            <option className="dropList" value="wireless">Wireless</option>
                        </select>
                    </div>
                    <div style={{ width: '60%', marginLeft: '200px' }}>
                        <input type="search" placeholder="Search..." onChange={(event) => searchEvent(event)} style={{ width: '90%', paddingLeft: '10px', fontSize: '21px', borderRadius: '25px' }} /><FaSearch size={'23px'} style={{ marginLeft: '-40px', marginTop: '-10px' }} />
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '30% 30% 30%', justifyContent: 'space-evenly', marginBottom: '50px', padding: '0px 100px' }}>
                {values.map((item, index) => (
                    < span key={index} className="border p-3 my-3 " style={{ backgroundColor: 'white', borderRadius: '8px' }}
                        onMouseEnter={(e) => e.currentTarget.querySelector('.heart-icon').style.display = 'block'}
                        onMouseLeave={(e) => e.currentTarget.querySelector('.heart-icon').style.display = 'none'}>
                        <div style={{ display: 'grid', gridTemplateColumns: '90% 10%' }}>
                            <div style={{ textAlign: 'end' }}>
                                <img
                                    onClick={() => singleProduct(item)}
                                    style={{ cursor: 'pointer' }}
                                    src={item.imgUrl} alt="img"
                                    width={item.imgUrl.includes(".png") ? "95%" : "90%"}
                                    height={item.imgUrl.includes(".png") ? "250px" : "250px"} />
                            </div>
                            <div>
                                <p style={{ display: 'none' }} className="heart-icon">
                                    <FaHeart />
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3>{item.productName}</h3>
                            {Array.from({ length: Math.ceil(item.avgRating) }).map((_, index) => (
                                <FaStar key={index} size={23} style={{ color: 'yellow', margin: '20px 3px' }} />
                            ))}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <h1>{"$" + item.price}</h1>
                            </div>
                            <div style={{ display: 'flex', alignItems: "center" }}>
                                <FaPlus size={51} className="hoverpart" style={{ border: '1px solid darkgray', padding: '10px', borderRadius: '100%', cursor: 'pointer' }} onClick={() => clickFn(item)} />
                            </div>
                        </div>
                    </span >
                ))}
            </div>

        </>
    );
}
export default Shop;