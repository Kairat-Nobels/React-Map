// MapCenterChanger.jsx
import { useMap } from 'react-leaflet';

const MapCentered = ({ center }) => {
    const map = useMap();
    map.flyTo(center, map.getZoom());

    return null;
};
