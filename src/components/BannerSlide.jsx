import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Banner from "./Banner";

const BannerSlide = ({item}) => {
//라이브러리 이벤트 속성과 디자인 요소 스타일링
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        
    };
    console.log(item)

    return ( 
        <Slider {...settings}>
                {
                    item.map((item)=>{
                        return <div key={item} className="banner_container">
                            <Banner item={item}/>
                        </div>
                        
                    }) 
                }
                
            
            
            
        </Slider>
    );
}

export default BannerSlide;