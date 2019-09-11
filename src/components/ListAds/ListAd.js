import React from "react"
import { Link } from "react-router-dom"

export default function ListAd(props) {
  return (
    <Link className="ListAd" to={`/ad/${props.ad.id}`}>
      <div className="ListAdPictureBox">
        <img
          className="ListAdPicture"
          src={props.ad.picture}
          alt={props.ad.title}
        />
      </div>
      <div className="ListAdTitle">
        {props.ad.title}
      </div>
      <div className="ListAdPrice">
        &euro; {(props.ad.price / 100).toFixed(2)}
      </div>
    </Link>
  )
}