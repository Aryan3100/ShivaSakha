import React, { useState } from 'react'
import './sidebar.css'
import { BsMenuButton } from 'react-icons/bs'
import { BiHistory, BiMenu, BiQuestionMark } from 'react-icons/bi'
import { PiPlus } from 'react-icons/pi'
import { MdMessage } from 'react-icons/md'
import { SlSettings } from 'react-icons/sl'

const Sidebar = () => {

  const [extend, setExtend] = useState(false)

  return (
    <div className='sidebar'>
      <div className='top'>
        <BiMenu onClick={()=>setExtend(pr=>!pr)} className='menu' fontSize='20px'></BiMenu>
        <div className='new-chat'>
          <PiPlus />
          {extend ? <p>New Chat </p> : null}
        </div>
        {extend ? <div className='recent'>
          <p className='recent-title'>Recent</p>
          <div className='recent-entery' >
            <MdMessage></MdMessage>
            <p>What Is react ....</p>
          </div>

        </div>:  null}
      </div>

      <div className='bottom'>
        <div className="bottom-item recent-entery ">
          <BiQuestionMark />
          {extend? <p>Help</p>: null }
        </div>
        <div className="bottom-item recent-entery ">
          <BiHistory></BiHistory>
          {extend ? <p>History</p> : null}
        </div>
        <div className="bottom-item recent-entery ">
          <SlSettings></SlSettings>
         {extend ?  <p>Setting</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar