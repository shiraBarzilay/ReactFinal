import React from 'react'
import GoogleMaps from './GoogleMaps'
export default function EditPosition(){

    return(
        <div>
            <script async
                src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
            </script>
            <a href='https://goo.gl/maps/UoBnPc5mWZettYv47'>לחץ כאן</a>
            {/* https://www.google.com/maps/@31.4062525,35.0818155,7z */}
            <GoogleMaps/>

        </div>
    )
}

