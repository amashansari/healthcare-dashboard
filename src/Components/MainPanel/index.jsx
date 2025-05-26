import React from 'react'
import Sidebar from '../Sidebar'
import AnatomySection from '../AnatomySection'
import Calender from '../Calender'

const MainPanel = () => {
  return (
    <>
      <div className="main-panel">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="height-panel">
          <div className="dashboard-overview">
            <AnatomySection />
          </div>
          <div className="health-status-card">
            <Calender />
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPanel
