import React from 'react'
import styles from './filter.module.css'




const Filter = ({ onFilter ,genresType, onGenreChange,nationalities,onNatChange,clearFilter}) => {




return(<div className={styles.container}>
<div>by Name : <input type="text" id='byName' onChange={onFilter} name="filter"></input></div>
<div>by Genre :<select id='byGenres' onChange={onGenreChange}> 
<option value={''}>All</option>

{genresType.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
</select></div> 

<div>by Nationality :<select id='byNat' onChange={onNatChange}> 
<option value={''}>All</option>

{nationalities.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
</select></div> 


<button className='btn btn-warning' onClick={clearFilter}>Clear</button>
  </div>)

        }
;

export default Filter