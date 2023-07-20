
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
                        
                    </div>
                    
            </div>

            <div className="footer_box1" 
            >
                <h4 className="footer_title">개발자 사이트</h4>
                    
                        {// 이미지와 설명
                    }

                        <a target="blank" href="https://github.com/whdgjs7300">
                            <img className="site_img"
                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                        </a>
                        {/* 네이버 대신 노션주소써야함 ! */}
                        <p >https://github.com/whdgjs7300</p>
                        <a target="blank" href="https://jongheons.notion.site/e893f255eea74ec68869fb038c04ef77?pvs=4">
                            <img className="site_img"
                            src="https://imghub.insilicogen.com/media/photos/lbj_notion_0.png" alt="" />
                        </a>
                        <p >https://jongheons.notion.site</p>
                        <a target="blank" href="https://www.instagram.com/pxxheony_/">
                            <img className="site_img"
                            src="https://i.namu.wiki/i/PpCUHjc8PoAlAWoSip-m3KtgYMq7Ft1sI2BiCioMrclYCFdnjCEVKdPyXJ3yqXgHjgboqOp-8Q9z71WTisQy_A.svg" alt="" />
                        </a>
                        <p>https://www.instagram.com/pxxheony_/ </p>
                    
            </div>
    </div>

            
        </div>
    );
}

export default Footer;