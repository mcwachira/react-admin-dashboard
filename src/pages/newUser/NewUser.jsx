import React from 'react'
import './newUser.css'
const NewUser = () => {
    return (
        <div className="newUser">

            <h1 className="newUserTitle">
                New User
            </h1>

            <form className="newUserForm">
                <div className="newUserItem">
                    <label>
                        UserName
                    </label>

                    <input type="text" placeholder='John Smith' />
                </div>
                <div className="newUserItem">
                    <label>
                        Email
                    </label>

                    <input type="email" placeholder='John@gmail.com' />
                </div>
                <div className="newUserItem">
                    <label>
                        Password
                    </label>

                    <input type="password" placeholder='password' />
                </div>
                <div className="newUserItem">
                    <label>
                        Phone
                    </label>

                    <input type="text" placeholder='+12345678' />
                </div>
                <div className="newUserItem">
                    <label>
                        Address
                    </label>

                    <input type="text" placeholder='New York USA' />
                </div>

                <div className="newUserItem">
                    <label >
                        Gender
                    </label>

                    <div className="newUserGender">
                        <input type='radio' name='gender' id='male' value='male' />
                        <label for='Male'>
                            Male
                        </label>
                        <input type='radio' name='gender' id='female' value='female' />
                        <label for='Female'>
                            Female
                        </label>

                        <input type='radio' name='gender' id='others' value='others' />

                        <label for='Others'>
                            Others
                        </label>
                    </div>
                </div>

                <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}

export default NewUser