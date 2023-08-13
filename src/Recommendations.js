import React, { useEffect, useState } from 'react'
import { useLocation, } from 'react-router-dom';
import "./Recommendations.css"
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
function Recommendations() {
    console.log(useLocation())
    const [location, setLocation] = useState(useLocation().state.from.searchData[0]);
    const [diagnosis, setDiagnosis] = useState(useLocation().state.from.searchData[1]);
    const [currentFilters, setCurrentFilters] = useState(["Pharmacy", "General Physician"])

    const [searchData, setSearchData] = useState([useLocation().state.from.searchData[0], useLocation().state.from.searchData[1]])
    let handleLocationChange = (event, value) => {
        let bufferData = searchData;
        if (value == null) {
            bufferData[0] = "San Francisco, CA";
            console.log(bufferData);
            setSearchData(bufferData)
        }
        else {
            bufferData[0] = value.label;
            console.log(bufferData);
            setSearchData(bufferData)
        }
    };
    let handleDiagnosisChange = (event, value) => {
        let bufferData = searchData;
        console.log(value)
        if (value == null) {
            bufferData[1] = "Migraine";
            setSearchData(bufferData)
        }
        else {

            bufferData[1] = value.label;
            setSearchData(bufferData)
        }
    };
    let handleLDChange = () => {
        console.log(searchData)
        setLocation(searchData[0]);
        setDiagnosis(searchData[1]);
    }
    const [filterItems, setFilterItems] = useState(
        [
            {
                Category: "Pharmacy",
                Locations: [
                    {
                        Name: "Walgreens Pharmacy",
                        FullName: `Walgreens Pharmacy, ${location.substring(0, location.length - 4)} West Street Location`,
                        Distance: "3.36 miles",
                        Address: `500 University Avenue, ${location} 60609`,
                        Phone: "(916) 830-2000",
                        Website: "https://www.walgreens.com/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        FaxNumber: "(916) 830-2001"
                    },
                    {
                        Name: "Lucky Pharmacy",
                        FullName: `Lucky Pharmacy, ${location.substring(0, location.length - 4)} Van Buren Area`,
                        Distance: "4.12 miles",
                        Address: `310 S Michigan Ave, ${location} 60604`,
                        Phone: "(916) 830-2000",
                        Website: "https://luckysupermarkets.com/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        FaxNumber: "(916) 830-2001"
                    },
                    {
                        Name: "CVS Pharmacy",
                        FullName: `CVS Pharmacy, ${location.substring(0, location.length - 4)} Daley Park`,
                        Distance: "4.87 miles",
                        Address: `310 S Michigan Ave, ${location} 60604`,
                        Phone: "(916) 830-2000",
                        Website: "https://www.cvs.com/pharmacy/v2/#/pharmacy",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        FaxNumber: "(916) 830-2001"
                    },
                ]
            },
            {
                Category: "General Physician",
                Locations: [
                    {
                        Name: `${location.substring(0, location.length - 4)} Clinic for ${diagnosis}s`,
                        FullName: `${location.substring(0, location.length - 4)} ${diagnosis} Center and Research Institute`,
                        Distance: "3.90 miles",
                        Address: `3000 N Halsted St #711, ${location} 60657`,
                        Phone: "(916) 830-2000",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        FaxNumber: "(916) 830-2001"
                    },
                ]
            }
        ]
    )
    useEffect(() => {
        setFilterItems([
            {
                Category: "Pharmacy",
                Locations: [
                    {
                        Name: "Walgreens Pharmacy",
                        FullName: `Walgreens Pharmacy, ${location.substring(0, location.length - 4)} West Street Location`,
                        Distance: "3.36 miles",
                        Address: `500 University Avenue, ${location} 60609`,
                        Phone: "(916) 830-2000",
                        Website: "https://www.walgreens.com/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        FaxNumber: "(916) 830-2001"
                    },
                    {
                        Name: "Lucky Pharmacy",
                        FullName: `Lucky Pharmacy, ${location.substring(0, location.length - 4)} Van Buren Area`,
                        Distance: "4.12 miles",
                        Address: `310 S Michigan Ave, ${location} 60604`,
                        Phone: "(916) 830-2000",
                        Website: "https://luckysupermarkets.com/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        FaxNumber: "(916) 830-2001"
                    },
                    {
                        Name: "CVS Pharmacy",
                        FullName: `CVS Pharmacy, ${location.substring(0, location.length - 4)} Daley Park`,
                        Distance: "4.87 miles",
                        Address: `310 S Michigan Ave, ${location} 60604`,
                        Phone: "(916) 830-2000",
                        Website: "https://www.cvs.com/pharmacy/v2/#/pharmacy",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        FaxNumber: "(916) 830-2001"
                    },
                ]
            },
            {
                Category: "General Physician",
                Locations: [
                    {
                        Name: `${location.substring(0, location.length - 4)} Clinic for ${diagnosis}s`,
                        FullName: `${location.substring(0, location.length - 4)} ${diagnosis} Center and Research Institute`,
                        Distance: "3.90 miles",
                        Address: `3000 N Halsted St #711, ${location} 60657`,
                        Phone: "(916) 830-2000",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        FaxNumber: "(916) 830-2001"
                    },
                ]
            }
        ])
    }, [diagnosis, location])
    const [filterItemsToShow, setFilterItemsToShow] = useState()
    useEffect(() => {
        let filterButtons = currentFilters;
        let locationsToShow = [];
        for (const filters of filterButtons) {
            let foundObj = filterItems.find(obj => obj.Category === filters);
            locationsToShow = locationsToShow.concat(foundObj.Locations)

        }
        locationsToShow.sort(function (a, b) { return (a.Distance > b.Distance) ? 1 : ((b.Distance > a.Distance) ? -1 : 0); });
        setFilterItemsToShow(locationsToShow)
    }, [currentFilters, filterItems])

    function FilterList() {
        let filterButtons = currentFilters;
        let filtersToShow = [];
        for (var filters of filterButtons) {
            filtersToShow.push(<div className="filter-buttons">{filters} <img src='/Trash.png' alt='Trash' className='Delete-Icon'></img></div>)
        }
        return filtersToShow
    }

    function FilterItemList() {
        console.log(filterItemsToShow)
        let filterItemData = filterItemsToShow;
        let filterItemsCards = [];
        let numberTag = 1;
        for (var filters in filterItemData) {
            let itemData = filterItemData[filters];
            console.log(itemData);
            filterItemsCards.push(
                <div className='item-Box'>
                    <div className='item-box-left'>
                        <div className='item-Header'>{numberTag}. {itemData.Name}</div>
                        <div className='item-row-1'>
                            <div className='item-info-1'>
                                <img src='/Distance.png' alt='Distance' className='item-image-wide'></img>
                                {itemData.Distance}
                            </div>
                            <div className='item-info'>
                                <img src='/LocationPin.png' alt='Pin' className='item-image'></img>
                                {itemData.Address}
                            </div>
                        </div>
                        <div className='item-row-2'>
                            <div className='item-info-1'>
                                <img src='/Phone.png' alt='Phone' className='item-image'></img>
                                {itemData.Phone}
                            </div>
                            <div className='item-info'>
                                <img src='/WWW.png' alt='Web Globe' className='item-image'></img>
                                <a href={itemData.Website} className='item-website' target='_blank'>Website</a>
                            </div>
                        </div>
                    </div>
                    <div className='item-box-buttons'>
                        <div className='item-box-add'>
                            <img src='/AddFile.png' alt='Add' className='item-img-button'></img>
                        </div>
                        <div className='item-box-refresh'>
                            <img src='/Refresh.png' alt='Refresh' className='item-img-button'></img>
                        </div>
                    </div>
                </div>
            )
            // filterItemsCards.push(<div className="filter-buttons">{filters} <img src='Trash.png' alt='Trash' className='Delete-Icon'></img></div>)
            numberTag++;
        }
        return filterItemsCards;
    }

    return (
        <>
            <div className='Rec-Page'>
                <div className='Nav-Bar'>
                    <img src="/SearchfulLogo.png" alt="Logo" className='Nav-Logo'></img>
                    <div className='Nav-Bar-Search'>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={listOfCities}
                            sx={{ width: '40%', background: "white", border: "1px solid #DFDFDF", borderRadius: "7px" }}
                            defaultValue={location}
                            renderInput={(params) => <TextField {...params} label="" sx={{ width: '100%', background: "white", border: "none", borderRadius: "7px", }} />}
                            onChange={handleLocationChange}
                        />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={listOfDiagnosis}
                            sx={{ width: '40%' }}
                            defaultValue={diagnosis}
                            renderInput={(params) => <TextField {...params} label="" sx={{ width: '100%', background: "white", border: "none", borderRadius: "7px", }} />}
                            onChange={handleDiagnosisChange}
                        />
                        <Button variant="contained"
                            sx={{
                                paddingTop: "18px",
                                paddingBottom: "18px",
                                paddingLeft: "5%",
                                paddingRight: "5%",
                                backgroundColor: "#FF756D",
                                ':hover': {
                                    bgcolor: '#FF5C53', // theme.palette.primary.main
                                    color: 'white',
                                },

                            }}
                            onClick={handleLDChange}
                        >Search</Button>
                    </div>
                </div>
                <div className='Rec-Scroll-Area'>
                    <div className='LocationAndDiagnosis'>
                        We recommend the following resources in <b>{location}</b> for <b>{diagnosis}</b>
                    </div>
                    <div className='Rec-Sub-Text' onClick={() => console.log(filterItems)}>
                        We selected the best resource from each category below
                    </div>
                    <div className='Filter-List'>
                        <FilterList></FilterList>
                        <div className='Filter-Add'>
                            + Add mre
                        </div>
                    </div>
                    <div className='Filter-Item-List'>
                        <FilterItemList></FilterItemList>
                    </div>
                    <div className='Magic-Search'>
                        <img className='MagicStars' src='/MagicStars.png' alt='Stars'></img>
                        <div className='MagicHeader'>
                            Unlock Magic Search for this query
                        </div>
                        <div className='MagicText'>
                            With insurance data and biographical data of the patient we are able to give an even better recommendation!
                        </div>
                        <div className='MagicButton'>
                            Make Magic
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
    { label: "Cold" },
    { label: "Flu" },
    { label: "Migraine" },
    { label: "Nausea" },
    { label: "Sinus Infection" },
    { label: "Sore Throat" },
]
export default Recommendations