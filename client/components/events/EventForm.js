import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import {connect} from 'react-redux';
import {createEvent} from '../../actions/eventActions';

class EventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            errors: {},
            isLoading: false,
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.createEvent(this.state);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {errors, title, isLoading} = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Create New Game Event</h1>

                {errors.form && <div className="alert alert-danger">{errors.form}</div>}

                <TextFieldGroup
                    field="title"
                    value={title}
                    label="Event title"
                    error={errors.title}
                    onChange={this.onChange}
                />

                <button type="submit" disabled={isLoading} className="btn btn-primary">Create</button>

            </form>
        )
    }
}

EventForm.propTypes={
    createEvent: React.PropTypes.func.isRequired,
}

export default connect(null, {createEvent})(EventForm);