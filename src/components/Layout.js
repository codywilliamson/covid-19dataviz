import React, { Component } from 'react'
import Nav from './Nav'
// import Footer from './Footer'
import '../sass/site.scss'

export default class Layout extends Component {
    render() {
        return(
            <div className="appWrapper">
                <Nav />
                {this.props.children}
            </div>
        )
    }
}