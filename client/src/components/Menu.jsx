import React from 'react';
import { getMenuItems } from "../data/data";
import { Link } from "react-router-dom";
import icon from "../images/1.jpg";

const Card = (props) => {
    return (
        // <div className='bg-red-100 items-center'>
        //     <div className='text-sm text-center'>{props.name}</div>
        //     {/* <img className=' w-24 h-24 px-2 py-2' src={props.image} alt="Burger" /> */}
        //     <img className='h-full py-2 pr-4 ml-8 w-24 h-24' src={props.image} alt="Burger" />
        //     <div className='text-center'>{props.price}</div>
        //     <div className='text-center'>{props.amount}</div>
        // </div>
        // <div class="flex justify-center items-center h-screen bg-blue-lightest">
        <div className='flex justify-center items-center px-2 py-2'>
            <div id="app" className="bg-white w-64 h-30 rounded shadow-md flex card text-grey-darkest">
                <img className="w-1/2 h-full rounded-l-sm" src={icon} alt="Room Image" />
                {/* <img class="w-1/2 h-full rounded-l-sm" src="https://bit.ly/2EApSiC" alt="Room Image" /> */}
                <div className="w-full flex flex-col">
                    <div className="p-4 pb-0 flex-1">
                        <h3 className="font-light mb-1 text-grey-darkest">{props.name}</h3>
                        {/* <div class="text-xs flex items-center mb-4">
                            <i class="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
                            Soho, London
                        </div> */}
                        <div>Potato, Coke</div>
                        <span className="text-1xl text-grey-darkest">${props.price}</span>
                        {/* <div class="flex items-center mt-4">
                            <div class="pr-2 text-xs">
                                <i class="fas fa-wifi text-green"></i> Free WiFi
                            </div>
                            <div class="px-2 text-xs">
                                <i class="text-grey-darker far fa-building"></i> 2mins to center
                            </div>
                        </div> */}
                    </div>
                    <button className='px-2 py-2 bg-indigo-100 hover:bg-indigo-200'>Buy Now</button>
                    {/* <div class="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                        Buy Now
                        <i class="fas fa-chevron-right"></i>
                    </div> */}
                </div>
            </div>
        </div>
    )
};

const Menu = () => {
    let menuItems = getMenuItems();
    return (
    <div className='bg-black flex justify-center'>
        <div className='sm:w-3/4 flex flex-wrap justify-start bg-black sm:px-10'>
          {menuItems.map((menuItem) => (
              <Card key={menuItem.key} name={menuItem.name} image={menuItem.image}
                price={menuItem.price} amount={menuItem.amount}/>
          ))}
        </div>
    </div>
      
    );
}

export default Menu