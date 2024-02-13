function Cart(props) {
    let { cartData } = props
    let { prize } = props
    let { deleteFn } = props
    let { add } = props
    let { subt } = props
    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: '60% 35%', justifyContent: 'space-evenly', backgroundColor: 'rgba(234, 243, 243, 0.97)', paddingTop: '50px' }}>
                <div>
                    {cartData.length === 0
                        ? <div style={{ border: '1px solid white', backgroundColor: 'white', borderRadius: '10px', paddingLeft: '15px', paddingTop: '20px', height: '200px' }}>
                            <h3>{"No item are add in Cart"}</h3>
                        </div>
                        : cartData.map((item, index) => (
                            <div key={index} style={{ display: 'grid', gridTemplateColumns: '30% 65%', justifyContent: 'space-evenly', marginBottom: '30px', border: '1px solid white', backgroundColor: 'white', padding: '5px' }}>
                                <span>
                                    <img src={item.product.imgUrl} style={{ width: '100%', height: '150px' }} alt="img" />
                                </span>
                                <div>
                                    <h5 style={{ textAlign: 'end', marginBottom: '0%', cursor: 'pointer' }} onClick={() => deleteFn(item.product.id)}>{'X'}</h5>
                                    <h2 style={{ marginBottom: '35px' }}>{item.product.productName}</h2>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div style={{ display: 'grid', gridTemplateColumns: '80% 70%', alignItems: 'center' }}>
                                            <div>
                                                <p style={{ marginBottom: '0%' }}>{` $${item.product.price}.00 *  ${item.quantity}`}</p>
                                            </div>
                                            <div style={{ textAlign: 'end' }}>
                                                <h5 style={{ marginBottom: '0%' }}>{item.product.price * item.quantity}</h5>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <div>
                                                <button style={{ border: '1px solid lightgray', padding: '0px 8px 3px', marginRight: '5px', fontSize: '30px', backgroundColor: 'white' }} onClick={() => add(item.product.id)}>+</button>
                                            </div>
                                            <div>
                                                <button style={{ border: '1px solid rgba(234, 243, 243, 0.97)', padding: '0px 11px 3px', fontSize: '30px', backgroundColor: 'rgba(234, 243, 243, 0.97)' }} onClick={() => subt(item.product.id)}>-</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div style={{ border: '1px solid white', paddingLeft: '15px', paddingTop: '20px', height: '200px', backgroundColor: 'white', marginBottom: '50px', borderRadius: '10px' }}>
                    <h3 style={{ marginBottom: '50px' }}>Cart Summary</h3>
                    <h6>Total Price :</h6>
                    <h5>{`$${prize}.00`}</h5>
                </div>
            </div >
        </>
    );
}
export default Cart;