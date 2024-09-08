import React, { useEffect, useState } from 'react'
import "./User.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const User = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/getall");
                setUsers(response.data);
            } catch (error) {
                console.error('Error getting users', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>District</th>
                        <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.contact}</td>
                            <td>{user.district}</td>
                            <td>
                                <button onClick={() => onUpdate(user)} className="update-btn">Update</button>
                                <button onClick={() => onDelete(user._id)} className="delete-btn">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default User