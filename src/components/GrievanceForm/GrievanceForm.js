import React, { useState } from "react";
import axios from 'axios';
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
    file: null,
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const sendMail = async () => {
    alert("Sending Mail...");
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const response = await axios.post("http://117.221.101.104:8888/api/mailing/send-grievance", form);
      if (response.data.success === true) {
        alert("Grievance Mail Sent");
      } else {
        alert("No response");
      }
    } catch (error) {
      alert("Error sending grievance: " + error.message);
    }
  };

  return (
    <div className="container w-50 cont">
      <div className="form-control mb-3">
        <div>
          <center>
            <h1>JNTUGV Student Grievance Form</h1>
          </center>
        </div>
        <hr />
        <div style={{ color: "red" }}>* denotes a required field</div>
      </div>
      <form>
        <InputField label="Student Roll Number" type="text" name="rollno" value={formData.rollno} onChange={handleChange} required />
        <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required />
        <InputField label="Full Name" type="text" name="name" value={formData.name} onChange={handleChange} required />
        <InputField label="Aadhar Number" type="number" name="adhaarno" value={formData.adhaarno} onChange={handleChange} required />
        <InputField label="College Name" type="text" name="collegename" value={formData.collegename} onChange={handleChange} required />
        <InputField label="Phone Number" type="number" name="phno" value={formData.phno} onChange={handleChange} required />
        <InputField label="Category of Grievance" type="text" name="category" value={formData.category} onChange={handleChange} required />
        <div className="form-floating mb-3">
          <textarea
            style={{ height: "22vh" }}
            className="form-control"
            placeholder="Detailed Description of the Grievance"
            name="msg"
            value={formData.msg}
            onChange={handleChange}
            required
          />
          <label className="form-label">
            Detailed Description of the Grievance <span className="required">*</span>
          </label>
        </div>
        <InputField label="Date of Incident" type="date" name="date" value={formData.date} onChange={handleChange} required />
        <div className="mb-3">
          <label className="form-label">
            Any Supporting Documents (Attachment) <span className="required">*</span>
          </label>
          <input type="file" className="form-control" name="file" required onChange={handleFileChange} />
        </div>
        <div className="form-floating m-5">
          <button className="btn btn-success w-100" type="button" onClick={sendMail}>
            Send Grievance
          </button>
        </div>
      </form>
    </div>
  );
};

export default Grievance;
