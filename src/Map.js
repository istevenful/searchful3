import React, { useRef, useEffect } from "react"
import mapboxgl from "mapbox-gl"
import ReactMapGL from "react-map-gl";
import "./Map.css"
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
mapboxgl.accessToken = "pk.eyJ1Ijoic3RldmVudGFuZ2VuMWUiLCJhIjoiY2xsdmxkOGU2MGxqcTNkb2JkOXloNzg5ZiJ9.OfTRkBDdiCnSOsyNKCDz7g";
mapboxgl.workerClass = MapboxWorker; // Wire up loaded worker to be used instead of the default

const geojson = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-122.414, 37.776]
            },
            properties: {
                title: 'San Francisco, CA',
                description: ''
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-122.494393,40.581530]
            },
            properties: {
                title: 'Sacramento, CA',
                description: ''
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-123.341737,43.216492]
            },
            properties: {
                title: 'Roseburg, OR',
                description: 'Upcoming'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-118.242653,34.054843]
            },
            properties: {
                title: 'Los Angeles, CA',
                description: ''
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-87.629776,41.878146]
            },
            properties: {
                title: 'Chicago, IL',
                description: ''
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-96.796984,32.776625]
            },
            properties: {
                title: 'Dallas, TX',
                description: ''
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-122.332851,47.606083]
            },
            properties: {
                title: 'Seattle, WA',
                description: 'Upcoming'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-115.139209,36.171421]
            },
            properties: {
                title: 'Las Vegas, NV',
                description: ''
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-116.202326,43.614967]
            },
            properties: {
                title: 'Boise, ID',
                description: ''
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-97.330055,37.687151]
            },
            properties: {
                title: 'Wichita, KS',
                description: ''
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-84.387684,33.748721]
            },
            properties: {
                title: 'Atlanta, GA',
                description: ''
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-82.394112,34.852628]
            },
            properties: {
                title: 'Greenville, SC',
                description: ''
            }
        },
    ]
};

export const Map = () => {
    const mapContainer = useRef()

    // this is where all of our map logic is going to live
    // adding the empty dependency array ensures that the map
    // is only created once
    useEffect(() => {
        // create the map and configure it
        // check out the API reference for more options
        // https://docs.mapbox.com/mapbox-gl-js/api/map/
        const map = new mapboxgl.Map({
            // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
            style: 'mapbox://styles/steventangen1e/cllz6wu0m009y01qz0814f21j',
            center: [-100.579492,37.828316],
            zoom: 3.5,
            pitch: 10,
            bearing: 0,
            container: 'map',
            antialias: true,
            attributionControl: false,
        });

        map.on('style.load', () => {
            // Insert the layer beneath any symbol layer.
            const layers = map.getStyle().layers;
            const labelLayerId = layers.find(
                (layer) => layer.type === 'symbol' && layer.layout['text-field']
            ).id;

            // The 'building' layer in the Mapbox Streets
            // vector tileset contains building height data
            // from OpenStreetMap.
            map.addLayer(
                {
                    'id': 'add-3d-buildings',
                    'source': 'composite',
                    'source-layer': 'building',
                    'filter': ['==', 'extrude', 'true'],
                    'type': 'fill-extrusion',
                    'minzoom': 15,
                    'paint': {
                        'fill-extrusion-color': '#aaa',

                        // Use an 'interpolate' expression to
                        // add a smooth transition effect to
                        // the buildings as the user zooms in.
                        'fill-extrusion-height': [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            15,
                            0,
                            15.05,
                            ['get', 'height']
                        ],
                        'fill-extrusion-base': [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            15,
                            0,
                            15.05,
                            ['get', 'min_height']
                        ],
                        'fill-extrusion-opacity': 0.6
                    }
                },
                labelLayerId
            );
        });
        for (const feature of geojson.features) {
            // create a HTML element for each feature
            const el = document.createElement('div');
            el.className = 'marker';

            const cityName = document.createElement('div');
            cityName.className = 'markerText';
            cityName.innerHTML = feature.properties.title;
            el.appendChild(cityName);
            if (feature.properties.description != ""){
                const citySubText = document.createElement('div');
                citySubText.className = 'markerSubText';
                citySubText.innerHTML = feature.properties.description;
                el.appendChild(citySubText);
            }
            // make a marker for each feature and add to the map
            new mapboxgl.Marker(el)
                .setLngLat(feature.geometry.coordinates)
                .setPopup(
                    new mapboxgl.Popup({ offset: 25 }) // add popups
                        .setHTML(
                            `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
                        )
                )
                .addTo(map);
        }

    }, [])

    return (
        <div
            id="map"
            ref={mapContainer}
            style={{ width: "100%", height: "500px" }}
        />
    )
}