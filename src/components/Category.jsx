import React from 'react';

const Category = ({category, setProd, pArray, search, setCat}) => {

    const filterProducts= () => {
        const t = category.categoryName
        setCat(t)
        if(search){
            setProd(pArray.filter((p)=>p.category===category.categoryName && p.title.toLowerCase().includes(search)))
        }else{
            setProd(pArray.filter((p)=>p.category===category.categoryName))        
        } 
        
    }

    return (
        <div 
        className='category' 
        key={category.id}
        onClick={filterProducts}
        >
            <div className='category-item'>
            <img src={category.categoryImage} alt={category.categoryName} />
            <p>{category.categoryName}</p>
            </div>
        </div>
    );
};

export default Category;