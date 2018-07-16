import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href="/auth/google">Login with goolge</a>
                    </li>
                );
            default:
                return (
                    <li>
                        <a href="/api/logout">Logout</a>
                    </li>
                );
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <div className="row">
                        <div className="col s12">
                            <a className="left brand-logo">Emaily</a>
                            <ul className="right">
                                {this.renderContent()}
                                {/* <li>
                                    <a>Login with Google</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

// function mapStateToProps(state) {
//     return { auth: state.auth };
// }

// es6 refactor
function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
