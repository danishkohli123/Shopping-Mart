import { FaPlus, FaStar, FaHeart } from "react-icons/fa";
import { discoutProducts } from "./constant";
import { useNavigate } from "react-router-dom";

function BigDiscount() {
    let navigate = useNavigate()
    const singleProduct = (item) => {
        navigate("singleProductInfo", { state: item })
    }
    return (
        <div style={{ backgroundColor: '#eaf3f3f7', padding: '60px 0px' }}>
            <h1 style={{ textAlign: 'center', fontSize: '50px', marginBottom: '20px' }}>Big Discount</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '25% 25% 25%', justifyContent: 'space-evenly', marginBottom: '50px' }}>
                {discoutProducts.map((item, index) => (
                    <span
                        key={index}
                        className="border p-3 my-3 border-light"
                        style={{ boxShadow: '0px 8px 10px -2px rgba(0, 0, 0, 0.5)', backgroundColor: 'white' }}
                        onMouseEnter={(e) => e.currentTarget.querySelector('.heart-icon').style.display = 'block'}
                        onMouseLeave={(e) => e.currentTarget.querySelector('.heart-icon').style.display = 'none'}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p style={{ border: '1px solid Navy', backgroundColor: 'navy', color: 'white', padding: '3px 5px', borderRadius: '20px', width: '70px' }}>
                                {item.discount + "% Off"}
                            </p>
                            <p style={{ display: 'none' }} className="heart-icon">
                                <FaHeart />
                            </p>
                        </div>

                        <img
                            style={{ cursor: 'pointer' }}
                            src={item.imgUrl} alt="img"
                            width={item.imgUrl.includes(".png") ? "80%" : "70%"}
                            onClick={() => singleProduct(item)} />

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
    )
}
export default BigDiscount;