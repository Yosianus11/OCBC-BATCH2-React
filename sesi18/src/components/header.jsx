import React, { Component } from "react";


class Header extends Component {
    constructor() {
        // initillize super in costructor first
        super()
        this.state = {
            name: "FSD OCBC Batch ke-2!"
        }
    }
    render() {
        return (
            <h3>
               Hello kelas {this.state.name}
            </h3>
        )
    }
}

export default Header