import DahsboardIcon from '../../assets/Icon/dashboard-icon.svg'
import HistoryIcon from '../../assets/Icon/arrow-up-down-icon.svg'
import CalenderIcon from '../../assets/Icon/calender-icon.svg'
import AppointmentsIcon from '../../assets/Icon/plus-square-icon.svg'
import StatisticsIcon from '../../assets/Icon/statistics-icon.svg'
import ChatIcon from '../../assets/Icon/chat-icon.svg'
import PhoneIcon from '../../assets/Icon/phone-icon.svg'
import SettingIcon from '../../assets/Icon/settings-icon.svg'

const Sidebar = () => {
  return (
    <>
      <div className="main-sidebar">
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
      </div>
    </>
  )
}

export default Sidebar
