
import React from 'react';

class Location extends React.Component {

    state = {
        latitude: '',
        longitude: '',
    }

    componentDidMount() {
        this.getMyLocation()
    }

    getMyLocation() {
        const location = window.navigator && window.navigator.geolocation

        if (location) {
            location.getCurrentPosition((position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                })
            }, (error) => {
                this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
            })
        }

    }

    render() {
        const { latitude, longitude } = this.state
        console.log('====latitude====', latitude, '===longitude====', longitude);
        return (
            <div>
                <input type="text" value={latitude} />
                <input type="text" value={longitude} />
            </div>
        );
    };
};

export default Location;
