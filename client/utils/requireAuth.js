import React from 'react';
import {connect} from 'react-redux';
import {addFlashMessage} from '../actions/flashMessages';
import {withRouter} from 'react-router';


export default function (ComposedComponent) {

    class Authenticate extends React.Component {
        componentWillMount(){
            if(!this.props.isAuthenticated){
                this.props.addFlashMessage({
                    type: 'error',
                    text: 'You need to login to access this page'
                });
                this.props.history.push('/login');
            }
        }

        componentWillUpdate(nextProps){
            if(!nextProps.isAuthenticated){
                this.props.history.push('/login');
            }
        }

        render() {
            return (
                <ComposedComponent {...this.props} />
            )
        }
    }

    Authenticate.propTyes = {
        isAuthenticated: React.PropTypes.bool.isRequired,
        addFlashMessage: React.PropTypes.func.isRequired,
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.auth.isAuthenticated,
        }
    }

    return connect(mapStateToProps, {addFlashMessage})(withRouter(Authenticate));
}
