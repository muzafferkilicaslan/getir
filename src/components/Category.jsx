import React from 'react';

const Category = ({category}) => {
    return (
        <div className='category' key={category.id}>
            <div className='category-item'>
            <img src={category.categoryImage} alt={category.categoryName} />
            <p>{category.categoryName}</p>
            </div>
        </div>
    );
};

export default Category;