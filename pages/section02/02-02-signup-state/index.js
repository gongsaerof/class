import { useState } from "react";

export default ddd = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onClickSignUp = () =>{
        if(email.includes("@") === faulse){
            return alert('이메일을 잘 입력해주세요.')
        }
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    
    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail}/>
      비밀번호: <input type="password" onChange={onChangePassword}/>
      <button onClick={onClickSignUp}></button>
    </div>
  );
};
