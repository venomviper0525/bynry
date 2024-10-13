import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
//import 'leaflet/dist/leaflet.css'
import { Profile } from '../types'
import L from 'leaflet'

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

interface MapProps {
  profile: Profile | null
}

const mapContainerStyle = {
  width: '100%',
  height: '400px'
}

export default function Map({ profile }: MapProps) {
  if (!profile) return null

  return (
    <MapContainer center={[profile.location.lat, profile.location.lng]} zoom={13} style={mapContainerStyle}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[profile.location.lat, profile.location.lng]}>
        <Popup>
          {profile.name}<br />
          {profile.description}
        </Popup>
      </Marker>
    </MapContainer>
  )
}