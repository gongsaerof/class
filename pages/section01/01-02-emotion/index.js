import {MyEmail} from '../../../styles/01-02-emotion';

export default function EmotionPage() {
    return(
        <div>
            <MyEmail>이메일:</MyEmail>
            <input type="text" placeholder="이메일을 입력해주세요."/>
            <button title="gg">클릭하세용</button>
            <img src="/next.svg" style={{width:'100px'}}/>
        </div>
    )
}