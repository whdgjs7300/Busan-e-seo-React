
import { useState } from "react";
import { firebaseAuth , signInWithEmailAndPassword} from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [typingEmail, setTypingEmail] = useState();
    const [typingPassword, setTypingPassword] = useState();
    const [userData, setUserData] = useState(null)
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();




    // 일반 로그인 실행 함수
    const userLogin = async () => {
        try {
            const curUserInfo = await signInWithEmailAndPassword(firebaseAuth, typingEmail, typingPassword);
            console.log(curUserInfo);

            navigate('/')
            // 유저 이름 로컬 스토리지 저장
            localStorage.setItem('userName', curUserInfo.user.displayName);
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
            // 로그인 상태를 로컬 스토리지에 저장
            localStorage.setItem('isLoggedIn', 'true');
                            // 유저 이름 로컬 스토리지 저장
            localStorage.setItem('userName', data.user.displayName);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            });
        }

    return ( 
        <div className="login_container">
            <h1 >로그인</h1>

            <form  className="login_form"
            onSubmit={(e)=>{e.preventDefault(); userLogin()}}>
                <input type="text" placeholder="이메일" onChange={(e)=>{setTypingEmail(e.target.value)}}/>
                <input type="password" placeholder="비밀번호" onChange={ (e)=>{setTypingPassword(e.target.value)}} />
                <p>{errorMsg}</p>
                <input type="submit" value="로그인" />
                <button className="first_login_btn" onClick={handleGoogleLogin} >구글로 로그인</button>
                <button className="second_login_btn" onClick={()=>navigate('/signup')}>회원가입</button>
            </form>
            
        </div>
    );
}

export default Login;