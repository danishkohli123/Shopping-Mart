import { useState } from "react";
import { FaStar, FaUser, FaPlus } from "react-icons/fa";
import Footer from "./footer";
import Header from "./header";
import { useLocation } from "react-router-dom";
import { products } from "./constant";

function SingleProductInfo() {
    let location = useLocation();
    let data = location.state;

    let stars = Array.from({ length: (Math.ceil(data.avgRating)) }, (_, index) => index + 1)

    const relatedData = products.filter((items) => {
        return items.category === data.category
    })

    const [isdescriptionVisible, setDescriptionVisibility] = useState(true);
    const [itemQuantity, setItemQuantity] = useState(1);

    const itemQuantityOnChangeListener = (e) => {
        let value = e.target.value
        if (value <= 0) {
            value = 1
        }
        setItemQuantity(value)
    }
    return (
        <>
            <Header />
            <div style={{ position: 'relative' }}>
                <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '2', color: 'white' }}>{data.productName}</h1>
                <img style={{ position: 'relative', zIndex: '1', filter: 'grayscale(45%)' }} src="images/background.jpg" alt="backgroundImg" width={'100%'} height={'250px'} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '45% 40%', justifyContent: 'space-evenly', padding: '50px 0px' }}>
                <div>
                    <img src={data.imgUrl} alt="emptyImg" width={'100%'} />
                </div>
                <div>
                    <h1>{data.productName}</h1>
                    <span style={{ marginBottom: '20px' }}>
                        <span> {stars.map((_, index) => (
                            <FaStar key={index} size={23} style={{ color: 'yellow', margin: '20px 3px' }} />
                        ))}</span>
                        <span style={{ marginLeft: '12%' }}>{data.avgRating}Rating</span>
                    </span>
                    <div style={{ marginBottom: '20px', display: 'flex' }}>
                        <h2>${data.price}</h2>
                        <span style={{ marginLeft: '29%' }}>Category:{data.category}</span>
                    </div>
                    <p>{data.shortDesc}</p>
                    <input type="number" style={{ width: '100px' }} value={itemQuantity} onChange={(e) => itemQuantityOnChangeListener(e)} /><br /><br />
                    <button style={{ backgroundColor: 'navy', color: 'white', fontSize: '23px', borderRadius: '9px' }}>Add To Cart</button>
                </div>
            </div>
            <div style={{ display: "flex", padding: '5px 20px' }}>
                <div onClick={() => setDescriptionVisibility(true)} style={{ color: isdescriptionVisible ? 'black' : 'lightgray' }}>
                    <h3>Description</h3>
                </div>
                <div onClick={() => setDescriptionVisibility(false)} style={{ color: isdescriptionVisible ? 'lightgray' : 'black' }}>
                    <h3>&nbsp;&nbsp;Reviews({data.reviews.length})</h3>
                </div>
            </div>
            {isdescriptionVisible ? <p style={{ padding: '5px 20px' }}>{data.description}</p>
                : data.reviews.map((item, index) => (
                    <div className="helo" key={index} style={{ marginLeft: '20px' }}>
                        <div style={{ display: 'flex' }}>
                            <p>
                                <FaUser size={60} style={{ border: '1px solid black', padding: '10px', borderRadius: '50%', backgroundColor: 'yellow' }} />
                            </p>
                            <p style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>{Array.from({
                                length: Math.ceil(item.rating)
                            }).map((_, index) => (
                                <FaStar key={index} size={20} color="yellow" />
                            ))
                            }
                            </p>
                        </div>
                        <p>{item.text}</p>
                    </div>
                ))
            }
            <h6 style={{ fontSize: '30px', marginTop: '70px', padding: '0px 20px' }}>You might also like</h6>
            <div style={{ display: 'grid', gridTemplateColumns: '25% 25% 25%', justifyContent: 'space-evenly', marginBottom: '50px' }}>
                {relatedData.map((item, index) => (
                    <span
                        key={index}
                        className="border p-3 my-3 border-light"
                        style={{ boxShadow: '0px 8px 10px -2px rgba(0, 0, 0, 0.5)', backgroundColor: 'white' }}>
                        <img
                            style={{ cursor: 'pointer' }}
                            src={item.imgUrl} alt="img"
                            width={item.imgUrl.includes(".png") ? "80%" : "70%"}
                        />
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
export default SingleProductInfo