import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Grievance.css";

const InputField = ({ label, type, name, value, onChange, required = false }) => (
  <div className="form-floating mb-3">
    <input
      type={type}
      className="form-control"
      placeholder={label}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
    <label className="form-label">
      {label} {required && <span className="required">*</span>}
    </label>
  </div>
);

const Grievance = () => {
   const EMAILJS_SERVICE_ID = "service_mpi2myc";
  const EMAILJS_TEMPLATE_ID = "template_7p08hjm"; 
  const EMAILJS_PUBLIC_KEY = "i-pATD4P1oocD86xd";

 // const formRef = useRef();
  const fileInputRef = useRef();

  const initialState = {
    rollno: "",
    email: "",
    name: "",
    phno: "",
    adhaarno: "",
    collegename: "",
    category: "",
    msg: "",
    date: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare template parameters
      const templateParams = {
        student_rollno: formData.rollno,
        student_email: formData.email,
        student_name: formData.name,
        phone_number: formData.phno,
        aadhar_number: formData.adhaarno,
        college_name: formData.collegename,
        grievance_category: formData.category,
        grievance_message: formData.msg,
        incident_date: formData.date,
        submission_date: new Date().toLocaleDateString(),
        submission_time: new Date().toLocaleTimeString(),
        attachment_name: selectedFile ? selectedFile.name : 'No attachment',
      };

      // Method 1: Using send (without file attachment)
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // If you need file attachment, you'll need to use a different approach
      // as EmailJS free tier has limitations with file attachments
      
      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormData(initialState);
        setSelectedFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        alert('Grievance submitted successfully!');
      }
      
    } catch (error) {
      console.error('Error sending grievance:', error);
      setSubmitStatus('error');
      alert('Failed to submit grievance. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    return (
      formData.rollno &&
      formData.email &&
      formData.name &&
      formData.phno &&
      formData.adhaarno &&
      formData.collegename &&
      formData.category &&
      formData.msg &&
      formData.date
    );
  };

  return (
    <div className="container grievance-container">
      <div className="grievance-card">
        <div className="grievance-header">
          <h1>JNTUGV Student Grievance Form</h1>
        </div>
        
        <div className="required-note">
          <span className="required">*</span> Required fields
        </div>

        {/* Method 1: Using send() - Recommended */}
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <InputField 
                label="Student Roll Number" 
                type="text" 
                name="rollno" 
                value={formData.rollno} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="col-md-6">
              <InputField 
                label="Email" 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>

          <InputField 
            label="Full Name" 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />

          <div className="row">
            <div className="col-md-6">
              <InputField 
                label="Aadhar Number" 
                type="text" 
                name="adhaarno" 
                value={formData.adhaarno} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="col-md-6">
              <InputField 
                label="Phone Number" 
                type="tel" 
                name="phno" 
                value={formData.phno} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>

          <InputField 
            label="College Name" 
            type="text" 
            name="collegename" 
            value={formData.collegename} 
            onChange={handleChange} 
            required 
          />

          <InputField 
            label="Category of Grievance" 
            type="text" 
            name="category" 
            value={formData.category} 
            onChange={handleChange} 
            required 
          />

          <div className="form-floating mb-3">
            <textarea
              style={{ height: "120px" }}
              className="form-control"
              placeholder="Detailed Description of the Grievance"
              name="msg"
              value={formData.msg}
              onChange={handleChange}
              required
            />
            <label className="form-label">
              Detailed Description <span className="required">*</span>
            </label>
          </div>

          <InputField 
            label="Date of Incident" 
            type="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange} 
            required 
          />

          <div className="mb-3">
            <label className="form-label">
              Supporting Document (Optional)
            </label>
            <input 
              ref={fileInputRef}
              type="file" 
              className="form-control" 
              name="file" 
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />
            <div className="form-text">
              {selectedFile ? `Selected: ${selectedFile.name}` : 'PDF, DOC, JPG, PNG (Max 5MB)'}
            </div>
          </div>

          <div className="form-floating mt-4">
            <button 
              className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
              type="submit"
              disabled={!isFormValid() || isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Grievance'}
            </button>
          </div>

          {submitStatus === 'success' && (
            <div className="alert success" role="alert">
              Grievance submitted successfully!
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="alert error" role="alert">
              Failed to submit. Please try again.
            </div>
          )}
        </form>

       
      </div>
    </div>
  );
};

export default Grievance;