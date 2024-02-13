import { FaShoppingBag, FaUser, FaCartPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Header(props) {
    const { addToCart } = props
    // console.log(addToCart);
    let navigate = useNavigate()

    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg bg-light" style={{ display: 'grid', gridTemplateColumns: '50% 40%', justifyContent: 'space-evenly', boxShadow: '0px 8px 10px -2px rgba(0, 0, 0, 0.5)' }}>
                <div className="container-fluid" style={{ display: 'flex', justifyContent: 'left', marginLeft: "0%" }}>
                    <FaShoppingBag size={20} />
                    <h1 className="navbar-brand" style={{ color: 'black', margin: '0%', fontSize: '25px' }}>Mark</h1>
                </div>
                <div style={{ display: 'grid', alignItems: 'center', gridTemplateColumns: '22% 20% 19% 9% 9% 3%', justifyContent: 'end' }}>
                    <h5 style={{ cursor: 'pointer' }} onClick={() => navigate("/", { state: addToCart })}>Home</h5>
                    <h5 style={{ cursor: 'pointer' }} onClick={() => navigate("/shop", { replace: true })}>Shop</h5>
                    <h5 style={{ cursor: 'pointer' }}>Cart</h5>
                    <FaUser size={20} style={{ cursor: 'pointer' }} />
                    <FaCartPlus size={23} style={{ cursor: 'pointer' }} onClick={() => navigate("/cart", { state: addToCart}, { replace: true })} />
                    <p style={{ padding: '0px 6px', backgroundColor: '#020249', color: 'white', top: '0%', position: 'absolute', right: '70px', borderRadius: '100%' }}> {addToCart ? addToCart.length : 0}</p>
                </div>
            </nav>
        </>
    );
}
export default Header;
