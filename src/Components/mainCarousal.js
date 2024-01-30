import { corousalList } from './constant';
function MainCarousal() {
    let indicatorArray = Array.from({ length: corousalList.length }, (_, index) => index + 1);
    // console.log(indicatorArray);
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-indicators ">
                    {indicatorArray.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : undefined}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner" style={{ backgroundColor: '#eaf3f3f7' }}>
                    {corousalList.map((item, index) => (
                        <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item "}>
                            <div style={{ marginTop: '70px', display: 'grid', gridTemplateColumns: '45% 45%', justifyContent: 'space-evenly' }}>
                                <div style={{ display: 'grid', alignSelf: 'center' }}>
                                    <h1 style={{ fontSize: '55px' }}>{item.title}</h1>
                                    <p style={{ fontSize: '25px' }}>{item.desc}</p>
                                    <p style={{ border: '1px solid #f4e6ba', width: '20%', backgroundColor: '#f4e6ba', cursor: 'pointer' }}>Visit Collections</p>
                                </div>
                                <div>
                                    <img src={item.cover} alt="sofaimage" width={'80%'} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default MainCarousal;