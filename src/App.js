import React from "react"
import { Route } from "react-router-dom"
import Title from "./components/Title"
import ListAds from "./components/ListAds"
import ViewAd from "./components/ViewAd"
import CreateAd from "./components/CreateAd"
import Footer from "./components/Footer"

class App extends React.Component {
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

export default App