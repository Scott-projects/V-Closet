import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoAPIoptions } from "./api";

const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`, geoAPIoptions)
            .then(response => response.json())
            .then((response) => {
    return {
        options: response.data.map((city) => {
            return {
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.region}`
            };
        }),
    };
})
            .catch (err => console.error(err));
    }

const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
}

const cityStyle = {
    menu: (provided, state) => ({
        ...provided,
        maxWidth: '35%',
    }),
    control: (provided, state) => ({
        ...provided,
        maxWidth: '35%',
    }),
    option: (provided, state) => ({
        ...provided,
        color: '#202020',
        letterSpacing: '0.05rem',
    }),
};

return (
    <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        styles={cityStyle}
    />
)
}

export default Search;