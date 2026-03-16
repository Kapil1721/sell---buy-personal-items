import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

function Map() {
    const position = [34.852619,-82.394012];

    function ChangeView({ center, zoom }) {
        const map = useMap();
        map.setView(center, zoom);
        return null;
    }
    return (
        <div className='h-100'>

            <MapContainer center={position} zoom={4} scrollWheelZoom={false} style={{ minHeight: '700px', width: '100%' }}>
                <ChangeView center={position} zoom={6} />
                <TileLayer
                    url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    // maxZoom={19}
                    // tileSize={512}
                    // zoomOffset={-5}
                    language='de' // Language code for German
                />
                <Marker position={position}>
                    <Popup>
                        {/* A pretty CSS3 popup. <br /> Easily customizable. */}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map