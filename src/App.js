import React from "react"
import { connect } from "react-redux"
import { Route } from "react-router-dom"
import { loadAds } from "./actions/ads"
import Title from "./components/Title"
import ListAds from "./components/ListAds"
import ViewAd from "./components/ViewAd"
import CreateAd from "./components/CreateAd"
import Footer from "./components/Footer"

class App extends React.Component {
  componentDidMount() {
    this.props.loadAds()
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Route exact path="/" component={ListAds} />
        <Route path="/ad/:id" component={ViewAd} />
        <Route exact path="/newad" component={CreateAd} />
        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = {
  loadAds,
}

export default connect(null, mapDispatchToProps)(App)