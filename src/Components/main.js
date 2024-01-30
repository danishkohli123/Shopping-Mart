import Advantage from "./advantage";
import BestSale from "./bestSale";
import BigDiscount from "./bigDiscount";
import Footer from "./footer";
import Header from "./header";
import MainCarousal from "./mainCarousal";
import NewArrival from "./newArrival";

function Main() {
    return (  
        <>
            <Header />
            <MainCarousal />
            <Advantage />
            <BigDiscount />
            <NewArrival />
            <BestSale />
            <Footer />
        </>
    );
}
export default Main;
