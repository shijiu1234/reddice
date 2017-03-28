import React from 'react';
import SignupForm from './SignupForm'
import {connect} from 'react-redux';
import {userSignupRequest} from '../../actions/signupActions';
import {withRouter} from 'react-router';


class SignupPage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-4 col-xs-offset-4">
                    <SignupForm userSignupRequest="{ this.props.userSignupRequest}"/>
                </div>
            </div>
        )
    }
}

SignupPage.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
};


export default connect(
    null,
    {userSignupRequest}
)(withRouter(SignupForm));