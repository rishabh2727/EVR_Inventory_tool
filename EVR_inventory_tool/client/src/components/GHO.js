import React, { useEffect, useState } from 'react';
import "./GHO.css";

function GHODashboard() {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    // Fetch data from the backend when the component mounts
    useEffect(() => {
        fetch('http://localhost:5000/GHODashboard')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => setData(data))
            .catch(err => setError(err.message));
    }, []);
    // WE empty the array

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="dashboard-container">
            <h1>GHO Dashboard</h1>

            <table className="items-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Site Code</th>
                        <th>Reorder Level</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.site_code}</td>
                            <td>{item.reorder_level}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="buttons-container">
                <button className="dashboard-button">Add Item</button>
                <button className="dashboard-button">Update Item</button>
                <button className="dashboard-button">View Item</button>
            </div>
        </div>
    );
};

export default GHODashboard;
