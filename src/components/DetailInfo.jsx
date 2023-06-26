

const DetailInfo = ({item}) => {
    console.log(item)
    // USAGE_AMOUNT 데이터는 축제데이터엔 포함, 맛집데이터엔 미 포함 
    // 이정보로 구분
    return ( 
        
        <div className="detail_info_box">
            <div className="detail_info_box1">
                <h4>주소 </h4> <p>{item.ADDR1 ||  item.ADDR2 || "미 정"}</p>
                <h4>전화번호</h4> <p>{item.CNTCT_TEL || "없 음"}</p>
                {
                        item.USAGE_AMOUNT ? ( // item : fesDetailList
                        <>
                        <h4>축제기간</h4>
                        <p>
                            {item.USAGE_DAY_WEEK_AND_TIME ||
                            item.USAGE_DAY ||
                            "미 정"}
                        </p>
                        <h4>이용요금</h4> <p>{item.USAGE_AMOUNT}</p>
                        </>
                    ) : (
                        // item : resDetailList
                        <>
                        <h4>영업시간</h4>
                        <p>
                            {item.USAGE_DAY_WEEK_AND_TIME ||
                            item.USAGE_DAY ||
                            "미 정"}
                        </p>
                        <h4>대표음식</h4> <p>{item.RPRSNTV_MENU}</p>
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