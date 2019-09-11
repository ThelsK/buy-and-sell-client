import React from "react"
import { connect } from "react-redux"
import ListAd from "./ListAd"
import NoAds from "./NoAds"

class ListAds extends React.Component {
  render() {
    if (!this.props.ads.length) {
      return <NoAds />
    }
    return (
      <div className="ListAds">
        {this.props.ads.map(ad =>
          <ListAd key={ad.id} ad={ad} />)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ads: state.ads
})

export default connect(mapStateToProps)(ListAds)