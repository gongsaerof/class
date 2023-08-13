import { useState } from "react";

export default function dd() {

    const zzz = () => {
        // const count_num = ;
        // console.log(count_num);
        const aaa = Number(document.getElementById("count_num").innerText) + 1;

        document.getElementById("count_num").innerText = aaa;
    }

    const [a, seta] = useState(0);

    return(
        <>
            <div id="count_num">0</div>
            <button onClick={zzz}>click</button>
        </>
    )
}