import { serviceData } from './constant';
function Advantage() {
    return (
        <>
            <div className="container text-center my-5 p-4">
                <div className="row" style={{ display: 'grid', gridTemplateColumns: '24% 24% 24% 24%', justifyContent: 'space-evenly' }}>
                    {serviceData.map((item, index) => (
                        <div key={index} className="col" style={{ backgroundColor: item.bg, padding: '40px 0px 40px 0px' }}>
                            {item.icon}
                            <h3>{item.title}</h3>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default Advantage;