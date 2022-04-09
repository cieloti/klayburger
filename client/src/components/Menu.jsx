import React, { useContext } from "react";
import { getMenuItems } from "../data/data";
import { Link } from "react-router-dom";
import icon from "../images/1.jpg";
import { TransactionContext } from "../context/TransactionContext";

const Card = (props) => {
    const { order } = useContext(TransactionContext);

    return (
        <div className='flex justify-center items-center px-2 py-2'>
            <div id="app" className="bg-white w-64 h-30 rounded shadow-md flex card text-grey-darkest">
                <img className="w-1/2 h-full rounded-l-sm" src={icon} alt="Room Image" />
                <div className="w-full flex flex-col">
                    <div className="p-4 pb-0 flex-1">
                        <h3 className="font-light mb-1 text-grey-darkest">{props.name}</h3>
                        <div>Potato, Coke</div>
                        <span className="text-1xl text-grey-darkest">{props.price} Klay</span>
                    </div>
                    <button className='px-2 py-2 bg-indigo-100 hover:bg-indigo-200' data-msg={props.price} onClick={order}>Buy Now</button>
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