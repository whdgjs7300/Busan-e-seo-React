
const DetailInfo2 = ({item}) => {

    return ( 
        <div className="info2_container">
            <h2 style={{
                fontWeight : "700",
                marginBottom : "50px"
        }}>{item.SUBTITLE || item.PLACE}</h2>
            <p>{ // 문자열을 줄바꿈 문자('\n')을 기준으로 분할
            item.ITEMCNTNTS.split('\n').map((line, i) =>
                <span key={i}
                style={{
                    fontWeight : "500",
                    display : "inline-block",
                    marginTop : "50px"
                }}>{line}
                { //현재 처리 중인 line의 인덱스가 문자열을 분할한 후의 마지막 줄의 인덱스와 같지 않을 때
                i !== item.ITEMCNTNTS.split('\n').length - 1 && <br />}
                </span>
                
            )}</p>
        </div>
    );
}

export default DetailInfo2;