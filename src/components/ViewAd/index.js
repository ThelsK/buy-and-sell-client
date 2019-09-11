import React from "react"
import { connect } from "react-redux"
import { loadAdDetails } from "../../actions/ads"
import ViewAd from "./ViewAd"
import NotFound from "./NotFound"

class ViewAdContainer extends React.Component {
  componentDidMount() {
    const id = parseInt(this.props.match.params.id)
    if (!this.props.ad.id !== id) {
      this.props.loadAdDetails(id)
    }
  }

  render() {
    const id = parseInt(this.props.match.params.id)
    if (this.props.ad.id !== id) {
      return <NotFound />
    }
    return <ViewAd ad={this.props.ad} />
  }
}

const mapStateToProps = state => ({
  ad: state.ad
})

const mapDispatchToProps = {
  loadAdDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAdContainer)