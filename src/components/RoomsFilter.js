import React from 'react'
import { useContext } from 'react'
import {RoomContext} from "../context"
import Title from "./Title"



    const getUique = (items, value) => {
        return [...new Set(items.map(item => item[value]))];
    };


    const RoomsFilter = ({ rooms }) => {
        const context = useContext(RoomContext);

        const {
            handleChange,
            type,
            capacity,
            price,
            minPrice,
            maxPrice,
            minSize,
            maxSize,
            breakfast,
            pets
        } = context;
    
    
    let types = getUique(rooms, 'type');
    types =['all', ...types];
     
    types = types.map((items, index) => {
        return <option value={items} key={index}>{items}</option>
    })
    let people = getUique(rooms, "capacity");

    people = people.map((item, index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ));
    return (
        <div>
            <section className="filter-container">
                <Title title="search rooms" />
                <form className="filter-form">
                    <div className="form-group">
                        <label htmlFor="type">room type</label>
                        <select name="type" id="type" onChange={handleChange} className="form-control" value={type}>{types}</select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="capacity">Guests</label>
                        <select name="capacity" id="capacity" onChange={handleChange} className="form-control" value={capacity}>{people}</select>
                    </div>

                    
                    <div className="form-group">
                        <label htmlFor="price">room price ${price}</label>
                        <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
                    </div>

                    
                    <div className="form-group">
                        <label htmlFor="price">room size</label>
                        <div className="size-inputs">
                            <input type="number" name="minSize" value={minSize} onChange={handleChange} className="size-input"  />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="single-extra">
                            <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                            <label htmlFor="breakfast">Breakfast</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="single-extra">
                            <input type="checkbox" name="pets" checked={pets} onChange={handleChange} />
                            <label htmlFor="breakfast">Pets</label>
                        </div>
                    </div>
                </form>
            </section>
        </div>
       );
    }


export default RoomsFilter;



