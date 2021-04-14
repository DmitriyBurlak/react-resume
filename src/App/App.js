import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import Header from './containers/Header/Header'
import Page from './containers/Page/Page'
import './App.css'

class App extends Component {
    render() {
        return (
          <Layout>
            <Header />
            <Page />
          </Layout>
        )
    }
}
export default App


