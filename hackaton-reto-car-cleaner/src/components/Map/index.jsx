import React, {useState} from "react"
import './style.css'
import ReactMapGL from 'react-map-gl';

const MapComponent = () => {
    const [viewport, setViewport] = useState(
        {
            width: 400,
            height: 400,
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 8
        }
    )

    return (
        <ReactMapGL
            {...viewport}
            onViewportChange={(viewport)=> setViewport(viewport)}
            mapboxApiAccessToken={"pk.eyJ1Ijoid2FzaHdhc2hsYWJvcmF0b3JpYSIsImEiOiJjazM5Ynk0dzIwMGFqM2NzMXZ1NGdoNGpxIn0.FjvmSMjNHJ7nTPNqmZWcBw"}
        />     

    )
  }

  export default MapComponent
