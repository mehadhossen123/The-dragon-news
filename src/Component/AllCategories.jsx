import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise=fetch("/categories.json").then(result=>result.json())

const AllCategories = () => {
    const categories=use(categoryPromise)

    return (
      <div>
        <h1 className="font-bold">All Categories {categories.length}</h1>
        <div className="grid grid-cols-1 mt-5 gap-5">
          {categories.map((category) => (
            <NavLink
              className="btn bg-accent border-0 hover:bg-base-200 font-semibold"
              to={`/category/${category.id}`}
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
    );
};

export default AllCategories;