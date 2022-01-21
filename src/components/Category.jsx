import React from 'react';

const Category = ({category, setServerProduct, pArray, search, setCat}) => {

    const filterProducts= () => {
        const t = category.categoryName
        setCat(t)
        if(search){
            setServerProduct(pArray.filter((p)=>p.category===category.categoryName && p.title.toLowerCase().includes(search)))
        }else{
            console.log("hello")
            setServerProduct(pArray.filter((p)=>p.category===category.categoryName))        
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