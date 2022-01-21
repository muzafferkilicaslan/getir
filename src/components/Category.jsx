import React from 'react';

const Category = ({category, serverProduct, prod, setServerProduct, search, setCat}) => {

    const filterProducts= () => {
        const t = category.categoryName
        setCat(t)
        if(search){
            const pArray3=prod.filter((p)=>p.category===category.categoryName && p.title.toLowerCase().includes(search))
            console.log(pArray3)
            setServerProduct(pArray3)
        }else{
            // serverProduct.filter((p)=>p.category===category.categoryName)
            const pArray2=prod.filter((p)=>p.category===category.categoryName)       
            setServerProduct(pArray2)
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