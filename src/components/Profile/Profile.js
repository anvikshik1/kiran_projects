import {React,Fragment} from 'react';
import { useForm } from 'react-hook-form';
import "./Profile.css"

const Profile = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);
  
  return (
    <Fragment>
    <div className='container'>
        <div className='inner_container'>
        <div className='heading_title'>
            <h3>Profile Page</h3>
        </div>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form_field'>
            <label>FirstName <span className='required-start'>*</span> </label>
            <input type="text" placeholder="First name" {...register("first_name", {required: true, maxLength: 80})} />
            {errors.first_name && <span className='error_msg'>First Name field is required</span>}
          </div>
          <div className='form_field'>
            <label>LastName <span className='required-start'>*</span> </label>
            <input type="text" placeholder="Last name" {...register("last_name", {required: true, maxLength: 100})} />
            {errors.last_name && <span className='error_msg'>Last Name field is required</span>}
          </div>
          <div className='form_field'>
          <label>Gender </label>
          <select {...register("gender")} className="select_option">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          </div>    
          <div className='form_field'>
            <label>Profile Photo <span className='required-start'>*</span> </label>
            <input type="file" {...register("profile_photo", {required: true})}  />
            {errors.profile_photo && <span className='error_msg'>Profile Photo field is required</span>}
          </div>
          <div className='form_field'>
            <label>Address <span className='required-start'>*</span> </label>
            <input type="text" placeholder="Address" {...register("address", {required: true, maxLength: 100})} />
            {errors.address && <span className='error_msg'>Address field is required</span>}
          </div>
          <div className='form_field'>
            <input type="submit" value="Submit" className='submit_btn' />
          </div>
      </form>
    </div>
    </div>
    </Fragment>
  );
}

export default Profile


// <div classname="profile_title">
//         <h3>Profile Page</h3>
//       </div>
