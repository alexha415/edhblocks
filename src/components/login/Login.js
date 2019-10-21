    import React,{useState} from 'react';
    import './login.css';

    const Login = () => {
        
        
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
            try {
                const res = await fetch('/api/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name,
                        password,
                        email
                    })
                })
                const data = await res.json();
                console.log(data);
            } catch (error) {
                console.log(error);
            }
            
        }

        return (
            <div className='flex-container-col login-container'>
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
                </form>
            </div>
        )
    }
    
    export default Login
    