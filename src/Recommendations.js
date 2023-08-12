import React, { useEffect, useState } from 'react'
import { useLocation, } from 'react-router-dom';
import "./Recommendations.css"

// import Checkbox from '@mui/material/Checkbox';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';

// const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
// const checkedIcon = <CheckBoxIcon fontSize="small" />;
function Recommendations() {

    const [location, setLocation] = useState(useLocation().state.from.searchData[0]);
    const [diagnosis, setDiagnosis] = useState(useLocation().state.from.searchData[1]);
    const [currentFilters, setCurrentFilters] = useState(["Pharmacy", "General Physician"])
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
                        Name: `${location.substring(0, location.length - 4)} Clinic for Headaches`,
                        FullName: `${location.substring(0, location.length - 4)} Headache Center and Research Institute`,
                        Distance: "3.90 miles",
                        Address: `3000 N Halsted St #711, ${location} 60657`,
                        Phone: "(916) 830-2000",
                        Website: "https://www.walgreens.com/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        FaxNumber: "(916) 830-2001"
                    },
                ]
            }
        ]
    )
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
            filtersToShow.push(<div className="filter-buttons">{filters} <img src='Trash.png' alt='Trash' className='Delete-Icon'></img></div>)
        }
        return filtersToShow
    }

    return (
        <>
            <div className='Rec-Page'>
                <div className='Nav-Bar'>
                    <img src="SearchfulLogo.png" alt="Logo" className='Nav-Logo'></img>
                    <div className='Nav-Bar-Search'>

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
                        {/* <Autocomplete
                            multiple
                            id="checkboxes-tags-demo"
                            options={{ title: 'The Shawshank Redemption', year: 1994 }}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.title}
                            renderOption={(props, option, { selected }) => (
                                <li {...props}>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8 }}
                                        checked={selected}
                                    />
                                    {option.title}
                                </li>
                            )}
                            style={{ width: 500 }}
                            renderInput={(params) => (
                                <TextField {...params} label="Checkboxes" placeholder="Favorites" />
                            )}
                        /> */}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Recommendations