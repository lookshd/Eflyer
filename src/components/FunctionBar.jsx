import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CategoryFilter } from "./CategoryFilter";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { SearchBar } from "./SearchBar";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";


export const FunctionBar = ({
  setOpenSideBar,
  selectedCategory,
  handleChange,
  categories,
  searchTerm,
  setSearchTerm,
  handleSearch
}) => {
  return (
    <div className="function-bar">
     <div onClick={() => setOpenSideBar(true)}>
      <FontAwesomeIcon className="hamburger-icon" icon={faBars} />
    </div>
      <CategoryFilter
        selectedCategory={selectedCategory}
        handleChange={handleChange}
        categories={categories}
      />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
    

    <div className="language-filter-wrapper">
      <select className="lang-filter-options">
        <option className="lang-filter-option" value="en">
          English
        </option>
        
      </select>
    </div>


      <div className="btn-wrapper">
        <FontAwesomeIcon className="icon-style" icon={faCartShopping} />
        <button className="btn">Cart</button>
        <FontAwesomeIcon className="icon-style" icon={faUser} />
        <button className="btn">Profile</button>
      </div>
    </div>
  );
};
