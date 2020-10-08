import React, { useState } from "react";
import PropTypes from "prop-types";
import cover from "../../assets/images/cover.jpg";

const BannerCover = ({ onSearch, keyword: query, ...props }) => {
  const [keyword, setKeyword] = useState(query);

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(keyword);
  };

  const handleChangeInput = e => {
    setKeyword(e.target.value);
  };

  return (
    <div
      data-testid="banner-cover"
      className="flex relative items-end h-64 rounded px-4 mb-2"
      style={{
        background: `url(${cover}) center no-repeat`,
        backgroundSize: "cover"
      }}
    >
      <div data-testid="movie-searchbar" className="py-4 w-full">
        <p className="text-white mb-2">Search movie:</p>
        <form data-testid="search-movies" onSubmit={handleSubmit}>
          <input
            data-testid="input-search"
            type="text"
            value={keyword}
            onChange={handleChangeInput}
            className="bg-gray-200 px-4 py-2 border-1 border-gray-200 rounded w-full"
            placeholder="Type movie title"
          />
        </form>
      </div>
    </div>
  );
};

BannerCover.propTypes = {
  onSearch: PropTypes.func
};

export default BannerCover;
