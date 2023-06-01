import { firebaseAuth , createUserWithEmailAndPassword } from "../firebase";
import { useState } from "react";
import { Link } from "react-router-dom";




const SignUp = () => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [errorMsg, setErrorMsg] = useState("　");


    // `회원가입` 버튼의 onClick에 할당
const register = async () => {
    try {
        setErrorMsg('　');
        const createdUser = await createUserWithEmailAndPassword(firebaseAuth, registerEmail, registerPassword);
        //console.log(createdUser);
        setRegisterEmail("");
        setRegisterPassword("");
        console.log(createdUser);
        } catch(err){
        //console.log(err.code);
        switch (err.code) {
            case 'auth/weak-password':
            setErrorMsg('비밀번호는 6자리 이상이어야 합니다');
            break;
            case 'auth/invalid-email':
            setErrorMsg('잘못된 이메일 주소입니다');
            break;
            case 'auth/email-already-in-use':
            setErrorMsg('이미 가입되어 있는 계정입니다');
            break;
        }
        }
    }

    return ( 
        <div >
            <h2>회원가입</h2>
            <form  onSubmit={(e)=>{e.preventDefault();register()}}>
                <p>이메일</p>
                <input type="text" placeholder="example@nav.com" onChange={(e)=>{setRegisterEmail(e.target.value)}}/>
                <p>비밀번호</p>
                <input type="password" onChange={ (e)=>{setRegisterPassword(e.target.value)}} />
                <p>이름</p>
                <input type="text" placeholder="이름" onChange={ (e)=>{setRegisterName(e.target.value)}} />
                <input className="F_submit" type="submit" value="회원가입" />
                <Link to="/login" className="F_signup_btn">로그인</Link>
            </form>
        </div>
    );
}

export default SignUp;