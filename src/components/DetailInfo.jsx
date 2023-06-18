

const DetailInfo = ({item}) => {

    return ( 
        <div className="detail_info_box">
            <div className="detail_info_box1">
                <p>주소 </p> <span>{item.ADDR1 ? item.ADDR1 : item.ADDR2}</span>
                <p>전화번호</p> <span>{item.CNTCT_TEL ? item.CNTCT_TEL : "없 음"}</span>
                <p>축제기간</p> <span>{item.USAGE_DAY_WEEK_AND_TIME ? item.USAGE_DAY_WEEK_AND_TIME 
                : item.USAGE_DAY}</span>
                <p>이용요금</p> <span>{item.USAGE_AMOUNT ? item.USAGE_AMOUNT : "미 정"}</span>
            </div>
            <div className="detail_info_box2">
                    <h3 style={{marginBottom : "30px"}}>교통정보</h3>
                    <p style={{marginLeft: "20px"}}>{item.TRFC_INFO}</p>
            </div>
        </div>
    );
}

export default DetailInfo;