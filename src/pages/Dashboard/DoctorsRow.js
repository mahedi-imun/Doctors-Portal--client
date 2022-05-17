import React from 'react';
import { toast } from 'react-toastify';

const DoctorsRow = ({doctor,index,refetch}) => {
    const {name,img,position,email}=doctor;
    const handleDelete=(email)=>{
        fetch(`http://localhost:5000/doctors/${email}`,{
            method:'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
            
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                toast.success('successFully deleted')
                refetch()
            };
        })
    }
    return (
        <tr> 
            <td>{index+1}</td>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{position}</td>
            <th>
                <button onClick={()=>handleDelete(email)}
                class="btn btn-ghost btn-xs">delete</button>
            </th>
        </tr>
    );
};

export default DoctorsRow;