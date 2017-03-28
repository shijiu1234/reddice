import React from 'react';
import SignupForm from './SignupForm'
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {userSignupRequest} from '../../actions/signupActions';
import {addFlashMessage} from '../../actions/flashMessages';

class SignupPage extends React.Component {
    render() {
        const {userSignupRequest, addFlashMessage} = this.props;
        return (
            <div className="row">
                <div className="col-xs-4 col-xs-offset-4">
                    <SignupForm userSignupRequest={userSignupRequest}
                                addFlashMessage={addFlashMessage}/>
                </div>
            </div>
        )
    }
}

SignupPage.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired,
};


export default connect(
    null,
    {userSignupRequest, addFlashMessage}
)(withRouter(SignupForm));