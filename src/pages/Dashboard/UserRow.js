import React from 'react';
import { toast } from 'react-toastify';
const UserRow = ({ user, index }) => {
    const { email, role, refetch } = user
    const handleMakeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                res.json()
                if (res.status === 403) {
                    toast.error('cant add ')
                }
            })

            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('successfully made ')
                }
            })

    }
    return (
        <tr>
            <th>{index + 1}</th>
            <th>{user.email}</th>
            <th>{role === 'admin' || <button
                onClick={() => handleMakeAdmin()}
                className="btn btn-xs">make</button>}</th>
            <th><button className="btn btn-xs">remove</button></th>

        </tr>
    );
};

export default UserRow;