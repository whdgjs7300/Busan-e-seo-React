
const Banner = ({item}) => {

    return ( 
        <div className="banner"
        style={{backgroundImage:
            'url('+`${item.MAIN_IMG_NORMAL
            }`+')',   
            }}
        >

            <div className="banner_info">
                <h3 style={{color:"#FFA500",
                fontWeight : "900", marginTop : "12px"
            }}>2023</h3>
                <h2>{item.TITLE}</h2>
                <h4 style={{color:"#FFA500"}}>BUSAN FESTIVAL</h4>
                <div className="banner_info_day">
                    <h5>{item.USAGE_DAY == "" ? item.USAGE_DAY_WEEK_AND_TIME
                        : item.USAGE_DAY}</h5>
                </div>
            </div>
        </div>
    );
}

export default Banner;