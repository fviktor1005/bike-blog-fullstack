import React, {PureComponent} from "react";
import {Navigation} from "./navigation";

class NavigationController extends PureComponent {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        return (
            <div>
                <Navigation toggle={this.toggle} isOpen={this.state.isOpen}/>
            </div>
        );
    }
}

export default NavigationController;
