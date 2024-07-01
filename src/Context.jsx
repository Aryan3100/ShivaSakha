import { createContext, useState } from "react";
import run from "./Config";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input , setInput] = useState('');
    const [recentPrompt , setRecentPromt] = useState('');
    const [prevPromt ,setPrevPromt ] = useState([]);
    const [showResult , setShowR] = useState(false);
    const [loading , setLoading] = useState(false);
    const [resultData , setResultData] = useState('');

 const onSent = async(prompt) => {
    setResultData('')
    setLoading(true)
    setShowR(true)
    setRecentPromt(input)
 const response = await run(input)

 let responseArray = response.split('**');
 let newArr
 for(let i=0;i<responseArray.length;i++){
    if(i === 0 || i%2 !== 1){
        newArr += responseArray[i];
    }
    else{
        newArr += "<b>"+responseArray[i]+"</b>"; 
    }
 }
 let newArr2 = newArr.split('*').join('</br>');
 setResultData(newArr2) 
    setLoading(false)
    setInput('')
 };


    const contextValue ={
           prevPromt,setPrevPromt,onSent,setRecentPromt,recentPrompt,
           showResult,loading,resultData,input,setInput
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider