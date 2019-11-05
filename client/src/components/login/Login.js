    import React,{useState} from 'react';
    import {Link} from 'react-router-dom';
    import './login.css';
    import {connect} from 'react-redux';
    import {loginUser} from '../../actions/authActions';
    import Spinner from '../layout/spinner/Spinner';

    const Login = ({loginUser, loading}) => {
        
        
        const [formData, setFormData] = useState({
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
            const {password, email} = formData;
            loginUser({password,email});
        }

        return (
            <div className='flex-container-col login-container'>
                <h4 className='auth-header'>Login</h4>
                <form onSubmit={onSubmit} className='login-form'>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' className="login-input" required value={formData.email} onChange={onChange}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' value={formData.password} className="login-input" required onChange={onChange}/>
                    </div>
                    <input type="submit" className="btn login-submit"/>
                    <div className="input-group">
                        <h4>Don't Have An Account?</h4>
                        <Link className='auth-link' to='/register'>Sign Up</Link>
                    </div>
                </form>
                {loading ? <Spinner/> : ''}
            </div>
        )
    }
    
    export default connect( state => ({
        loading: state.auth.loading
    }),{loginUser})(Login)
    