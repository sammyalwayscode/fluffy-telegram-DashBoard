import React from 'react'
import './DashHeader.css'
import 'antd/dist/antd.css'
import { Button } from 'antd'
import Logo from './estLogoC.png'

function DashHeader() {
  return (
    <div className='MainHeaderDivDash'>
      <div className='SubHeaderdivDash'>
        <img src={Logo} alt='DashLogo' className='DashLogoDiv' />
        <Button >Log Out</Button>
      </div>
    </div>
  )
}

export default DashHeader
