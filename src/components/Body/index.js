import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="bodyContainer">
          {showLeftNavbar ? (
            <div
              style={{
                marginTop: '30px',
                backgroundColor: '#e2e8f0',
                width: '32%',
              }}
            >
              <h1 className="header">Left Navbar Menu</h1>
              <ul
                className="list-items"
                style={{listStyle: 'none', textAlign: 'center'}}
              >
                <li className="item">Item 1</li>
                <li className="item">Item 2</li>
                <li className="item">Item 3</li>
                <li className="item">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div
              style={{
                marginTop: '30px',
                width: '32%',
                padding: '20px',
              }}
            >
              <h1 className="header">Content</h1>
              <p className="content-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div
              style={{
                marginTop: '30px',

                backgroundColor: '#e2e8f0',
                width: '32%',
                padding: '20px',
              }}
            >
              <h1 className="header">Right Navbar</h1>
              <div className="box-container">
                <p className="box1">Ad 1</p>
                <p className="box1">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
