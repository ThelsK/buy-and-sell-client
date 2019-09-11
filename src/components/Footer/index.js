import React from "react"
import { Link } from "react-router-dom"

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div>
          <Link to="/newad">
            Add your own advertisement
          </Link >
        </div>
        <div>
          <Link to="/">
            Return to the overview
          </Link >
        </div>
      </div >
    )
  }
}

export default Footer