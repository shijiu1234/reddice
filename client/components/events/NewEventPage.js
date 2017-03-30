import React from 'react';
import EventForm from './EventForm';

class NewEventPage
    extends React.Component {
    render() {
        return (
            <div>
                <EventForm />
            </div>
        )
    }
}

NewEventPage.propTyes = {}

export default NewEventPage;