    import React,{useState} from 'react';
    import './login.css';

    const Login = () => {
        
        
        const [formData] = useState({
            name: '',
            password: '',
            email: ''
        })

        const onChange = (e) => {
            e.preventDefault();
            
            console.log(e.target.value);
            console.log(formData[e.target.name])

            formData[e.target.name] = e.target.value;
        } 

        const onSubmit = (e) => {
            e.preventDefault();
            const {name, password, email} = formData;

            fetch('http://localhost:5000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:{
                    name,
                    password,
                    email
                }
            })
        }

        return (
            <div className='flex-container-col login-container'>
                <form onSubmit={onSubmit} className='login-form'>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' className="login-input" value={formData.name} required onChange={onChange}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' value={formData.password} className="login-input" required onChange={onChange}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' className="login-input" required value={formData.email} onChange={onChange}/>
                    </div>
                </form>
            </div>
        )
    }
    
    export default Login
    