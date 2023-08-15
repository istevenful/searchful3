import React ,{useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import "./Search.css"
import { Link } from 'react-router-dom'

function Search() {

    const [searchData, setSearchData] = useState(["San Francisco, CA", "Osteoporosis"])
    let handleLocationChange = (event, value) => {
        let bufferData = searchData;
        if(value==null){
            bufferData[0] = "San Francisco, CA";
            console.log(bufferData);
            setSearchData(bufferData)
        }
        else{
            bufferData[0] = value.label;
            console.log(bufferData);
            setSearchData(bufferData)
        }
    };
    let handleDiagnosisChange = (event, value) => {
        let bufferData = searchData;
        if(value==null){
            bufferData[1] = "Osteoporosis";
            setSearchData(bufferData)
        }
        else{
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
                        <div className='Banner-Text'>In the fields below type the patient’s location and their diagnosis</div>
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
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={listOfCities}
                                sx={{ width: '100%' }}
                                renderInput={(params) => <TextField {...params} label="" placeholder="San Francisco, CA" />}
                                onChange= {handleLocationChange}
                            />
                        </div>
                        <div className='Diagnosis-Search'>
                            <div className='Diagnosis-Text'>
                                <img className='Diagnosis-Logo' alt='Heart' src='/Diagnosis.png'></img>

                                Diagnosis
                            </div>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={listOfDiagnosis}
                                sx={{ width: '100%' }}
                                renderInput={(params) => <TextField {...params} label="" placeholder="Osteoporosis" />}
                                onChange= {handleDiagnosisChange}
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
                    ><Link to={`/recommendations`}  className="Home-Search-Button" state={{ from: { searchData } }}>Search</Link></Button>
                </div>
                <div className='Discover-Home'>
                    <div className='Discover-Header'>
                        Discover Searchful Cities all across the USA
                    </div>
                    <div className='Discover-Text'>
                        Searchful is available across 24 different cities across the country. We have over 20,000 high quality resources across 82 different categories
                    </div>
                    <div className='Discover-Cities'>
                        <div className='City-Card'>
                            <img className='Chicago' src='/Chicago.jpg' alt='Chicago'>

                            </img>
                            <div className='CityHeader'>
                                <div className='cityName'>
                                Chicago
                                </div>
                                <div className='cityRes'>
                                    5,231 Resources
                                </div>
                            </div>

                        </div>
                        <div className='City-Card'>
                            <img className='GoldenGate' src='/GoldenGate.avif' alt='GGB'>

                            </img>
                            <div className='CityHeader'>
                                <div className='cityName'>
                                San Francisco
                                </div>
                                <div className='cityRes'>
                                    1,871 Resources
                                </div>
                            </div>

                        </div>
                        <div className='City-Card'>
                            <img className='Dallas' src='/Dallas.jpg' alt='Dallas'>

                            </img>
                            <div className='CityHeader'>
                                <div className='cityName'>
                                Dallas
                                </div>
                                <div className='cityRes'>
                                    2,421 Resources
                                </div>
                            </div>
                        </div>
                    </div>
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