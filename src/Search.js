import React, { useState, useEffect, useRef } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import "./Search.css"
import { Link } from 'react-router-dom'
import PlacesAutocomplete from 'react-places-autocomplete';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';
import { Map } from './Map';
function Search() {
    const [address, setAddress] = useState("")
    const [searchData, setSearchData] = useState(["San Francisco, CA", "Osteoporosis"])

    let handleLocationChange = (longvalue) => {
        let value = longvalue.slice(0,longvalue.length-5)
        console.log(value)
        let bufferData = searchData;
        if (value == null) {
            bufferData[0] = "San Francisco, CA";
            console.log(bufferData);
            setSearchData(bufferData)
        }
        else {
            bufferData[0] = value;
            console.log(bufferData);
            setSearchData(bufferData)
            setAddress(value)
        }
    };
    let handleDiagnosisChange = (event, value) => {
        let bufferData = searchData;
        if (value == null) {
            bufferData[1] = "Osteoporosis";
            setSearchData(bufferData)
        }
        else {
            bufferData[1] = value.label;
            setSearchData(bufferData)
        }
    };
    return (
        <>
            <div className='Search-Page'>


                <div className='Banner'>
                    <div className='Banner-Context'>
                        <img src='/SearchfulLogo.png' alt='Logo' className='Banner-Logo'></img>
                        <div className='Banner-Heading'>Start your Search</div>
                        <div className='Banner-Text'>In the fields below type the patient’s location and their condition</div>
                    </div>
                    <img src='/BannerAnimation.png' alt="Banner Circle" className='BannerCircle'></img>
                </div>

                <div className='Search-Area'>
                    <div className='Search-Fields-Home'>
                        <div className='Location-Search'>
                            <div className='Location-Text'>
                                <img className='Location-Logo' alt='Globe' src='/Location.png'></img>

                                Location
                            </div>
                            <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleLocationChange} searchOptions={{ types: ['neighborhood', 'locality'], componentRestrictions: { country: ['us'] } }}>
                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                    <div className='google-container'>
                                        <input {...getInputProps({ placeholder: "Type address" })} className="googleAuto" />
                                        {suggestions.length != 0 ?
                                            <div className='suggestion-container'>
                                                {suggestions.map((suggestion) => {
                                                    const style = {
                                                        backgroundColor: suggestion.active ? "#F5F5F5" : "#fff",
                                                        paddingLeft: "20px",
                                                        paddingTop: "7px",
                                                        paddingBottom: "7px",
                                                        fontSize: "1rem"
                                                    }
                                                    return (
                                                        <div>
                                                            <div {...getSuggestionItemProps(suggestion, { style })}>
                                                                {suggestion.description.slice(0,suggestion.description.length-5)}
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            :
                                            <>
                                            </>


                                        }

                                    </div>
                                )}

                            </PlacesAutocomplete>
                        </div>
                        <div className='Diagnosis-Search'>
                            <div className='Diagnosis-Text'>
                                <img className='Diagnosis-Logo' alt='Heart' src='/Diagnosis.png'></img>

                                Condition
                            </div>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={listOfDiagnosis}
                                sx={{ width: '100%' }}
                                renderInput={(params) => <TextField {...params} label="" placeholder="Osteoporosis" />}
                                onChange={handleDiagnosisChange}
                            />
                        </div>
                    </div>
                    <Button variant="contained"
                        sx={{
                            width: '100%',
                            height: '30%',
                            backgroundColor: "#FF756D",
                            ':hover': {
                                bgcolor: '#FF5C53', // theme.palette.primary.main
                                color: 'white',
                            },

                        }}
                    ><Link to={`/recommendations`} className="Home-Search-Button" state={{ from: { searchData } }}>Generate</Link></Button>
                </div>
                <div className='Discover-Home' onClick={() => { console.log(searchData) }}>
                    <div className='Discover-Header'>
                        Discover Searchful Cities all across the USA
                    </div>
                    <div className='Discover-Text'>
                        Searchful is available across 24 different cities across the country. We have over 20,000 high quality resources across 82 different categories
                    </div>
                    <Map/>
                </div>
                <div className='spacer-footer'>

                </div>
            </div>
        </>
    )
}


const listOfCities = [
    { label: "Atlanta, GA" },
    { label: "Brooklyn, NY" },
    { label: "Chicago Downtown, IL" },
    { label: "Dallas, TX" },
    { label: "Manhattan, NY" },
    { label: "San Francisco, CA" },
]
const listOfDiagnosis = [
    { label: "Fatty Liver Disease" },
    { label: "Kidney Stones" },
    { label: "Osteoporosis" },
    { label: "Sleep Apnea" },
    { label: "Type II Diabetes" },
]
export default Search