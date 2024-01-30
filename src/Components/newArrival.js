import { products } from "./constant";
import { FaPlus, FaStar, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './style.css';

function NewArrival() {
    let filterarray = products.filter((item) => {
        return (item.category === "mobile") || (item.category === "wireless");
    })
    let navigate = useNavigate()
    const singleProduct = (item) => {
        navigate("singleProductInfo", { state: item })
    }
    return (
        <>
            <div style={{ padding: '60px 0px' }}>
                <h1 style={{ textAlign: 'center', fontSize: '50px', marginBottom: '20px' }}>New Arrival</h1>
                <div style={{ display: 'grid', gridTemplateColumns: '25% 25% 25%', justifyContent: 'space-evenly', marginBottom: '50px' }}>
                    {filterarray.map((item, index) => (
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
            </div>
        </>
    );
}
export default NewArrival;