

const DetailInfo = ({item}) => {
    console.log(item)
    // USAGE_AMOUNT 데이터는 축제데이터엔 포함, 맛집데이터엔 미 포함 
    // 이정보로 구분
    return ( 
        
        <div className="detail_info_box">
            <div className="detail_info_box1">
                <p>주소 </p> <span>{item.ADDR1 ||  item.ADDR2 || "미 정"}</span>
                <p>전화번호</p> <span>{item.CNTCT_TEL || "없 음"}</span>
                {
                        item.USAGE_AMOUNT ? ( // item : fesDetailList
                        <>
                        <p>축제기간</p>
                        <span>
                            {item.USAGE_DAY_WEEK_AND_TIME ||
                            item.USAGE_DAY ||
                            "미 정"}
                        </span>
                        <p>이용요금</p> <span>{item.USAGE_AMOUNT}</span>
                        </>
                    ) : (
                        // item : resDetailList
                        <>
                        <p>영업시간</p>
                        <span>
                            {item.USAGE_DAY_WEEK_AND_TIME ||
                            item.USAGE_DAY ||
                            "미 정"}
                        </span>
                        <p>대표음식</p> <span>{item.RPRSNTV_MENU}</span>
                        </>
                    )
                }
                
            </div>
            <div className="detail_info_box2">
                    <h3 style={{marginBottom : "30px"}}>교통정보</h3>
                    <p style={{marginLeft: "20px"}}>{item.TRFC_INFO || "미제공"}</p>
            </div>
        </div>
    );
}

export default DetailInfo;