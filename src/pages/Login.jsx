
import { useState } from "react";
import { firebaseAuth , signInWithEmailAndPassword} from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const [typingEmail, setTypingEmail] = useState();
    const [typingPassword, setTypingPassword] = useState();
    const [userData, setUserData] = useState(null)
    const [errorMsg, setErrorMsg] = useState("　");
    const navigate = useNavigate();

    const {isLoggedin,loginLoading} = useSelector(state=>state.user)
    const dispatch = useDispatch();

    console.log(isLoggedin)
    // 일반 로그인 실행 함수
    const userLogin = async () => {
        try {
            const curUserInfo = await signInWithEmailAndPassword(firebaseAuth, typingEmail, typingPassword);
            console.log(curUserInfo);
            // 리덕스로 유저 로그인 true,false 유무 셋팅
            dispatch({
                type : "LOGIN"
            })
            // setUser(curUserInfo.user);
            navigate('/')
            // 로그인 상태를 로컬 스토리지에 저장
            localStorage.setItem('isLoggedIn', 'true');
            } catch(err){
            // setIsAppropriate(false);
            // console.log(err.code);
            switch (err.code) {
                case 'auth/weak-password':
                setErrorMsg('비밀번호는 6자리 이상이어야 합니다');
                break;
                case 'auth/invalid-email':
                setErrorMsg('잘못된 이메일 주소입니다');
                break;
                case 'auth/wrong-password' : 
                setErrorMsg('비밀번호가 틀립니다');
                break;
                case 'auth/user-not-found' : 
                setErrorMsg('가입되지 않은 이메일 입니다.');
            }
            }
        }

    // 구글 로그인 실행 함수    
    function handleGoogleLogin() {
        const provider = new GoogleAuthProvider(); // provider 구글 설정
            signInWithPopup(firebaseAuth , provider) // 팝업창 띄워서 로그인
            .then((data) => {
                setUserData(data.user); // user data 설정 - 리덕스로 전역관리
                console.log(data); // console에 UserCredentialImpl 출력
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            });
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
                <p>{errorMsg}</p>
            </form>
            <button onClick={handleGoogleLogin} >구글로 로그인</button>
        </div>
    );
}

export default Login;