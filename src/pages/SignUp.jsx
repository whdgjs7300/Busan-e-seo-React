import { useNavigate } from "react-router-dom";
import { firebaseAuth , createUserWithEmailAndPassword,updateProfile  } from "../firebase";
import { useState } from "react";


const SignUp = () => {
    const navigate = useNavigate();
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [errorMsg, setErrorMsg] = useState("　");


    // `회원가입` 버튼의 onClick에 할당
const register = async () => {
    try {
        setErrorMsg('　');
        const createdUser = await createUserWithEmailAndPassword(firebaseAuth, registerEmail, registerPassword, );
        
        await updateProfile(createdUser.user, {
            displayName: registerName
        });
        //console.log(createdUser);

        setRegisterEmail("");
        setRegisterPassword("");
        navigate('/login')
        
        
        
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
        <div className="login_container">
            <h1>회원가입</h1>
            <form  className="login_form"
            onSubmit={(e)=>{e.preventDefault();register()}}>
                <p>아래 정보를 입력하세요.</p>
                <input type="text" placeholder="example@nav.com" onChange={(e)=>{setRegisterEmail(e.target.value)}}/>
                <input type="password" placeholder="비밀번호를 입력하세요." onChange={ (e)=>{setRegisterPassword(e.target.value)}} />
                <input type="text" placeholder="이름을 입력하세요." onChange={ (e)=>{setRegisterName(e.target.value)}} />
                <p>{errorMsg}</p>
                <input type="submit" value="회원가입" />
                
            </form>
        </div>
    );
}

export default SignUp;