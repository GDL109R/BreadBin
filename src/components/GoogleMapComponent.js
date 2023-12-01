import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMapComponent = ({ lat, lng }) => {
    const createMapOptions = (maps) => {
        // Customize the map options as needed
        return {
            disableDefaultUI: false,
            mapTypeControl: true,
            streetViewControl: false,
            zoomControl: true,
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
