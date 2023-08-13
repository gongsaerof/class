import axios from "axios"

export default function RestGetPage(){
 
    function onClickAsync(){
      const result = axios.get('https://koreanjson.com/posts/1');
        console.log(result);
    }
    function onClickSync(){

    }
 
    return(
        <div>
            <button onClick={onClickAsync}>비동기</button>
            <button onClick={onClickSync}>동기</button>
        </div>
    )
}