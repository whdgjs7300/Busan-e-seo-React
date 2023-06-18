
const DetailInfo2 = ({item}) => {

    return ( 
        <div>
            <h2>{item.SUBTITLE || item.PLACE}</h2>
            <p>{ // 문자열을 줄바꿈 문자('\n')을 기준으로 분할
            item.ITEMCNTNTS.split('\n').map((line, i) =>
                <span>{line}
                { //현재 처리 중인 line의 인덱스가 문자열을 분할한 후의 마지막 줄의 인덱스와 같지 않을 때
                i !== item.ITEMCNTNTS.split('\n').length - 1 && <br />}
                </span>
                
            )}</p>
        </div>
    );
}

export default DetailInfo2;