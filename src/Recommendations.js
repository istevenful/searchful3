import React, { useEffect, useState } from 'react'
import { useLocation, } from 'react-router-dom';
import "./Recommendations.css"
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
function Recommendations() {
    const [location, setLocation] = useState(useLocation().state.from.searchData[0]);
    const [diagnosis, setDiagnosis] = useState(useLocation().state.from.searchData[1]);
    const [currentFilters, setCurrentFilters] = useState([])

    const [diagnosisFilters, setDiagnosisFilters] = useState([])
    useEffect(() => {
        let diagObj = listOfCategories.find(obj => obj.Name === diagnosis);
        let diagnosisList = diagObj.Categories;
        setDiagnosisFilters(diagnosisList);
        setCurrentFilters(diagnosisList)
    }, [diagnosis])
    const [searchData, setSearchData] = useState([useLocation().state.from.searchData[0], useLocation().state.from.searchData[1]])
    let handleLocationChange = (event, value) => {
        let bufferData = searchData;
        if (value == null) {
            bufferData[0] = location;
            setSearchData(bufferData)
        }
        else {
            bufferData[0] = value.label;
            setSearchData(bufferData)
        }
    };
    let handleDiagnosisChange = (event, value) => {
        let bufferData = searchData;
        if (value == null) {
            bufferData[1] = diagnosis;
            setSearchData(bufferData)
        }
        else {

            bufferData[1] = value.label;
            setSearchData(bufferData)
        }
    };
    let handleLDChange = () => {
        setLocation(searchData[0]);
        setDiagnosis(searchData[1]);
    }
    let deleteFilter = (name) => {
        let filters = [...currentFilters];
        let filterToDeleteIndex = filters.indexOf(name);
        filters.splice(filterToDeleteIndex, 1);
        setCurrentFilters(filters);
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
                        FaxNumber: "(916) 830-2001",
                        Badge: ["Patient", "Professional"]
                    },
                    {
                        Name: "Lucky Pharmacy",
                        FullName: `Lucky Pharmacy, ${location.substring(0, location.length - 4)} Van Buren Area`,
                        Distance: "4.12 miles",
                        Address: `310 S Michigan Ave, ${location} 60604`,
                        Phone: "(916) 120-2300",
                        Website: "https://luckysupermarkets.com/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        FaxNumber: "(916) 830-2001",
                        Badge: ["Patient"]
                    },
                    {
                        Name: "CVS Pharmacy",
                        FullName: `CVS Pharmacy, ${location.substring(0, location.length - 4)} Daley Park`,
                        Distance: "4.87 miles",
                        Address: `310 S Michigan Ave, ${location} 60604`,
                        Phone: "(916) 433-1454",
                        Website: "https://www.cvs.com/pharmacy/v2/#/pharmacy",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        FaxNumber: "(916) 830-2001",
                        Badge: ["Professional"]
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
                        Phone: "(916) 834-2002",
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
                        Phone: "(916) 999-2020",
                        Website: "https://www.walgreens.com/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "Pharmacy",
                        Badge: ["Patient", "Professional"]
                    },
                    {
                        Name: "Lucky Pharmacy",
                        FullName: `Lucky Pharmacy, ${location.substring(0, location.length - 4)} Van Buren Area`,
                        Distance: "4.12 miles",
                        Address: `310 S Michigan Ave, ${location} 60604`,
                        Phone: "(916) 800-2031",
                        Website: "https://luckysupermarkets.com/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "Pharmacy",
                        Badge: ["Professional"]
                    },
                    {
                        Name: "CVS Pharmacy",
                        FullName: `CVS Pharmacy, ${location.substring(0, location.length - 4)} Daley Park`,
                        Distance: "4.87 miles",
                        Address: `310 S Michigan Ave, ${location} 60604`,
                        Phone: "(916) 120-2222",
                        Website: "https://www.cvs.com/pharmacy/v2/#/pharmacy",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "Pharmacy",
                        Badge: ["Professional"]

                    },
                ]
            },
            {
                Category: "ENT",
                Locations: [
                    {
                        Name: `${location.substring(0, location.length - 4)} ENT Clinic for ${diagnosis}s`,
                        FullName: `Otolaryngology: ${location.substring(0, location.length - 4)} Medical Foundation `,
                        Distance: "3.22 miles",
                        Address: `900 Blake Wilbur Dr, ${location} 60657`,
                        Phone: "(916) 834-1234",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "ENT",
                        Badge: ["Patient"]
                    },
                    {
                        Name: `Sutter Health`,
                        FullName: `Sutter Health in ${location.substring(0, location.length - 4)}`,
                        Distance: "2.33 miles",
                        Address: `1337 Sutter Dr, ${location} 60657`,
                        Phone: "(916) 834-1234",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 333-3211",
                        Type: "ENT",
                        Badge: ["Professional"]
                    },
                ]
            },
            {
                Category: "Hepatologist",
                Locations: [
                    {
                        Name: `${location.substring(0, location.length - 4)} Center`,
                        FullName: `${location.substring(0, location.length - 4)} Medical Foundation`,
                        Distance: "1.90 miles",
                        Address: `795 El Camino Real, ${location} 60657`,
                        Phone: "(916) 980-4132",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "Hepatologist",
                        Badge: ["Professional"]
                    },
                    {
                        Name: `Dr. Scott Colton`,
                        FullName: `Dr. Scott Colton at University Health System`,
                        Distance: "1.54 miles",
                        Address: `1546 Frontage Rd, ${location} 60657`,
                        Phone: "(916) 980-4132",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 543-3426",
                        Type: "Hepatologist"
                    },
                ]
            },
            {
                Category: "Gastroenterologist",
                Locations: [
                    {
                        Name: `Core Wellness Functional Medicine`,
                        FullName: `Dr. Carolyn Finnegan - Funcational Medicine`,
                        Distance: "0.73 miles",
                        Address: `600 Grand Ave #301, ${location} 60657`,
                        Phone: "(916) 123-4321",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "Gastroenterologist",
                        Badge: ["Patient", "Professional"]
                    },
                    {
                        Name: `Washington Hospital`,
                        FullName: `Dr. Michelle Chen - Washington Hospital`,
                        Distance: "4.97 miles",
                        Address: `9000 Washington St, ${location} 60657`,
                        Phone: "(916) 123-4321",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 123-3214",
                        Type: "Gastroenterologist",
                        Badge: ["Professional"]
                    },
                ]
            },
            {
                Category: "Gym",
                Locations: [
                    {
                        Name: `${location.substring(0, location.length - 4)} Fitness`,
                        FullName: `${location.substring(0, location.length - 4)} Fitness in Downtown`,
                        Distance: "0.93 miles",
                        Address: `425 Portage Ave, ${location} 60657`,
                        Phone: "(916) 400-4390",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "Gym",
                        Badge: ["Patient"]
                    },
                    {
                        Name: `Orangetheory Fitness`,
                        FullName: `Orangetheory Fitness in ${location.substring(0, location.length - 4)}`,
                        Distance: "2.13 miles",
                        Address: `2190 W Bayshore Rd #150, ${location} 60657`,
                        Phone: "(916) 411-3200",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "Gym",
                        Badge: ["Professional"]
                    },
                    {
                        Name: `NCFIT`,
                        FullName: `NCFIT ${location.substring(0, location.length - 4)}`,
                        Distance: "5.93 miles",
                        Address: ` 112 N Rengstorff Ave, ${location} 60657`,
                        Phone: "(916) 789-1467",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "Gym",
                        Badge: ["Patient"]
                    },
                ]
            },
            {
                Category: "Nutritionist",
                Locations: [
                    {
                        Name: `Nutrition Support Clinic`,
                        FullName: `Nutrition Support Clinic`,
                        Distance: "0.53 miles",
                        Address: `100 California Ave., ${location} 60657`,
                        Phone: "(916) 441-3519",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",
                        FaxNumber: "(916) 830-2001",
                        Type: "Nutritionist",
                        Badge: ["Patient", "Professional"]
                    },
                    {
                        Name: `${location.substring(0, location.length - 4)} Nutrition`,
                        FullName: `${location.substring(0, location.length - 4)} Nutrition`,
                        Distance: "1.98 miles",
                        Address: `879 Newark St., ${location} 60657`,
                        Phone: "(916) 111-6546",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "Nutritionist",
                        Badge: ["Patient"]
                    },
                    {
                        Name: `RD Nutrition Coaching`,
                        FullName: `Rishabh Goel, RD Nutrition Coaching`,
                        Distance: "7.34 miles",
                        Address: ` 3111 Genie Ave, ${location} 60657`,
                        Phone: "(916) 221-3288",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "Nutritionist",
                        Badge: []
                    },
                ]
            },
            {
                Category: "Ophthalmologist",
                Locations: [
                    {
                        Name: `${location.substring(0, location.length - 4)} Eye Care`,
                        FullName: `${location.substring(0, location.length - 4)} Eye Care`,
                        Distance: "1.18 miles",
                        Address: `999 Edgewater Blvd, ${location} 60657`,
                        Phone: "(916) 180-8000",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "Ophthalmologist",
                        Badge: ["Patient"]

                    },
                    {
                        Name: `${location.substring(0, location.length - 4)} Eye Group`,
                        FullName: `${location.substring(0, location.length - 4)} Eye Group`,
                        Distance: "2.01 miles",
                        Address: `2452 Watson Ct., ${location} 60657`,
                        Phone: "(916) 670-5422",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "Ophthalmologist",
                        Badge: ["Professional"]
                    },
                ]
            },
            {
                Category: "Podiatrist",
                Locations: [
                    {
                        Name: `Midtown Podiatry`,
                        FullName: `Midtown Podiatry in ${location.substring(0, location.length - 4)}`,
                        Distance: "4.64 miles",
                        Address: `20 Middlefield Rd., ${location} 60657`,
                        Phone: "(916) 312-9348",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "Podiatrist",
                        Badge: ["Patient"]
                    },
                    {
                        Name: `${location.substring(0, location.length - 4)} Podiatrists Group`,
                        FullName: `${location.substring(0, location.length - 4)} Podiatrists Group`,
                        Distance: "2.44 miles",
                        Address: `5833 Aqua Rd., ${location} 60657`,
                        Phone: "(916) 765-4834",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "Podiatrist",
                        Badge: ["Patient", "Professional"]
                    },
                ]
            },
            {
                Category: "Primary care provider (PCP)",
                Locations: [
                    {
                        Name: `Bloom Primary Care`,
                        FullName: `Bloom Primary Care Medical Clinic`,
                        Distance: "0.14 miles",
                        Address: `4854 West El Camino., ${location} 60657`,
                        Phone: "(916) 114-4148",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "Primary care provider (PCP)",
                        Badge: ["Professional"]
                    },
                    {
                        Name: `Mission Primary Care`,
                        FullName: `Mission Primary Care Medical Clinic`,
                        Distance: "4.01 miles",
                        Address: `3755 Mission Blvd., ${location} 60657`,
                        Phone: "(916) 796-7796",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "Primary care provider (PCP)",
                        Badge: ["Professional"]
                    },
                ]
            },
            {
                Category: "OBGYN",
                Locations: [
                    {
                        Name: `Obstetrics & Gynecology`,
                        FullName: `Obstetrics & Gynecology (OB/GYN) | PAMF`,
                        Distance: "3.99 miles",
                        Address: `455 Vizio Dr., ${location} 60657`,
                        Phone: "(916) 992-4021",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "OBGYN",
                        Badge: ["Professional"]
                    },
                    {
                        Name: `${location.substring(0, location.length - 4)} Ob-Gyn Medical Group`,
                        FullName: `${location.substring(0, location.length - 4)} Ob-Gyn Medical Group`,
                        Distance: "2.43 miles",
                        Address: `3886 Beacon Ave., ${location} 60657`,
                        Phone: "(916) 259-5000",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "OBGYN"
                    },
                ]
            },
            {
                Category: "Occupational Therapy",
                Locations: [
                    {
                        Name: `Ascend Rehab Services`,
                        FullName: `Ascend Rehab Services`,
                        Distance: "2.67 miles",
                        Address: `800 Union Blvd., ${location} 60657`,
                        Phone: "(916) 800-1021",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "Occupational Therapy",
                        Badge: ["Patient", "Professional"]
                    },
                    {
                        Name: `OT Park`,
                        FullName: `OT Park - Pediatric Occupational Therapy & Sensory Gym`,
                        Distance: "4.44 miles",
                        Address: `284 Digital Dr., ${location} 60657`,
                        Phone: "(916) 888-3636",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 888-3636",
                        Type: "Occupational Therapy",
                        Badge: ["Patient"]
                    },
                ]
            },
            {
                Category: "Physical Therapy",
                Locations: [
                    {
                        Name: `${location.substring(0, location.length - 4)} Rehabilitation`,
                        FullName: `${location.substring(0, location.length - 4)} Rehabilitation and Sports Therapy`,
                        Distance: "2.67 miles",
                        Address: `800 Union Blvd., ${location} 60657`,
                        Phone: "(916) 800-1021",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "Physical Therapy",
                        Badge: ["Professional"]
                    },
                    {
                        Name: `iMotion Physical Therapy`,
                        FullName: `iMotion Physical Therapy`,
                        Distance: "3.44 miles",
                        Address: `4324 Mowry St., ${location} 60657`,
                        Phone: "(916) 745-7700",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 745-7700",
                        Type: "Physical Therapy",
                        Badge: ["Patient"]
                    },
                ]
            },
            {
                Category: "Endocrinology",
                Locations: [
                    {
                        Name: `Stanfard Endocrinology Clinic`,
                        FullName: `Stanfard Endocrinology Clinic`,
                        Distance: "0.88 miles",
                        Address: `2001 Stanfard Ave., ${location} 60657`,
                        Phone: "(916) 430-2321",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "Endocrinology",
                        Badge: ["Patient", "Professional"]
                    },
                    {
                        Name: `Endocrinology Physicians Group`,
                        FullName: `Endocrinology Physicians Group`,
                        Distance: "5.88 miles",
                        Address: `2001 Grant Rd # 103, ${location} 60657`,
                        Phone: "(916) 967-8841",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 967-8841",
                        Type: "Endocrinology",
                        Badge: ["Professional"]
                    },
                ]
            },
            {
                Category: "Rheumatology",
                Locations: [
                    {
                        Name: `Stanfard College Rheumatology`,
                        FullName: `Stanfard College Rheumatology`,
                        Distance: "1.21 miles",
                        Address: `6001 Stanfard Ave., ${location} 60657`,
                        Phone: "(916) 430-2321",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "Rheumatology",
                        Badge: ["Patient", "Professional"]
                    },
                    {
                        Name: `Tricity Rheumatology`,
                        FullName: `Tricity Rheumatology`,
                        Distance: "1.21 miles",
                        Address: `734 Mowry St., ${location} 60657`,
                        Phone: "(916) 792-3786",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 792-3786",
                        Type: "Rheumatology",
                        Badge: ["Patient"]
                    },
                ]
            },
            {
                Category: "Nephrology",
                Locations: [
                    {
                        Name: `Chabot Nephrology`,
                        FullName: `Chabot Nephrology in ${location.substring(0, location.length - 4)}`,
                        Distance: "4.76 miles",
                        Address: `6001 Chabot Ave., ${location} 60657`,
                        Phone: "(916) 654-1237",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "Nephrology",
                        Badge: ["Patient", "Professional"]
                    },
                    {
                        Name: `${location.substring(0, location.length - 4)} Nephrology Pro Corporation`,
                        FullName: `${location.substring(0, location.length - 4)} Nephrology Pro Corporation: Tay David T MD`,
                        Distance: "2.45 miles",
                        Address: `39233 Liberty St., ${location} 60657`,
                        Phone: "(916) 795-8186",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 795-8186",
                        Type: "Nephrology",
                        Badge: ["Professional"]
                    },
                ]
            },
            {
                Category: "Urology",
                Locations: [
                    {
                        Name: `Pacific Urology`,
                        FullName: `Pacific Urology in ${location.substring(0, location.length - 4)}`,
                        Distance: "2.66 miles",
                        Address: `1999 Mowry Ave., ${location} 60657`,
                        Phone: "(916) 198-8752",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "Urology",
                        Badge: ["Professional"]
                    },
                    {
                        Name: `Advanced Regen Medical`,
                        FullName: `Advanced Regen Medical - A Professional Medical Corporation`,
                        Distance: "1.19 miles",
                        Address: `471 Division St, ${location} 60657`,
                        Phone: "(916) 871-8222",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 871-8222",
                        Type: "Urology",
                        Badge: ["Professional"]
                    },
                ]
            },
            {
                Category: "Pulmonologist",
                Locations: [
                    {
                        Name: `Pulmonary: ${location.substring(0, location.length - 4)} Center`,
                        FullName: `Pulmonary: ${location.substring(0, location.length - 4)} Center`,
                        Distance: "1.99 miles",
                        Address: `321 El Camino Real, ${location} 60657`,
                        Phone: "(916) 321-1231",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "Pulmonologist",
                        Badge: ["Patient"]
                    },
                    {
                        Name: `Washington Township Medical Foundation`,
                        FullName: `Washington Township Medical Foundation: Jason S. Chu, MD`,
                        Distance: "5.21 miles",
                        Address: `1287 Washington Blvd., ${location} 60657`,
                        Phone: "(916) 248-1550",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 248-1550",
                        Type: "Pulmonologist",
                        Badge: ["Professional"]
                    },
                ]
            },
            {
                Category: "Respiratory Therapy",
                Locations: [
                    {
                        Name: `Respiratory Care Services`,
                        FullName: `Respiratory Care Services: Stanfard Center`,
                        Distance: "4.52 miles",
                        Address: `100 Stanfard Ave., ${location} 60657`,
                        Phone: "(916) 765-5432",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "Respiratory Therapy",
                        Badge: ["Patient"]
                    },
                    {
                        Name: `${location.substring(0, location.length - 4)} Pacific Medical Center`,
                        FullName: `Respiratory Therapy and Diagnostics Program: California Pacific Medical Center`,
                        Distance: "5.61 miles",
                        Address: `3555 Cesar Chavez St, ${location} 60657`,
                        Phone: "(916) 641-6850",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 641-6850",
                        Type: "Respiratory Therapy",
                        Badge: ["Professional"]
                    },
                ]
            },
            {
                Category: "Sleep Medicine",
                Locations: [
                    {
                        Name: `Sleep Health MD`,
                        FullName: `Sleep Health MD at Stanfard Center`,
                        Distance: "3.88 miles",
                        Address: `243 Stanfard Ave., ${location} 60657`,
                        Phone: "(916) 645-9211",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 830-2001",
                        Type: "Sleep Medicine",
                        Badge: ["Professional"]
                    },
                    {
                        Name: `Sleep Well Medical Clinic`,
                        FullName: `Sleep Well Medical Clinic: Advanced Respiratory & Sleep Medicine`,
                        Distance: "7.11 miles",
                        Address: `105 N Bascom Ave # 202, ${location} 60657`,
                        Phone: "(916) 993-1500",
                        Website: "https://www.ucsfhealth.org/",
                        Providers: ["Raye Bellinger, M.D., MBA (In the network), Mark H. Eaton, M.D, FACC (preferred provider)", "Philip Morris Bach, M.D., FACC Georg Emlein , M.D., FACC Daniel Dale Vanhamersveld, M.D., FACC Michael David Fugit, M.D., FACC Kyle J. Michaelis, M.D., FACC Richard A. Clark, M.D."],
                        PPOInsurances: "Aetna, Beechstreet (Viant), Blue Cross Blue Shield, Cigna, Coventry Health Care, Global Excel - PPO, Galaxy Health Network PPO, Health Alliance, HealthLink, HFN, Humana, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare, Imagine Health, Interplan (Chandler/Preferred Plan/ HealthSmart), LifeSynch, MultiPlan/PHCS, Prime Health Services PPO, The Alliance, Three Rivers Provider Network PPO, United Healthcare",
                        HMOInsurances: "AETNA, BCBS, CIGNA, Coventry Health Care, Health Alliance, HealthLink, Humana, United Healthcare",
                        Transportation: "Yes",
                        Portal: "Yes",
                        Services: "Lanuage services, Wheelchair access",                        FaxNumber: "(916) 993-1500",
                        Type: "Sleep Medicine",
                        Badge: ["Patient"]
                    },
                ]
            },

        ])
    }, [diagnosis, location])
    const [filterItemsToShow, setFilterItemsToShow] = useState()
    function randomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    useEffect(() => {
        let filterButtons = [...currentFilters];
        let locationsToShow = [];
        for (const filters of filterButtons) {
            let foundObj = filterItems.find(obj => obj.Category === filters);
            if (foundObj != undefined) {
                let numberInRange = randomNumber(0, foundObj.Locations.length - 1);
                console.log(numberInRange);
                console.log(foundObj.Locations)
                locationsToShow.push(foundObj.Locations[numberInRange])
            }

        }
        locationsToShow.sort(function (a, b) { return (a.Distance > b.Distance) ? 1 : ((b.Distance > a.Distance) ? -1 : 0); });
        setFilterItemsToShow(locationsToShow)
    }, [currentFilters, filterItems])

    function FilterList() {
        let filterButtons = [...currentFilters];
        let filtersToShow = [];
        for (var filters of filterButtons) {
            let name = filters
            filtersToShow.push(<div className="filter-buttons">{name} <img src='/Trash.png' alt='Trash' className='Delete-Icon' onClick={() => { deleteFilter(name) }}></img></div>)
        }
        return filtersToShow
    }
    const [popUpInfo, setPopUpInfo] = useState(null);
    const [showPopUp, setShowPopUp] = useState(false);
    let handleItemBoxWasClicked = (itemData) => {
        setPopUpInfo(itemData);
    }
    let handleItemBoxCloseWasClicked = () => {
        setShowPopUp(false)
        setPopUpInfo(null);
    }
    useEffect(() => {
        if (popUpInfo != null) {
            setShowPopUp(true);
        }
        else if (popUpInfo == null) {
            setShowPopUp(false);
        }
    }, [popUpInfo])
    function FilterItemList() {


        function CreateBadges(badgeData) {
            let returnBadges = [];
            if (badgeData.data != undefined) {
                if (badgeData.data.length != 0) {
                    let badges = badgeData.data;
                    for (var name of badges) {
                        console.log(name);
                        if (name == "Patient") {
                            returnBadges.push(

                                <Tooltip title="User Verified">
                                    <img src='/UserVerified.png' alt='User Badge' className='item-badges'></img>
                                </Tooltip>
                            )
                        }
                        else if (name == "Professional") {
                            returnBadges.push(

                                <Tooltip title="Verified By A Medical Professional">
                                    <img src='/ProfessionalBadge.png' alt='Professional Badge' className='item-badges'></img>
                                </Tooltip>
                            )
                        }

                    }
                }


            }
            return returnBadges;
        }
        function ChangeButtonColor(itself) {
            console.log(itself)
            if (itself.classList[0] == "item-box") {
                itself.classList = ["item-box-active"]
            }
            else if (itself.classList[0] == "item-box-active") {
                itself.classList = ["item-box"]
            }
        }

        function ChangeBoxValues(currentValue) {
            console.log(currentValue)
            let copyOfCurrentFilters = [...filterItemsToShow];
            console.log(filterItems)
            let listOfDataToChange = filterItems.find(obj => obj.Category === currentValue.Type);
            console.log(listOfDataToChange);
            let locationsListToPickFrom = listOfDataToChange.Locations;
            console.log(locationsListToPickFrom)
            if (locationsListToPickFrom.length > 1) {
                let currentItemInArrayIndex = locationsListToPickFrom.indexOf(currentValue);
                while (true) {
                    let randomIndex = randomNumber(0, locationsListToPickFrom.length - 1)
                    if (randomIndex != currentItemInArrayIndex) {
                        let copyIndex = copyOfCurrentFilters.indexOf(currentValue);
                        copyOfCurrentFilters[copyIndex] = locationsListToPickFrom[randomIndex];
                        break;
                    }
                }

            }
            setFilterItemsToShow(copyOfCurrentFilters);
            // let indexOfCurrent = locationsListToPickFrom.indexOf
        }
        let filterItemData = filterItemsToShow;
        let filterItemsCards = [];
        let numberTag = 1;
        let categoriesUsed = [];
        for (var filters in filterItemData) {
            let itemData = filterItemData[filters];
            categoriesUsed.push(filterItemData[filters].Type)
            filterItemsCards.push(
                <div className='item-Box' >
                    <div className='item-box-left'>
                        <div className='item-Category'>{itemData.Type} </div>
                        <div className='item-Header'>{itemData.Name} <CreateBadges data={itemData.Badge}></CreateBadges></div>
                        <div className='item-row-1'>
                            <div className='item-info-1'>
                                <img src='/Distance.png' alt='Distance' className='item-image-wide'></img>
                                {itemData.Distance}
                            </div>
                            <div className='item-info'>
                                <img src='/LocationPin.png' alt='Pin' className='item-image-tall'></img>
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
                        <div className='item-box' onClick={(e) => { ChangeButtonColor(e.target) }}>
                            <img src='/AddFile.png' alt='Add' className='item-img-button unselectable' onClick={(e) => { ChangeButtonColor(e.target.parentElement) }}></img>
                        </div>
                        <div className='item-box ' onClick={(e) => { ChangeBoxValues(itemData) }}>
                            <img src='/Refresh.png' alt='Refresh' className='item-img-button unselectable' onClick={(e) => { ChangeBoxValues(itemData) }}></img>
                        </div>
                    </div>
                    <div className='item-box-click-box' onClick={() => { handleItemBoxWasClicked(itemData) }}>

                    </div>
                </div>
            )


            // filterItemsCards.push(<div className="filter-buttons">{filters} <img src='Trash.png' alt='Trash' className='Delete-Icon'></img></div>)
            numberTag++;
        }
        return filterItemsCards;
    }


    let changeClassToActive = (id) => {

        let classObj = document.getElementById(id).classList;
        // console.log(classObj.length);
        if (classObj.length == 1) {
            document.getElementById(id).classList = ["popUpClickableButtons popUpClickableButtonsActive"]
        }
        else if (classObj.length == 2) {
            document.getElementById(id).classList = ["popUpClickableButtons"]
        }
    }


    const [showFilterChange, setShowFilterChange] = useState(false)

    function DiagnosisToggleList() {

        let allFilters = [...diagnosisFilters];
        let filtersOn = [...currentFilters];
        let returnedList = [];
        function changeToggle(name) {
            //find if the button is in filters on;
            let newFilterList = [...currentFilters];
            let isItOn = filtersOn.indexOf(name);
            //turn off/remove
            if (isItOn != -1) {
                newFilterList.splice(isItOn, 1);
                setCurrentFilters(newFilterList);
            }
            else {
                //add
                newFilterList.push(name);
                setCurrentFilters(newFilterList);
            }
        }
        for (var filter of allFilters) {
            let cateName = filter;
            let filterFind = filtersOn.indexOf(filter);
            if (filterFind != -1) {
                returnedList.push(<FormControlLabel control={<Checkbox defaultChecked style={{
                    color: "#FF756D",
                }} onClick={() => { changeToggle(cateName) }} />} label={cateName} />)
            }
            else {
                returnedList.push(<FormControlLabel control={<Checkbox onClick={() => { changeToggle(cateName) }} />} label={cateName} />)
            }
        }
        return returnedList
    }

    return (
        <>
            <div className='Rec-Page'>
                <div className='Nav-Bar'>
                    <a href='/' className='Nav-Logo'><img src="/SearchfulLogo.png" alt="Logo" className='Logo-img'></img></a>
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
                    <a className='Back-to-og' href="https://navigate.searchful.care/" target='_blank'>
                        Go back to traditional Searchful
                    </a>
                    <div className='LocationAndDiagnosis'>
                        We recommend the following resources in <b>{location}</b> for <b>{diagnosis}</b>
                    </div>
                    <div className='Rec-Sub-Text'>
                        We selected the best resource from each category below
                    </div>
                    {/* <div className='Filter-List'>
                        <FilterList></FilterList>
                        <div className='Filter-Add' onClick={() => setShowFilterChange(!showFilterChange)}>
                            + Add more
                        </div>
                    </div> */}
                    <div className='Filter-Item-List'>
                        <FilterItemList></FilterItemList>
                    </div>
                    <div className='Magic-Search'>
                        <img className='MagicStars' src='/MagicStars.png' alt='Stars'></img>
                        <div className='MagicHeader'>
                            Unlock Advance Search Features For This Query
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
            {showPopUp == true ?
                <div className='popup'>
                    <div className='popupContainer'>
                        <div className='popupButtons-Top'>
                            <div className='BackPopup' onClick={() => { handleItemBoxCloseWasClicked() }}>
                                Back to list
                            </div>
                            <div className='fourButtons'>
                                <div className='popUpClickableButtons' id="Add" onClick={() => { changeClassToActive("Add") }}>
                                    <img src='/AddFile.png' alt='Add' className='item-img-button'></img>
                                </div>
                                <div className='popUpClickableButtons' id="Refresh" onClick={() => { changeClassToActive("Refresh") }}>
                                    <img src='/Refresh.png' alt='Refresh' className='item-img-button'></img>
                                </div>
                                <div className='popUpClickableButtons' id="Pencil" onClick={() => { changeClassToActive("Pencil") }}>
                                    <img src='/Pencil.png' alt='Pencil' className='item-img-button'></img>
                                </div>
                                <div className='popUpClickableButtons' id="Trash" onClick={() => { changeClassToActive("Trash") }}>
                                    <img src='/TrashRed.png' alt='TrashRed' className='item-img-button'></img>
                                </div>
                            </div>
                        </div>

                        <div className='categoty-Popups'>
                            <div className='categoty-Popups'>
                                {diagnosis}
                            </div>
                            <div className='categoty-Popups'>
                                •
                            </div>
                            <div className='categoty-Popups'>
                            {popUpInfo.Type}
                            </div>
                            {/* <div className='categoty-Popups'>
                                •
                            </div>
                            <div className='categoty-Popups'>
                                Category 3
                            </div> */}
                        </div>
                        <div className='popUpHeaderText'>
                            {popUpInfo.FullName}
                        </div>
                        <div className='divider'></div>

                        <div className='item-row-1'>
                            <div className='popup-info-1'>
                                <img src='/Distance.png' alt='Distance' className='item-image-wide'></img>
                                {popUpInfo.Distance}
                            </div>
                            <div className='popup-info'>
                                <img src='/LocationPin.png' alt='Pin' className='item-image-tall'></img>
                                {popUpInfo.Address}
                            </div>
                        </div>
                        <div className='item-row-2'>
                            <div className='popup-info-1'>
                                <img src='/Car.png' alt='Phone' className='item-image'></img>
                                13 minutes by car
                            </div>
                            <div className='popup-info-1'>
                                <img src='/Phone.png' alt='Phone' className='item-image'></img>
                                {popUpInfo.Phone}
                            </div>

                            <div className='popup-info'>
                                <img src='/WWW.png' alt='Web Globe' className='item-image'></img>
                                <a href={popUpInfo.Website} className='item-website' target='_blank'>Website</a>
                            </div>
                        </div>
                        <div className='popup-Times'>
                            <img src='/Clock.png' alt='Web Globe' className='item-image'></img>
                            <div className='time-slots'>
                                <div className='time-slot'>
                                    MON: 8:00AM - 5:00PM
                                </div>
                                <div className='time-slot'>
                                    TUE: 8:00AM - 5:00PM
                                </div>
                                <div className='time-slot'>
                                    WED: 8:00AM - 5:00PM
                                </div>
                                <div className='time-slot'>
                                    THU: 8:00AM - 5:00PM
                                </div>
                                <div className='time-slot'>
                                    FRI: 8:00AM - 5:00PM
                                </div>
                                <div className='time-slot'>
                                    SAT: CLOSED
                                </div>
                                <div className='time-slot'>
                                    SUN: CLOSED
                                </div>
                            </div>

                        </div>
                        <div className='divider'></div>
                        <div className='Search-additional-features'>
                            Search additional details
                        </div>
                        <div className='add-details-header'>
                            Providers
                        </div>
                        <div className='popup-providers'>{popUpInfo.Providers[0]}</div>
                        <div className='popup-providers'>{popUpInfo.Providers[1]}</div>
                        <div className='add-details-header'>
                            PPO Insurances Accepted
                        </div>
                        <div className='popup-providers'>{popUpInfo.PPOInsurances}</div>
                        <div className='add-details-header'>
                            HMO Insurances Accepted
                        </div>
                        <div className='popup-providers'>{popUpInfo.HMOInsurances}</div>
                        <div className='add-details-header'>
                            Transportation Assistance
                        </div>
                        <div className='popup-providers'>{popUpInfo.Transportation}</div>
                        <div className='add-details-header'>
                            Patient Portal
                        </div>
                        <div className='popup-providers'>{popUpInfo.Portal}</div>
                        <div className='add-details-header'>
                            Services
                        </div>
                        <div className='popup-providers'>{popUpInfo.Services}</div>
                    </div>
                </div>
                :
                <></>
            }
            {showFilterChange == true ?
                <div className='popup-filter'>
                    <div className='popupContainer-filters'>

                        <DiagnosisToggleList></DiagnosisToggleList>
                        <div className='BackPopup-Filters' onClick={() => { setShowFilterChange(!showFilterChange) }}>
                            Back to list
                        </div>
                    </div>
                </div>
                : <></>}
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

const listOfCategories = [
    {
        Name: "Fatty Liver Disease",
        Categories: ["Hepatologist", "Gastroenterologist", "Gym", "Nutritionist", "Pharmacy"]
    },
    {
        Name: "Kidney Stones",
        Categories: ["Gym", "Nutritionist", "Ophthalmologist", "Pharmacy", "Podiatrist", "Primary care provider (PCP)"]
    },
    {
        Name: "Osteoporosis",
        Categories: ["Endocrinology", "Nutritionist", "OBGYN", "Occupational Therapy", "Physical Therapy", "Rheumatology"]
    },
    {
        Name: "Sleep Apnea",
        Categories: ["Nephrology", "Nutritionist", "Pharmacy", "Urology"]
    },
    {
        Name: "Type II Diabetes",
        Categories: ["ENT", "Gym", "Neurology", "Nutritionist", "Pulmonologist", "Respiratory Therapy", "Sleep Medicine"]
    },
]


export default Recommendations