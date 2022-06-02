import React,{Fragment} from 'react'
import './EnquiryPage.css'

const EnquiryPage = () => {
  return (
    <Fragment>
    <div className='container'>
        <div className='inner_container'>
            <div className='profile_title'>
                <h3>Contact Us</h3>
            </div>
            <div className='email_container'>
                <span>Email to : <a href = "mailto: support@dentovation.com">support@dentovation.com</a></span>
            </div>
        </div>
    </div>
    </Fragment>
  )
}

export default EnquiryPage