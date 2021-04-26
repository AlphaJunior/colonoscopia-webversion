import React, { useContext } from 'react'
import { Responsive,ResponsiveProvider } from '../contexts/responsiveContext'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'

const TheLayout = () => {

 const responsive = useContext(Responsive);

  return (
    <ResponsiveProvider {...responsive}>
    <div className="c-app c-default-layout">
      <TheSidebar />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
    </ResponsiveProvider>
  )
}

export default TheLayout
