"use client";

import Categorycard from '@/components/CategoryCard/Categorycard';
import TabCategories from "@/components/TabCategories/TabCategories"
import {tabCategories} from "@/constant";
import { CategoryNews } from '@/constant';
import React from 'react';

const Category = () => {
  console.log(CategoryNews);

  const tabCategoryNames = new Set(tabCategories.map(category => category.CategoryName));

  return (
    <div className='w-full h-full flex flex-wrap justify-center items-center gap-3'>
      {CategoryNews.map((category, index) => {
        if (category.TabCategories) {
          return (
            <TabCategories
              key={index}
              TabCategories={category.TabCategories}
            />
          );
        } else if (!tabCategoryNames.has(category.CategoryName)) {
          return <Categorycard key={index} index={index} {...category} />;
        }
        return null; 
      })}
    </div>
  );
};

export default Category;
