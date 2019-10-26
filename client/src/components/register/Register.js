import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/authActions';

const Register = ({registerUser}) => {
    
    
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: ''
    })

    const onChange = (e) => {
        e.preventDefault();

        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    } 

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log('submit');
        const {name, password, email} = formData;
        registerUser({
            name,
            password,
            email
        })
        
    }

    return (
        <div className='flex-container-col login-container'>
            <h4 className='auth-header'>Register</h4>
            <form onSubmit={onSubmit} className='login-form'>
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' className="login-input" value={formData.name} required onChange={onChange} minLength="3"/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' value={formData.password} className="login-input" required onChange={onChange}/>
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' className="login-input" required value={formData.email} onChange={onChange}/>
                </div>
                <input type="submit" className="btn login-submit"/>
                <div className="input-group">
                    <h4>Have An Account?</h4>
                    <Link className='auth-link' to='/login'>Log In</Link>
                </div>
            </form>
        </div>
    )
}

export default connect(null, {registerUser})(Register)
