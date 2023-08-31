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
                coordinates: [-77.032, 38.913]
            },
            properties: {
                title: 'Washington, D.C.',
                description: '1,219 Resources'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-122.414, 37.776]
            },
            properties: {
                title: 'San Francisco, CA',
                description: '1,871 Resources'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-74.006128,40.711978, ]
            },
            properties: {
                title: 'New York, NY',
                description: '3,753 Resources'
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
                description: '2,549 Resources'
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
                description: '5,231 Resources'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-95.369809, 29.760413]
            },
            properties: {
                title: 'Houston, TX',
                description: '2,010 Resources'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-75.165228,39.952536]
            },
            properties: {
                title: 'Philadelphia, PA',
                description: '910 Resources'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-112.074027,33.448343]
            },
            properties: {
                title: 'Phoenix, AZ',
                description: '1,099 Resources'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-98.494583,29.425144]
            },
            properties: {
                title: 'San Antonio, TX',
                description: '1,736 Resources'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-117.161079,32.715629]
            },
            properties: {
                title: 'San Diego, CA',
                description: '2,700 Resources'
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
                description: '2,421 Resources'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-81.655674,30.332105]
            },
            properties: {
                title: 'Jacksonville, FL',
                description: '1981 Resources'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-86.158071,39.768379]
            },
            properties: {
                title: 'Indianapolis, IN',
                description: '1522 Resources'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-80.843115,35.227057]
            },
            properties: {
                title: 'Charlotte, NC',
                description: '1111 Resources'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-104.990254,39.739206]
            },
            properties: {
                title: 'Denver, CO',
                description: '876 Resources'
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
                description: '3255 Resources'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-83.045757,42.331392]
            },
            properties: {
                title: 'Detroit, MI',
                description: '1655 Resources'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-90.049091,35.149690]
            },
            properties: {
                title: 'Memphis, TN',
                description: '2666 Resources'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-97.516473,35.467534]
            },
            properties: {
                title: 'Oklahoma City, OK',
                description: '676 Resources'
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
                description: '5411 Resources'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-106.650435,35.084345]
            },
            properties: {
                title: 'Albuquerque, NM',
                description: '874 Resources'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-93.265007,44.977723]
            },
            properties: {
                title: 'Minneapolis, MN',
                description: '1081 Resources'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-87.906501,43.038817]
            },
            properties: {
                title: 'Milwaukee, WI',
                description: '1950 Resources'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-94.578565,39.099586]
            },
            properties: {
                title: 'Kansas City, MO',
                description: '2311 Resources'
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
                description: '2311 Resources'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-103.231141,44.080233]
            },
            properties: {
                title: 'Rapid City, SD',
                description: '311 Resources'
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
            style: 'mapbox://styles/mapbox/light-v11',
            center: [-98.579492,37.828316],
            zoom: 3.5,
            pitch: 40,
            bearing: 0,
            container: 'map',
            antialias: true
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