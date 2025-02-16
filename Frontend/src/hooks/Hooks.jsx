import { useState, useEffect } from 'react';
import BrokerData from '../Home/BrokerData';

const Hooks = ({ NameSearch }) => {
    const [filterData, setFilterData] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchData = async () => {
            // clients
            setLoading(true); // Set loading to true when fetching starts
            try {
                const res = await fetch('http://localhost:5000/product');
                const data = await res.json();
                console.log(data)
                setFilterData(data.filter(broker =>
                    broker.Name?.toLowerCase().includes(NameSearch.toLowerCase())
                ));
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false); // Set loading to false after data is fetched
            }
        };

        fetchData();
    }, [NameSearch]);

    return (
        <div className='w-11/12 mx-auto mt-10 grid md:grid-cols-3 gap-16'>
            {
                // loading ? (
                //      <progress className="progress w-56"></progress> // Replace with your spinner
                // ) : (
                filterData.map(broker => (
                    <BrokerData key={broker.ID} broker={broker} />
                ))
                // )
            }
        </div>
    );
};

export default Hooks;