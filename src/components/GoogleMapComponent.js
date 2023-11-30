import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMapComponent = ({ lat, lng }) => {
    const createMapOptions = (maps) => {
        // Customize the map options as needed
        return {
            disableDefaultUI: false, // Disable default map UI
            mapTypeControl: true, // Allow map type selection
            streetViewControl: true, // Enable street view
            zoomControl: true, // Enable zoom control
        };
    };

    const handleApiLoaded = (map, maps) => {
        // Create the marker at the specified location
        new maps.Marker({
            position: { lat, lng },
            map: map,
        });
    };

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAzOo8l1104UX9SkEIIwXOYBglrdnVhwUM' }}
                defaultCenter={{ lat, lng }}
                defaultZoom={11}
                options={createMapOptions}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            />
        </div>
    );
};

export default GoogleMapComponent;

/*
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMapComponent = ({ lat, lng }) => {
    const defaultProps = {
        center: {
            lat: lat,
            lng: lng
        },
        zoom: 11
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAzOo8l1104UX9SkEIIwXOYBglrdnVhwUM' }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <div lat={lat} lng={lng}></div>
            </GoogleMapReact>
        </div>
    );
}

export default GoogleMapComponent;*/