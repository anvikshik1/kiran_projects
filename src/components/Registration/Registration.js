import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Registration = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("data",data);
  }

  return (
    <Fragment>
    <div className='container'>
      <div className='inner_container'>
        <div className="logo_txt">
            <h3>Dentovation</h3>
        </div>
        <div className='heading_title'>
            <h3>Sign Up From Here</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form_field'>
            <label>Name <span className='required-start'>*</span> </label>
            <input type="text" name="email" {...register("email", { required: true })}/>
            {errors.email && <span className='error_msg'>Email field is required</span>}
          </div>
          <div className='form_field'>
            <label>Password <span className='required-start'>*</span> </label>
            <input type="password" name="password" {...register("password", { required: true })} />
            {errors.password && <span className='error_msg'>Password field is required</span>}
            {/* <Link to="/registration" className='fotgot_pass_txt'>Forgot Password?</Link> */}
          </div>
          <div className='form_field'>
            <label>Payment <span className='required-start'>*</span></label>
            <input type="text" name="payment" {...register("payment", { required: true })} />
            {errors.payment && <span className='error_msg'>Payment field is required</span>}
          </div>
          <div className='form_field'>
            <input type="submit" value="Sign up" className='submit_btn' />
          </div>
        </form>
        <div className='not_a_member'>
           <span>Already Have a Account? <Link to="/profile" className='fotgot_pass_txt'>Login Here?</Link></span>              
        </div>
      </div>
    </div>
  </Fragment>
  )
}

export default Registration