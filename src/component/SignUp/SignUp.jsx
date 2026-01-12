import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link } from 'react-router';
import { auth } from '../firebase/firebase.init';


const SignUp = () => {
    
    const handleSignUp = (event) => {
            event.preventDefault(); 
            console.log(event.target.password); 
            const name = event.target.name?.value;
            const photo = event.target.photo?.value;
            const email = event.target.email.value;
            const password = event.target.password.value;
            console.log(name, photo, email, password);

            createUserWithEmailAndPassword(auth, email, password)
            .then(result =>{
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
        }
    
    return (

        <div className = "card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl my-4" >
            <div className="card-body">
                <h1 className="text-3xl font-bold">Please SignUp Here!</h1>
                <form onSubmit={handleSignUp}>
                    <fieldset className="fieldset">
                        {/*Name Field*/}
                        <label className="label">Name</label>
                        <input type="text" name="name" className="input" placeholder="Name" />
                        {/*Email Field*/}
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />
                        {/*Photo*/}
                        <label className="label">Photo URL</label>
                        <input type="text" name="photo" className="input" placeholder="Your Photo URL" />
                        {/*Password*/}
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">SignUp</button>
                    </fieldset>
                </form>
                <p>Already Have An Account? Please <Link className='text-blue-500 hover:text-blue-900' to='/Login'>Login</Link> </p>
            </div>
        </div >
    );
};

export default SignUp;