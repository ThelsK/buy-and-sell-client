import React from "react"
import { connect } from "react-redux"
import ViewAd from "./ViewAd"
import NotFound from "./NotFound"

class ViewAdContainer extends React.Component {
  render() {
    if (!this.props.ads.length) {
      return <NotFound />
    }
    const ad = this.props.ads.find(ad =>
      parseInt(this.props.match.params.id) === ad.id)
    if (!ad) {
      return <NotFound />
    }
    return <ViewAd ad={ad} />
  }
}

const mapStateToProps = state => ({
  ads: state.ads
})

export default connect(mapStateToProps)(ViewAdContainer)