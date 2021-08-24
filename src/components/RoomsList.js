import React from 'react'
import Room from './Room'

const RoomsList = ({rooms}) =>{

    if (rooms.length === 0 ) {
        return (
            <div className="empty-search">
                <h3>Unfortunately no rooms matched your search parameters</h3>
            </div>
        )
    }
    return (
        <search className="roomslist">
          <div className="roomslist-center">
            {
                rooms.map(item =>{
                    return <Room key={item.id}  room={item}  />;
                })
            }
          </div>
        </search>
    );
}

export default RoomsList;
