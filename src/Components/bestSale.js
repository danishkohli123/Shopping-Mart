import { products } from "./constant";
import { FaPlus, FaStar, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './style.css';

function BestSale(props) {
    const { addDataFn } = props
    
    const clickFn = (item) => {
        addDataFn(item)
    }
    let filterarray = products.filter((item) => {
        return (item.category === "sofa")
    })
    let navigate = useNavigate();
    const singleProduct = (item) => {
        navigate("singleProductInfo", { state: item })
    }
    return (
        <>
            <div style={{ backgroundColor: '#eaf3f3f7', padding: '50px 100px' }}>
                <h1 style={{ textAlign: 'center', fontSize: '50px', marginBottom: '20px' }}>Best Sales</h1>
                <div style={{ display: 'grid', gridTemplateColumns: '30% 30% 30%', justifyContent: 'space-evenly', marginBottom: '50px' }}>
                    {filterarray.map((item, index) => (
                        < span key={index} className="border p-3 my-3 border-light" style={{ borderRadius: '8px', backgroundColor: 'white' }}
                            onMouseEnter={(e) => e.currentTarget.querySelector('.heart-icon').style.display = 'block'}
                            onMouseLeave={(e) => e.currentTarget.querySelector('.heart-icon').style.display = 'none'}>
                            <div style={{ display: "grid", gridTemplateColumns: "90% 10%" }}>
                                <div style={{ textAlign: 'end' }}>
                                    <img onClick={() => singleProduct(item)}
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
                            </div>
                            <div>
                                {Array.from({ length: Math.ceil(item.avgRating) }).map((_, index) => (
                                    <FaStar key={index} size={23} style={{ color: 'yellow', margin: '20px 3px' }} />
                                ))}
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <h1>{"$" + item.price}</h1>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <FaPlus className="hoverpart" size={51} style={{ border: '1px solid darkgray', padding: '10px', borderRadius: '100%', cursor: 'pointer' }} onClick={() => clickFn(item)} />
                                </div>
                            </div>
                        </span >
                    ))}
                </div>
            </div>
        </>
    );
}
export default BestSale;