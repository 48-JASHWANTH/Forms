import React from 'react';
import { useForm } from 'react-hook-form';

const AuthorForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };


  return (
    <div className='container  mt-5 shadow-lg p-3 mb-5 bg-white rounded'>
    <h2 className="form-heading mb-4">Authors Form</h2>
    <form onSubmit={handleSubmit(onSubmit)} className="container mt-4">
      <div className="row mb-3">
        <div className="col-md-4">
          <label htmlFor="authorName" className="form-label">Author Name</label>
          <input type="text" {...register('authorName', { required: true })} className={`form-control ${errors.authorName ? 'is-invalid' : ''}`} id="authorName"/>
          {errors.authorName && <div className="invalid-feedback">Author name is required</div>}
        </div>
        <div className="col-md-4">
          <label htmlFor="authorId" className="form-label">Author ID</label>
          <input type="text" {...register('authorId', { required: true })} className={`form-control ${errors.authorId ? 'is-invalid' : ''}`} id="authorId"/>
          {errors.authorId && <div className="invalid-feedback">Author ID is required</div>}
        </div>
        <div className="col-md-4">
          <label htmlFor="authorInstitute" className="form-label">Author Institute</label>
          <input type="text" {...register('authorInstitute', { required: true })} className={`form-control ${errors.authorInstitute ? 'is-invalid' : ''}`} id="authorInstitute"/>
          {errors.authorInstitute && <div className="invalid-feedback">Author Institute is required</div>}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-4">
          <label htmlFor="authorEmail" className="form-label">Author Email</label>
          <input type="email" {...register('authorEmail', { required: true })} className={`form-control ${errors.authorEmail ? 'is-invalid' : ''}`} id="authorEmail"/>
          {errors.authorEmail && <div className="invalid-feedback">Author email is required</div>}
        </div>
        <div className="col-md-4">
          <label htmlFor="authorPhno" className="form-label">Author Phone Number</label>
          <input type="tel" {...register('authorPhno', { required: true })} className={`form-control ${errors.authorPhno ? 'is-invalid' : ''}`} id="authorPhno"/>
          {errors.authorPhno && <div className="invalid-feedback">Author phone number is required</div>}
        </div>
        <div className="col-md-4">
          <label htmlFor="authorGender" className="form-label">Author Gender</label>
          <input type="text" {...register('authorGender', { required: true })} className={`form-control ${errors.authorGender ? 'is-invalid' : ''}`} id="authorGender"/>
          {errors.authorGender && <div className="invalid-feedback">Author gender is required</div>}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-4">
          <label className="form-label">Is Author from Industry?</label>
          <div className="form-check form-check-inline">
            <input type="radio" {...register('isAuthorFromIndustry', { required: true })} value="Yes" className="form-check-input" id="isAuthorFromIndustryYes"/>
            <label className="form-check-label" htmlFor="isAuthorFromIndustryYes">Yes</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" {...register('isAuthorFromIndustry', { required: true })} value="No" className="form-check-input" id="isAuthorFromIndustryNo"/>
            <label className="form-check-label" htmlFor="isAuthorFromIndustryNo">No</label>
          </div>
          {errors.isAuthorFromIndustry && <div className="invalid-feedback d-block">This field is required</div>}
        </div>
        <div className="col-md-4">
          <label htmlFor="authorState" className="form-label">Author State</label>
          <input type="text" {...register('authorState', { required: true })} className={`form-control ${errors.authorState ? 'is-invalid' : ''}`} id="authorState"/>
          {errors.authorState && <div className="invalid-feedback">Author state is required</div>}
        </div>
        <div className="col-md-4">
          <label htmlFor="authorCountry" className="form-label">Author Country</label>
          <input type="text" {...register('authorCountry', { required: true })} className={`form-control ${errors.authorCountry ? 'is-invalid' : ''}`} id="authorCountry"/>
          {errors.authorCountry && <div className="invalid-feedback">Author country is required</div>}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-4">
          <label className="form-label">Is Author a Student?</label>
          <div className="form-check form-check-inline">
            <input type="radio" {...register('isAuthorStudent', { required: true })} value="Yes" className="form-check-input" id="isAuthorStudentYes"/>
            <label className="form-check-label" htmlFor="isAuthorStudentYes">Yes</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" {...register('isAuthorStudent', { required: true })} value="No" className="form-check-input" id="isAuthorStudentNo"/>
            <label className="form-check-label" htmlFor="isAuthorStudentNo">No</label>
          </div>
          {errors.isAuthorStudent && <div className="invalid-feedback d-block">This field is required</div>}
        </div>
        <div className="col-md-4">
          <label className="form-label">Is Author Foreign?</label>
          <div className="form-check form-check-inline">
            <input type="radio" {...register('isAuthorForeign', { required: true })} value="Yes" className="form-check-input" id="isAuthorForeignYes"/>
            <label className="form-check-label" htmlFor="isAuthorForeignYes">Yes</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" {...register('isAuthorForeign', { required: true })} value="No" className="form-check-input" id="isAuthorForeignNo"/>
            <label className="form-check-label" htmlFor="isAuthorForeignNo">No</label>
          </div>
          {errors.isAuthorForeign && <div className="invalid-feedback d-block">This field is required</div>}
        </div>
      </div>

      
        <div className='d-flex justify-content-center'>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit(onSubmit)}>Submit</button>
        </div>
    </form>
    </div>
  );
};

export default AuthorForm;
