import React, { useState, useEffect } from 'react'
import './tab.css'
import Menu from './menu.js'
import Item from './item'


const allCatValues = [... new Set(Menu.map((curEle) => { return curEle.category; })), "all"]

const TabMenu = () => {
        const filterItem = () => {
        console.log('Hi');
    }
    const [items, setItems] = useState(Menu);
    const findItem = (ele) => {
        console.log(ele);
        if (ele.curEle == 'all') {
            setItems(Menu);
        }
        else {
            const updatedItems = Menu.filter((currEle) => {
                console.log(currEle.category)
                console.log(ele)
                return ele.curEle === currEle.category;

            })
            setItems(updatedItems);
        }
        //console.log(updatedItems);
    }
    return (
        <>
             <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
            <hr />
            
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    {allCatValues.map((curEle) => {
                        return (<button className="btn btn-warning" onClick={() => findItem({curEle})}>{curEle}</button>)
                    })}
                </div>
            </div>
            <Item food={items} />

        </>

        )
}
export default TabMenu;