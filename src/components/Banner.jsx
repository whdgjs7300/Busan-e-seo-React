const Banner = ({ item }) => {
    // https로 바꾸는 코드 (성능 최적화)
    // 배너 이미지 lazy - loading 적용 (이미지 최적화)

    const httpsImageUrl = item.MAIN_IMG_NORMAL.replace(/^http:/, 'https:');

    return (
        <div className="banner">
            <img
            src={httpsImageUrl}
            alt={item.TITLE}
            loading="lazy"
            className="banner_image"
            />
            <div className="banner_info">
            <h3 style={{ color: "#FFA500", fontWeight: "900", marginTop: "12px" }}>2023</h3>
            <h2>{item.TITLE}</h2>
            <h4 style={{ color: "#FFA500" }}>BUSAN FESTIVAL</h4>
            <h5>{item.SUBTITLE || item.PLACE}</h5>
            <div className="banner_info_day">
                <h5>{item.USAGE_DAY === "" ? item.USAGE_DAY_WEEK_AND_TIME : item.USAGE_DAY}</h5>
            </div>
            </div>
        </div>
        );
    }
    
export default Banner;