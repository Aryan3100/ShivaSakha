import React, { useContext } from 'react'
import './main.css'
import { BiCompass, BiSend, BiUser } from 'react-icons/bi'
import { GiBull } from 'react-icons/gi'
import im from '../assets/3.png'
import { Context } from '../Context'
import Loader from './Loader'
const Main = () => {

   const {prevPromt,setPrevPromt,onSent,setRecentPromt,recentPrompt,
    showResult,loading,resultData,input,setInput} = useContext(Context)
  return (
    <>
      <div className='main'>
        <div className='nav'>
          <p>ShivaSakha</p>
          <BiUser  />
        </div>
        <div className="main-container">
           
           {!showResult? <>
            <div className='greet'>
            <p><span>Namasta Dosto</span></p>
            <p>Ma ap ki kese shayta kar sakta hu</p>
          </div>
           </>:<div className='result'>
                 <div className="result-title">
                 <p>{recentPrompt}</p>
                  </div> 
                 <div className="result-data">
                  <img src={im} />
                  {loading ? <Loader></Loader>:
                  <p dangerouslySetInnerHTML={{__html:resultData}}> </p>
                  }
                 </div>
            </div>
           

            }

          

          <div className='min-center'>
            <div className='search-box'  >
              <input  onChange={(e)=>setInput(e.target.value)} value={input} />
              <div>
              <BiSend type='sumbit' onClick={()=> onSent()} ></BiSend>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Main