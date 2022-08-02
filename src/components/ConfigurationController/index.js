import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="container">
          <div>
            <h1 className="layout-heading">Layout</h1>
            <div>
              <div style={{margin: '10px'}}>
                <input
                  checked={showContent}
                  onChange={onChangeContent}
                  type="checkbox"
                  id="content"
                />
                <label htmlFor="content">Content</label>
              </div>
              <div style={{margin: '10px'}}>
                <input
                  checked={showLeftNavbar}
                  onChange={onChangeLeftNavbar}
                  type="checkbox"
                  id="leftNavbar"
                />
                <label htmlFor="leftNavbar">Left Navbar</label>
              </div>
              <div style={{margin: '10px'}}>
                <input
                  checked={showRightNavbar}
                  onChange={onChangeRightNavbar}
                  type="checkbox"
                  id="rightNavbar"
                />
                <label htmlFor="rightNavbar">Right Navbar</label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
