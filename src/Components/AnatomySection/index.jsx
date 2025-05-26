import AnatomyBody from '../../assets/Image/human-body.png'
import Rotate from '../../assets/Image/rotate.png'
import ZoomIcon from '../../assets/Icon/magnifying-glass.svg'
import LungsIcon from '../../assets/Icon/lungs-icon.svg'
import TeethIcon from '../../assets/Icon/tooth-icon.svg'
import BoneIcon from '../../assets/Icon/bone-icon.svg'

const AnatomySection = () => {
  return (
    <>
      <div className="main-anatomy-section">
        <div className="anatomy-title">
          <div className="anatomy-text">Dashboard</div>
          <div className="date-filter">This Week</div>
        </div>
        <div className="anatomy-section">
          <div className="anatomy-body-left">
            <div className="anatomy-body">
              <img src={AnatomyBody} alt="" />
            </div>
            <div className="healthy-heart">
              ❤️  Healthy Heart
            </div>
            <div className="healthy-leg">
              🦵  Healthy Leg
            </div>
            <div className="rotate">
              <img src={Rotate} alt="" />
            </div>
            <div className="zoom-glass">
              <img src={ZoomIcon} alt="" />
            </div>
          </div>
          <div className="anatomy-body-right">
            <div className="body-part">
              <div className="body-part-top">
                <div className="part-image">
                  <img src={LungsIcon} alt="" />
                </div>
                <div className="part-name">Lungs</div>
              </div>
              <div className="body-part-mid">
                <div className="date">Date: 26 Oct 2025</div>
              </div>
              <div className="body-part-bottom">
                <div class="progress-bar-red"></div>
              </div>
            </div>
            <div className="body-part">
              <div className="body-part-top">
                <div className="part-image">
                  <img src={TeethIcon} alt="" />
                </div>
                <div className="part-name">Teeth</div>
              </div>
              <div className="body-part-mid">
                <div className="date">Date: 26 Oct 2025</div>
              </div>
              <div className="body-part-bottom">
                <div class="progress-bar-cyan"></div>
              </div>
            </div>
            <div className="body-part" style={{ marginBottom: 0 }}>
              <div className="body-part-top">
                <div className="part-image">
                  <img src={BoneIcon} alt="" />
                </div>
                <div className="part-name">Bone</div>
              </div>
              <div className="body-part-mid">
                <div className="date">Date: 26 Oct 2025</div>
              </div>
              <div className="body-part-bottom">
                <div class="progress-bar-orange"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="anatomy-activity">
          <div className="activity-top">
            <div className="activty-title">
              <div className="active-title-left">Activity</div>
              <div className="active-title-right">3 appointment on this week</div>
            </div>
          </div>
          <div className="activity-bottom">
            <div className="bottom-chart">
              <div className="bottom-chart-1">
                <div className="active-bars-1"></div>
                <div className="active-bars-2"></div>
                <div className="bar-bottom">
                  <div className="active-bars-3"></div>
                </div>
                <div className="bar-top">
                  <div className="active-bars-4"></div>
                </div>
              </div>
              <div className="bottom-chart-1">
                <div className="active-bars-2"></div>
                <div className="active-bars-1"></div>
                <div className="bar-top">
                  <div className="active-bars-4"></div>
                </div>
                <div className="bar-bottom">
                  <div className="active-bars-3"></div>
                </div>
              </div>
              <div className="bottom-chart-1">
                <div className="active-bars-1"></div>
                <div className="bar-top">
                  <div className="active-bars-4"></div>
                </div>
                <div className="active-bars-2"></div>
                <div className="bar-bottom">
                  <div className="active-bars-3"></div>
                </div>
              </div>
              <div className="bottom-chart-1">
                <div className="active-bars-1"></div>
                <div className="active-bars-2"></div>
                <div className="bar-bottom">
                  <div className="active-bars-3"></div>
                </div>
                <div className="bar-top">
                  <div className="active-bars-4"></div>
                </div>
              </div>
              <div className="bottom-chart-1">
                <div className="active-bars-1"></div>
                <div className="active-bars-2"></div>
                <div className="bar-bottom">
                  <div className="active-bars-3"></div>
                </div>
                <div className="bar-top">
                  <div className="active-bars-4"></div>
                </div>
              </div>
              <div className="bottom-chart-1">
                <div className="active-bars-1"></div>
                <div className="active-bars-2"></div>
                <div className="bar-bottom">
                  <div className="active-bars-3"></div>
                </div>
                <div className="bar-top">
                  <div className="active-bars-4"></div>
                </div>
              </div>
              <div className="bottom-chart-1">
                <div className="active-bars-1"></div>
                <div className="active-bars-2"></div>
                <div className="bar-bottom">
                  <div className="active-bars-3"></div>
                </div>
                <div className="bar-top">
                  <div className="active-bars-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AnatomySection
