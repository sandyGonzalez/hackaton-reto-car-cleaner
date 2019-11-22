import React, {useState} from "react"
import './style.css'
import ReactMapGL from 'react-map-gl';

import dotenv from "dotenv"
 dotenv.config()

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
            mapboxApiAccessToken={process.env.REACT_APP_MAP_KEY}
        />     

    )
  }

  export default MapComponent
