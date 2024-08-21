import React, { useCallback, useState } from "react";
import { FC } from "react";
import '../styles/SearchBar.css'
import { Search } from 'lucide-react';
import debounce from "lodash.debounce";
import { MessageCircleMore } from 'lucide-react';


interface SearchBarProps {
    
}
 
const SearchBar: FC<SearchBarProps> = () => {

    const [searchInput, setSearchInput] = useState<string>('')
    const [showSearchResults, setSearchResults]  = useState<boolean>(false)
    const [isFocused, setIsFocused] = useState(false);

    // const request = debounce((value: string) => {
    //     console.log(value)
    // }, 3000)

    // Handler for when the input gains focus
    const handleFocus = () => {
        setIsFocused(true);
    };
    // Handler for when the input loses focus
    const handleBlur = () => {
        setIsFocused(false);
    };

    const debouncedRequest = useCallback(
        debounce((value: string) => {
            console.log(value); // This will be called after 3 seconds of inactivity
        }, 3000),
        [] // Empty dependencies array ensures that the debounced function is created only once
    );

    const isNotBlank = (str:string) => {
        return str.trim().length > 0;
    };

    // const debounceRequest = useCallback(() => {
    //     request()
    // }, [])

    return (
        <div className="search-div">
            <div className="search-icon-div">
                <Search className="searh-icon" />
            </div>
            <input
                className="search-input"
                placeholder="Search Chats..."
                type="text"
                value={searchInput}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => {
                    const value: string = e.target.value
                    setSearchInput(value)
                    debouncedRequest(value)
                    isNotBlank(value) ? setSearchResults(true) : setSearchResults(false)
                }}
            />
            {/* <div className={`search-div-dropdown ${showSearchResults && isFocused ? '' : 'hide'}`}>
                <p className="search-div-dropdown-no-results-found">No Results Found</p>

            </div> */}
            <div
                className={`search-div-dropdown ${showSearchResults && isFocused ? '' : 'hide'}`}
            >
                <p className="search-div-dropdown-data">
                    <MessageCircleMore className="search-div-dropdown-data-icon" /> Chats
                </p>
                <p className="search-div-dropdown-data">
                    <MessageCircleMore className="search-div-dropdown-data-icon" /> Chats
                </p>
                <p className="search-div-dropdown-data">
                    <MessageCircleMore className="search-div-dropdown-data-icon" /> Chats
                </p>
                <p className="search-div-dropdown-data">
                    <MessageCircleMore className="search-div-dropdown-data-icon" /> Chats
                </p>

                <p className="">

                </p> 
            </div>
        </div>
    )
}
 
export default SearchBar;

{/* <div className="search-div">
<div className="search-icon-div">
    <p><div>asda</div></p>
</div>
<div className="search-input-div">
    <p><input className="search-input"/></p>
</div>
</div> */}