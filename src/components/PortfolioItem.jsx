import React from 'react';
import { IoLink } from 'react-icons/io5';

import PropTypes from 'prop-types';

function PortfolioItem({
  children,
  imgURL,
  title = 'Title of the portfolio-item',
  roles = ['all'],
  tags = ['html', 'css', 'javascript'],
}) {
  return (
    <div className="w-full border-2 border-solid border-white overflow-hidden p-4 flex flex-col gap-4">
      <img
        src={imgURL}
        className="w-full h-[300px] object-cover border-solid border-white border-2 "
      />
      <div className="w-full grid grid-flow-row gap-2">
        <span className="text-xl flex flex-row gap-2 items-center">
          {title}
          <a>
            <IoLink />
          </a>
        </span>
        <div className="text-sm row-start-2">{children}</div>
        <div className="col-start-2 row-span-2 min-w-[160px]">
          <span> Roles</span>
          <ul className="flex flex-row flex-wrap gap-2 max-w-[250px]">
            {roles.map((val) => (
              <li key={val} className="bg-slate-900 p-2 ">
                {val}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2">
          <ul className="flex flex-row flex-wrap gap-2  ">
            {tags.map((val) => (
              <li key={val} className="bg-slate-900 p-2 ">
                {val}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

PortfolioItem.propTypes = {
  imgURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
};

export default PortfolioItem;
