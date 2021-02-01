
import React ,{useState} from 'react';
const UserForm =(props)=>{
    const[firstName,setFirstName]=useState("");
    const[firstNameError,setFirstNameError]=useState("");
    const[lastName,setLastName]=useState("");
    const[lastNameError,setLastNameError]=useState("");
    const[email,setEmail]=useState("");
    const[emailError,setEmailError]=useState("");
    const[password,setPassword]=useState("");
    const[passwordError,setPasswordError]=useState("");
    const[confirmPassword,setConfirmPassword]=useState("");
    const[confirmPasswordError,setConfirmPasswordError]=useState("");
    // const[hasBeenSubmited,setHasBeenSubmited]=useState(false);

    // const createUser=(e)=>{
    //     e.preventDefult();
    //     const newUser ={firstName,lastName,email,password}
    //     setHasBeenSubmited(true);
    // };


    const handelFname=(e)=>{
        setFirstName(e.target.value);
        if(e.target.value.length < 2){
            setFirstNameError("First Name must be at least 2 characters");

        }
        else{
            setFirstNameError("");
        }

    }

    
    const handelLname=(e)=>{
        setLastName(e.target.value);
        if(e.target.value.length < 2){
            setLastNameError("Last Name must be at least 2 characters");

        }
        else{
            setLastNameError("");
        }

    }

    const handelEmail=(e)=>{
        setEmail(e.target.value);
        if(e.target.value.length < 2){
            setEmailError("First Name must be at least 2 characters");

        } else{
            setEmailError("");
        }
        

    }


    const handelPassword =(e)=>{
        setPassword(e.target.value);
        if(e.target.value.length<8){
            setPasswordError("Password must be at least 8 character");
        }
        else{
            setPasswordError("");
        }
        
    }

    const handelConfirmPassword =(e)=>{
        setConfirmPassword(e.target.value);
        if(password){
            if (password!==confirmPassword){
                setConfirmPasswordError("Password must match")
            }
            else{
                setConfirmPasswordError("");
            }
        }
    }
    return(    <form>

                    <div>
                        <label>First Name</label>
                        <input type="text" onChange={handelFname}/>
                        {
                            firstNameError ?
                            <p style={{color:"red"}}>{firstNameError}</p>:
                            ''
                        }
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" onChange={handelLname} />
                        {
                            lastNameError ?
                            <p style={{color:"red"}}>{lastNameError}</p>:
                            ''
                        }
                    </div>
                    <div>
                        <label>email</label>
                        <input type="text" onChange={handelEmail}/>
                        {
                            emailError ?
                            <p style={{color:"red"}}>{emailError}</p>:
                            ''
                        }
                    </div>


                    <div>
                        <label>password</label>
                        <input type="password" onChange={handelPassword} />
                        {
                            passwordError ?
                            <p style={{color:"red"}}>{passwordError}</p>:
                            ''
                        }
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input type="password" onChange={handelConfirmPassword} />
                        {
                            confirmPasswordError?
                            <p style={{color:"red"}}>{confirmPasswordError}</p>:
                            ''


                        }
                    </div>

                    <input type="submit" value="Create user"/>

                </form>)



}

export default UserForm;