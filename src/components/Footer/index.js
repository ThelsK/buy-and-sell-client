import React from "react"
import { Link } from "react-router-dom"

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <Link className="FooterLink" to="/newad">
          Add your own advertisement
          </Link >
        <Link className="FooterLink" to="/">
          Return to the overview
          </Link >
      </div >
    )
  }
}

export default Footer