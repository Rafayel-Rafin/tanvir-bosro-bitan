import React from 'react';
import { Link } from 'react-router-dom';

const BrokerData = ({ broker }) => {
    const BrokerName = broker.Name;
    const price = broker.price;
    const Picture_URL = broker.Picture_URL;
    const broker_id = broker._id;

    return (
        <div className="card glass w-full">
            <figure>
                <img className='w-full h-80 object-contain'
                    src={Picture_URL}
                    // src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="car!" />
            </figure>
            <div className="card-body">
                {/* <div className=""> */}
                <h2 className="text-2xl">{BrokerName}</h2>
                <p className='col-span-2'>Price: {price} BDT</p>
                {/* </div> */}
                {/* <span>Area : {BrokerArea}</span> */}
                {/* <span>Phone : {phone}</span> */}
                <div className="card-actions  justify-center">
                    <Link to={`/client/${broker_id}`} className="btn btn-primary">More info</Link>
                </div>
            </div>
        </div>
    );
};

export default BrokerData;