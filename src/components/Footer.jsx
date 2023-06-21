
const Footer = () => {

    return (
<div className="footer_container">
        
    <div className="footer_Box">
        <div className="footer_box1">
                <h4 className="footer_title">제공</h4>
                <div style={{marginTop : "60px"}}>                
     
                </div>
                <p>2023 JongHeon PARK - All rights reserved.</p>
            </div>

            <div className="footer_box1">
                    <h4 className="footer_title">개발자 정보</h4>
                    <div style={{marginTop : "30px"}}>
                        <p style={{color : "#FFA500", fontWeight : "700"}}>박종헌 </p>
                        <p style={{color : "#FFA500", fontWeight : "700"}}>010-4133-1692</p>
                        <p>서울특별시 관악구 봉천동 26-26</p>
                        <p>{ // 깃,페이스북, 네이버 등 아이콘 
                            
                            }</p>
                    </div>
                    
            </div>

            <div className="footer_box1" 
            >
                <h4 className="footer_title">개발자 사이트</h4>
                    
                        {// 이미지와 설명
                    }

                        <a href="">
                            <img src="" alt="" />
                        </a>
                        <p style={{color : "#FFA500", fontWeight : "700"}}>https://github.com/whdgjs7300</p>
                        <a href="">
                            <img src="" alt="" />
                        </a>
                        <p>whdgjs7300@naver.com</p>
                        <a href="">
                            <img src="" alt="" />
                        </a>
                        <p>https://www.instagram.com/pxxheony_/ </p>
                    
            </div>
    </div>

            
        </div>
    );
}

export default Footer;