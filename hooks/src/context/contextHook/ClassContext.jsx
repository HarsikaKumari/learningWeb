import React, { Component } from 'react';
import { ThemeContext } from "./ContextHook";

class ClassContext extends Component {
    themeStyle(dark) {
        return {
            background: dark ? "#333" : "#CCC",
            color: dark ? "#CCC" : "#333",
            padding: '2rem',
            margin: '2rem'
        }
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {theme => {
                    return <div style={this.themeStyle(theme)}> Class Theme</div>
                }}
            </ThemeContext.Consumer>
        )
    }
}

export default ClassContext