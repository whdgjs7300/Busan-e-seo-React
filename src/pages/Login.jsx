
import { useState } from "react";
import { firebaseAuth , signInWithEmailAndPassword} from "../firebase";
import { Link } from "react-router-dom";

const Login = () => {
    const [typingEmail, setTypingEmail] = useState();
    const [typingPassword, setTypingPassword] = useState();
    const userLogin = async () => {
        try {
            const curUserInfo = await signInWithEmailAndPassword(firebaseAuth, typingEmail, typingPassword);
            console.log(curUserInfo);
            // 리덕스로 유저 로그인 true,false 유무 셋팅
            // setUser(curUserInfo.user);
            } catch(err){
            // setIsAppropriate(false);
            // console.log(err.code);
            /*
            입력한 아이디가 없을 경우 : auth/user-not-found.
            비밀번호가 잘못된 경우 : auth/wrong-password.
            */
            }
        }
    return ( 
        <div >
            <h2>로그인</h2>
            <form  onSubmit={(e)=>{e.preventDefault(); userLogin()}}>
                <p>이메일</p>
                <input type="text" placeholder="이메일" onChange={(e)=>{setTypingEmail(e.target.value)}}/>
                <p >비밀번호</p>
                <input type="password" onChange={ (e)=>{setTypingPassword(e.target.value)}} />
                <input type="submit" value="로그인" />
                <Link to="/signup" >회원가입</Link>
            </form>
        </div>
    );
}

export default Login;