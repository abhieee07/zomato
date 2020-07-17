import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"

const Googlemap = (props) => {
    return (
        <GoogleMap defaultZoom={10} defaultCenter={{ lat: 12.9951, lng: 74.8094 }} >
        </GoogleMap>
    )
}
export const WrappedMap = withScriptjs(withGoogleMap(Googlemap))
