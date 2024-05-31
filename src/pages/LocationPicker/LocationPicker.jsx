import React, { useState } from 'react';
import MapComponent from '../../components/MapComponent/MapComponent'

const LocationPicker = () => {
    const [lat, setLat] = useState(42.869300018222276);
    const [lng, setLng] = useState(74.60364208844456);
    console.log(lat, '\n', lng);
    const handleLocationChange = (newLat, newLng) => {
        setLat(Number(newLat));
        setLng(Number(newLng));
    };

    return (
        <div>
            <label>
                Latitude:
                <input
                    type="number"
                    value={lat}
                    onChange={(e) => handleLocationChange(e.target.value, lng)}
                />
            </label>
            <label>
                Longitude:
                <input
                    type="number"
                    value={lng}
                    onChange={(e) => handleLocationChange(lat, e.target.value)}
                />
            </label>
            <MapComponent lat={lat} lng={lng} onLocationChange={handleLocationChange} />
        </div>
    );
};

export default LocationPicker;
