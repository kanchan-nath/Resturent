import React, { useState } from 'react'
import "./style.css"
import MenuCard from "./menuCard.jsx"
import MenuApp from "./menuApp.jsx"
import Navbar from "./Navbar.jsx" 

   const uniqueList = [
          ...new Set(MenuApp.map((curElem) =>{
          return curElem.category

        })),
        "All",
      ];

const Resturent = () => {
      const [ menuData, setMenuData] = useState(MenuApp)
      const [menuList, setmenuList] = useState(uniqueList)

      const filterOn = (category) =>{
        if (category === "All"){
          setMenuData(MenuApp);
          return;
        }
        const updatedData = MenuApp.filter((curElem) =>{
          return curElem.category === category
        })
        setMenuData(updatedData);
      }

     


      return (
        <>
        <Navbar filterOn = {filterOn} menuList ={menuList}/>
              <MenuCard menuData  = {menuData}/>
        </>
      )
}


export default Resturent