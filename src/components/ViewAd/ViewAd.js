import React from "react"

export default function ViewAd(props) {
  return (
    <div className="ViewAd">
      <div className="ViewAdTitle">
        <h2>{props.ad.title}</h2>
      </div>

      <div className="ViewAdColumns">
        <div className="ViewAdLeft">

          <img
            className="ViewAdPicture"
            src={props.ad.picture}
            alt={props.ad.title}
          />

          <div className="ViewAdDetail">
            <p className="ViewAdDetailName">Price:</p>
            <p className="ViewAdDetailValue">&euro; {(props.ad.price / 100).toFixed(2)}</p>
          </div>

          <div className="ViewAdDetail">
            <p className="ViewAdDetailName">Sold by:</p>
            <p className="ViewAdDetailValue">{props.ad.sellerName}</p>
          </div>

          <div className="ViewAdDetail">
            <p className="ViewAdDetailName">Email:</p>
            <p className="ViewAdDetailValue">{props.ad.sellerEmail}</p>
          </div>

          <div className="ViewAdDetail">
            <p className="ViewAdDetailName">Phone:</p>
            <p className="ViewAdDetailValue">{props.ad.sellerPhone}</p>
          </div>

        </div>
        <div className="ViewAdRight">
          <p className="ViewAdDescription">{props.ad.description}</p>
        </div>
      </div>
    </div>
  )
}