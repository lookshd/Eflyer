
import { FunctionBar } from "./FunctionBar";
import image from "../assets/banner-bg.png"
export const Banner = ({
  setOpenSideBar,
  selectedCategory,
  handleChange,
  categories,
  searchTerm,
  setSearchTerm,
  handleSearch,
}) => {
  return (
    <div className="banner-wrapper" id="home">
        <div className="overlay">
          <h3 className="banner-heading-Eflyer">Eflyer</h3>
          
        </div>
      <div className="banner-background-image-wrapper">
        <img
          src={image}
          className="banner-background-image"
          alt="Banner Image"
        />
        <FunctionBar
          selectedCategory={selectedCategory}
          handleChange={handleChange}
          setOpenSideBar={setOpenSideBar}
          categories={categories}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />
        <div className="overlay-text-wrapper">
          <h3 className="banner-heading">Get Started</h3>
          <h3 className="banner-heading">Your Favourite Shopping Site</h3>
          <a href="/">
            <button className="intro-btn">Buy Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};
