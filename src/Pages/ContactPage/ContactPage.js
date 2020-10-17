import React, { useState, useEffect } from "react";
import style from "./contactpage.module.css";
import TableWiew from "../../Components/TableView";
import CardView from "../../Components/CardView";
import Pagination from "../../Components/Pagination";
import PerPage from "../../Components/ContactPerPage";
import fullName from '../../Utils/createFullName'
import Filter from "../../Components/Filter"
import Switch from "react-switch";

const itemPerPage = [5, 10, 20, "All"];

const randomIntegerInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const URL = `https://randomuser.me/api/?results=${randomIntegerInRange(0, 100)}`;

const ContactWiew= ()=>{

const [contacts, setContacts] = useState([]);
const [isTabular,setIsTabular]=useState(true);
const [perPage,setPerPage]=useState(5)
const [currentPage,setCurrentPage]=useState(1)
const [sortedContacts, setSortedContacts] = useState([]);

const [searchName, setSearchName] = useState("");
const [filterByGenres, setFilterByGenres] = useState("");
const [filterByNation, setFilterByNation] = useState("");
const [currentSort,setCurrentSort]=useState('default');

  useEffect(() => {
    fetch(URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then(jsonResponse => {
        setContacts(jsonResponse.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleChangeView = (e) => {
    setIsTabular(!isTabular)
  };
    

 const  handleChange = (event) => {
    if (event.currentTarget.value === "All") {
      setPerPage(contacts.length)
      setCurrentPage(1)
    } else
     {
        setPerPage(event.target.value)
        setCurrentPage(1)
      };
  };

const handleSearchName=(e)=>{
  e.preventDefault();
  setSearchName(e.target.value)
}

const getArrayIfGenres=[...new Set(contacts.map(item=>
  item.gender
))]

const getAllNationalities=[...new Set(contacts.map(item=>
  item.nat))]


  const handleGenresChange=event=>{
      setFilterByGenres(event.target.value)
      setCurrentPage(1)
  }
  
  const handleNationChange=event=>{
    setFilterByNation(event.target.value)
    setCurrentPage(1)
  }

  const handleClearFilter=()=>{
    document.getElementById('byName').value = '';
    document.getElementById('byGenres').value = 'All';
    document.getElementById('byNat').value = 'All';
    setSearchName('')
    setFilterByGenres('')
    setFilterByNation('')
}

    console.log(contacts);

<<<<<<< HEAD

// -------------------------------------

const sortTypes = {
  up: {
    class: 'sorting_desc',
    fn: (a, b) => { let x = fullName(a).toUpperCase(),
      y = fullName(b).toUpperCase();
      return x === y ? 0 : x < y ? 1 : -1;
    }

      
  },
  down: {
    class: 'sorting_asc',
    fn: (a, b) =>  {let x = fullName(a).toUpperCase(),
      y = fullName(b).toUpperCase();
      return x === y ? 0 : x > y ? 1 : -1;}
  },
  default: {
    class: 'sorting',
    fn: (a, b) =>  {let x = fullName(a).toUpperCase()
      return x
  }}
};

const handleSortChange = () => {
  let nextSort;
  if (currentSort === 'down') nextSort = 'up';
  else if (currentSort === 'up') nextSort = 'default';
  else if (currentSort === 'default') nextSort = 'down';

  setCurrentSort(nextSort)
};



  useEffect(() => {
    const searchRegex = searchName && new RegExp(`${searchName}`, "gi");

    const result = contacts.filter(
      contact =>{
        return(
        (!searchRegex || searchRegex.test(fullName(contact).toLowerCase())) &&
        (!filterByGenres || contact.gender === filterByGenres) && 
        (!filterByNation || contact.nat === filterByNation)) 
      }
=======
    return (
      <div className={style.container}>
        <div className={style.selectContainer}>
          <PerPage onChange={this.handleChange} itemPerPage={itemPerPage} />
          <div className={style.switchContainer}>
            <span>Table view :</span>
            <Switch onChange={this.handleChangeView} checked={isTabular} />
          </div>
        </div>
        {isTabular ? (
          <TableWiew users={currentPosts} />
        ) : (
          <CardView items={currentPosts} />
        )}

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={contacts.length}
          paginate={paginate}
          active={currentPage}
        />
      </div>
>>>>>>> c77dae2e9364eb2aa200e16746ecdcbba7af189e
    );
    setSortedContacts(result);

  }, [searchName, contacts,filterByGenres,filterByNation]);

  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;

console.log(sortedContacts)

  let currentPosts=[...sortedContacts].sort(sortTypes[currentSort].fn).slice(indexOfFirstItem,indexOfLastItem);


  const paginate = (pageNumber) =>setCurrentPage(pageNumber);


  return(
    <div className={style.container}>
<Filter genresType={getArrayIfGenres} onGenreChange={handleGenresChange} onFilter={handleSearchName} nationalities={getAllNationalities} onNatChange={handleNationChange} clearFilter={handleClearFilter} ></Filter>
          <div className={style.utilyWrapper}>
         <PerPage onChange={handleChange} itemPerPage={itemPerPage} />
          <Switch onChange={handleChangeView} checked={isTabular} />
            </div>
            
         {isTabular ? (
              <TableWiew users={currentPosts} onSortChange={handleSortChange} currentSort={currentSort}  sortTypes={sortTypes}/>
            ) : (
              <CardView items={currentPosts} />
            )}
    
            <Pagination
              postsPerPage={perPage}
              totalPosts={sortedContacts.length}
              paginate={paginate}
              active={currentPage}
            />
         
          </div>
  )
}
export default ContactWiew;



