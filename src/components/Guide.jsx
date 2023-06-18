
const Guide = ({item}) => {

    return (
        <div className="guide_container">
            <div className="guide_info">
                <p>주소 :</p>
                <p>{item.ADDR1 || item.ADDR2}</p>
            </div>
            <div className="guide_info">
                <p>전화번호 :</p>
                <p>{item.CNTCT_TEL || "없음"}</p>
            </div>
            <div className="guide_info">
                <p>홈페이지 :</p>
                <p>{item.HOMEPAGE_URL || "없음"}</p>
            </div>
            <div className="guide_info">
                <p>운영요일 및 시간 :</p>
                <p>{item.USAGE_DAY || item.USAGE_DAY_WEEK_AND_TIME || "미정"}</p>
            </div>
            <div className="guide_info">
                <p>이용요금 :</p>
                <p>{item.USAGE_AMOUNT || "미정"}</p>
            </div>
            <div className="guide_info">
                <p>교통정보 :</p>
                <p>{item.TRFC_INFO || "미제공"}</p>
            </div>
            <div className="guide_info">
                <p>비고 :</p>
                <p>{item.MIDDLE_SIZE_RM1 || "없음"}</p>
            </div>
        </div>
    );
}

export default Guide;