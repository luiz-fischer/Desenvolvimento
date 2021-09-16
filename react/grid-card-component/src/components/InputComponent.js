import React, { useState } from 'react';


const InputComponent = () => {

    const [inputText, setTnputText] = useState("");
    const [historyList, setHistoryList] = useState([]);

    return <>
        <input onChange={(e) => {
            setTnputText(e.target.value)
            setHistoryList([...historyList, e.target.value]);
        }} />
        {inputText}<br/>
        <hr/>
        <ul>
            {historyList.map((h) => {
                return <li key="{h}">{h}</li>;
            })}
        </ul> 
    </>
}

export default InputComponent;