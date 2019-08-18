import React from 'react';

const Users = ({ users }) => {
    return (
        <div>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <input className="btn btn-outline-secondary" type="button" value="Button" />
                    <input className="btn btn-outline-secondary" type="button" value="Button2" />
                </div>
            </div>
            <div className="list-group">
                <center><h1>User List</h1></center>
                {users && users.map((user) => (
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">{user.name}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Users