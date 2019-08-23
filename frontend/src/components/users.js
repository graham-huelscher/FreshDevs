import React from 'react';

const Users = ({ users }) => {
    return (
        <div>

            <div className="list-group">
                <center><h1>User List</h1></center>
                <ul className="list-group">
                    {users && users.map((user) => (

                        <li className="list-group-item">
                            <img src={user.imgURL} style={{ width: "5%", height: "5%", marginRight: "30px" }} />
                            {user.name}
                        </li>

                    ))}
                </ul>
            </div>
        </div>
    )
};

export default Users