import React,{Fragment} from 'react';
import { Link, useNavigate  } from "react-router-dom";
import './HomePage.css'

const HomePage = () => {
    let navigate = useNavigate();

    const GotoSignUp = () => {
        navigate('./registration')
    }
  return (
    <Fragment>
        <div className='container'>
            <div className='inner_container'>
            <div className='heading_title'>
                <h3>Welcome Page</h3>
            </div>
            <div className='wrap_content'>
                <Link to="/more-info" className='dom-link'> More Info</Link>
                <button className='signup_button' onClick={() => navigate('/registration')}>Sign Up</button>
            </div>
            </div>
        </div>
    </Fragment>
  )
}

export default HomePage;