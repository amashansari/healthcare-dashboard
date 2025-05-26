import NotificationIcon from '../../assets/Icon/notification-icon.svg'
import PlusIcon from '../../assets/Icon/plus-icon.svg'
import HamIcon from '../../assets/Icon/hamburger-icon.svg'
import AvatarIcon from '../../assets/Icon/avatar-icon.svg'
import SearchIcon from '../../assets/Icon/search-icon.svg'

import DahsboardIcon from '../../assets/Icon/dashboard-icon.svg'
import HistoryIcon from '../../assets/Icon/arrow-up-down-icon.svg'
import CalenderIcon from '../../assets/Icon/calender-icon.svg'
import AppointmentsIcon from '../../assets/Icon/plus-square-icon.svg'
import StatisticsIcon from '../../assets/Icon/statistics-icon.svg'
import ChatIcon from '../../assets/Icon/chat-icon.svg'
import PhoneIcon from '../../assets/Icon/phone-icon.svg'
import SettingIcon from '../../assets/Icon/settings-icon.svg'
import { useState } from 'react'

const Header = () => {

  const [isToggle, setIsToggle] = useState(false)
  const handleToggle = () => {
    setIsToggle(!isToggle)
  }

  return (
    <>
      <div className="main-header">
        <div className="healthcare-logo">
          <div className="healthcare-logo-text">
            <span className="health">Health</span><span className="care">care.</span>
          </div>
        </div>
        <div className="sidebar-mid-right">
          <div className="healthcare-searchbar">
            <div className="healthcare-searchbar-content">
              <div className='search-bar-icon'>
                <input type="text" placeholder='Search' />
                <div className="search-image">
                  <img src={SearchIcon} alt="" />
                </div>
              </div>

              <div className="healthcare-notification-icon">
                <img src={NotificationIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="healthcare-profile">
            <div className="healthcare-profile-content">
              <div className="healthcare-current-profile desktop">
                <img src={AvatarIcon} alt="" />
              </div>
              <div className="healthcare-add-new-profile desktop">
                <img src={PlusIcon} alt="" />
              </div>
              <div className="healthcare-add-new-profile hamburger" onClick={() => handleToggle()}>
                <img src={HamIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-header">
        <div className="healthcare-logo">
          <span className="health">Health</span><span className="care">care.</span>
        </div>
        <div className="healthcare-add-new-profile">
          <img src={PlusIcon} alt="" />
        </div>
      </div>


      <div className={`main-mobile-sidebar ${isToggle == true ? 'show-sidebar' : ''}`}>
        <div className={`mobile-sidevar `}>
          <div className="mobile-top">
            <div className="healthcare-logo" style={{width: '100%'}}>
              <span className="health">Health</span><span className="care">care.</span>
            </div>
            <div className="healthcare-add-new-profile" onClick={() => handleToggle()}>
              X
            </div>
          </div>
          <div className="sidebar-top">
            <p className="general-text">General</p>
            <div className="sidebar-general">
              <ul>
                <li className='active-sidebar'>
                  <div className="sidebar-icon-text">
                    <div className="sidebar-icon">
                      <img src={DahsboardIcon} alt="" />
                    </div>
                    <div className="sidebar-text">Dashboard</div>
                  </div>
                </li>
                <li>
                  <div className="sidebar-icon-text">
                    <div className="sidebar-icon">
                      <img src={HistoryIcon} alt="" />
                    </div>
                    <div className="sidebar-text">History</div>
                  </div>
                </li>
                <li>
                  <div className="sidebar-icon-text">
                    <div className="sidebar-icon">
                      <img src={CalenderIcon} alt="" />
                    </div>
                    <div className="sidebar-text">Calender</div>
                  </div>
                </li>
                <li>
                  <div className="sidebar-icon-text">
                    <div className="sidebar-icon">
                      <img src={AppointmentsIcon} alt="" />
                    </div>
                    <div className="sidebar-text">Appointments</div>
                  </div>
                </li>
                <li>
                  <div className="sidebar-icon-text">
                    <div className="sidebar-icon">
                      <img src={StatisticsIcon} alt="" />
                    </div>
                    <div className="sidebar-text">Statistics</div>
                  </div>
                </li>
              </ul>
            </div>
            <p className="tools-text">Tools</p>
            <div className="sidebar-tools">
              <ul>
                <li>
                  <div className="sidebar-icon-text">
                    <div className="sidebar-icon">
                      <img src={ChatIcon} alt="" />
                    </div>
                    <div className="sidebar-text">Chat</div>
                  </div>
                </li>
                <li>
                  <div className="sidebar-icon-text">
                    <div className="sidebar-icon">
                      <img src={PhoneIcon} alt="" />
                    </div>
                    <div className="sidebar-text">Support</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-bottom">
            <div className="sidebar-settings">
              <div className="sidebar-icon-text">
                <div className="sidebar-icon">
                  <img src={SettingIcon} alt="" />
                </div>
                <div className="sidebar-text">Setting</div>
              </div>
            </div>
          </div>
          <div className="healthcare-profile" style={{ width: '100%' }}>
            <div className="healthcare-profile-content" style={{ justifyContent: 'center' }}>
              <div className="healthcare-current-profile">
                <img src={AvatarIcon} alt="" />
              </div>
              <div className="healthcare-add-new-profile">
                <img src={PlusIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
