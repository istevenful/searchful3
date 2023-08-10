import React from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import "./Search.css"
function Search() {
    return (
        <>
            <div className='Search-Page'>


                <div className='Banner'>
                    <div className='Banner-Context'>
                        <img src='SearchfulLogo.png' alt='Logo' className='Banner-Logo'></img>
                        <div className='Banner-Heading'>Start your Search</div>
                        <div className='Banner-Text'>In the fields below type the patient’s location and their diagnosis</div>
                    </div>
                    <img src='BannerAnimation.png' alt="Banner Circle" className='BannerCircle'></img>
                </div>

                <div className='Search-Area'>
                    <div className='Search-Fields-Home'>
                        <div className='Location-Search'>
                            <div className='Location-Text'>
                                <img className='Location-Logo' alt='Globe' src='Location.png'></img>

                                Location
                            </div>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={listOfCities}
                                sx={{ width: '100%' }}
                                renderInput={(params) => <TextField {...params} label="" placeholder="lol" />}
                            />
                        </div>
                        <div className='Diagnosis-Search'>
                            <div className='Diagnosis-Text'>
                                <img className='Diagnosis-Logo' alt='Globe' src='Location.png'></img>

                                Diagnosis
                            </div>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={listOfCities}
                                sx={{ width: '100%' }}
                                renderInput={(params) => <TextField {...params} label="" placeholder="lol" />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


const listOfCities = [
    { label: "City 1"}
]

export default Search