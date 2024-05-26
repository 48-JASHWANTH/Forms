import React from 'react';
import { useForm } from 'react-hook-form';

const NomineeForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='container  mt-5 shadow-lg p-3 mb-5 bg-white rounded'>
            <h2 className="form-heading mb-4">Nominee Form</h2>
    <form onSubmit={handleSubmit(onSubmit)} className="container mt-4">
        
      <div className="row mb-3">
        <div className="col-md-4">
          <label htmlFor="facultyId" className="form-label">Faculty ID</label>
          <input type="text" {...register('facultyId', { required: true })} className={`form-control ${errors.facultyId ? 'is-invalid' : ''}`} id="facultyId"/>
          {errors.facultyId && <div className="invalid-feedback">Faculty ID is required</div>}
        </div>
        <div className="col-md-4">
          <label htmlFor="nomineeName" className="form-label">Nominee Name</label>
          <input type="text" {...register('nomineeName', { required: true })} className={`form-control ${errors.nomineeName ? 'is-invalid' : ''}`} id="nomineeName"/>
          {errors.nomineeName && <div className="invalid-feedback">Nominee Name is required</div>}
        </div>
        <div className="col-md-4">
          <label htmlFor="nomineeRelation" className="form-label">Nominee Relation</label>
          <input type="text" {...register('nomineeRelation', { required: true })} className={`form-control ${errors.nomineeRelation ? 'is-invalid' : ''}`} id="nomineeRelation"/>
          {errors.nomineeRelation && <div className="invalid-feedback">Nominee Relation is required</div>}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-4">
          <label htmlFor="nomineePercentage" className="form-label">Nominee Percentage</label>
          <input type="number" {...register('nomineePercentage', { required: true })} className={`form-control ${errors.nomineePercentage ? 'is-invalid' : ''}`} id="nomineePercentage"/>
          {errors.nomineePercentage && <div className="invalid-feedback">Nominee Percentage is required</div>}
        </div>
        <div className="col-md-4">
          <label htmlFor="nomineeDateOfBirth" className="form-label">Nominee Date of Birth</label>
          <input type="date" {...register('nomineeDateOfBirth', { required: true })} className={`form-control ${errors.nomineeDateOfBirth ? 'is-invalid' : ''}`} id="nomineeDateOfBirth"/>
          {errors.nomineeDateOfBirth && <div className="invalid-feedback">Nominee Date of Birth is required</div>}
        </div>
        <div className="col-md-4">
          <label htmlFor="nomineeContiguencyOfHappening" className="form-label">Contingency of Happening</label>
          <input type="text" {...register('nomineeContiguencyOfHappening', { required: true })} className={`form-control ${errors.nomineeContiguencyOfHappening ? 'is-invalid' : ''}`} id="nomineeContiguencyOfHappening"/>
          {errors.nomineeContiguencyOfHappening && <div className="invalid-feedback">Contingency of Happening is required</div>}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-4">
          <label htmlFor="nomineeAddress" className="form-label">Nominee Address</label>
          <input type="text" {...register('nomineeAddress', { required: true })} className={`form-control ${errors.nomineeAddress ? 'is-invalid' : ''}`} id="nomineeAddress"/>
          {errors.nomineeAddress && <div className="invalid-feedback">Nominee Address is required</div>}
        </div>
        <div className="col-md-4">
          <label htmlFor="nomineeRemarks" className="form-label">Nominee Remarks</label>
          <input type="text" {...register('nomineeRemarks', { required: true })} className={`form-control ${errors.nomineeRemarks ? 'is-invalid' : ''}`} id="nomineeRemarks"/>
          {errors.nomineeRemarks && <div className="invalid-feedback">Nominee Remarks is required</div>}
        </div>
        <div className="col-md-4">
          <label htmlFor="nomineeAadharNumber" className="form-label">Nominee Aadhar Number</label>
          <input type="text" {...register('nomineeAadharNumber', { required: true })} className={`form-control ${errors.nomineeAadharNumber ? 'is-invalid' : ''}`} id="nomineeAadharNumber"/>
          {errors.nomineeAadharNumber && <div className="invalid-feedback">Nominee Aadhar Number is required</div>}
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-4">
          <label htmlFor="nomineeId" className="form-label">Nominee ID</label>
          <input type="text" {...register('nomineeId', { required: true })} className={`form-control ${errors.nomineeId ? 'is-invalid' : ''}`} id="nomineeId"/>
          {errors.nomineeId && <div className="invalid-feedback">Nominee ID is required</div>}
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-success">Prev</button>
        <button type="submit" className="btn btn-success">Next</button>
      </div>
    </form>
    </div>
  );
};

export default NomineeForm;
