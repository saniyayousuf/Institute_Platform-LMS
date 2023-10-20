
import React, { useState } from 'react';
import Input from '../../../Components/BAInput';
import BAButton from '../../../Components/BAButton';
import { FbAdd } from '../../../Config/Firebase/FirebaseMethods';
import Dropdown from '../../../Components/DropDown';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    contact: '',
    cnic: '',
    lastQualification: '',
    course: '',
    institute: 'SAIMS', 
    section: '',
    email: '',
    password: '',
    city: '',
    country: '',
    dateOfBirth: '',
    gender: 'male',
    address: '',
  });

  const fillModel = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await FbAdd('studentsData', formData); 
      alert('Student added successfully!');
      
      setFormData({
        studentName: '',
        fatherName: '',
        contact: '',
        cnic: '',
        lastQualification: '',
        course: '',
        institute: 'SAIMS',
        section: '',
        email: '',
        password: '',
        city: '',
        country: '',
        dateOfBirth: '',
        gender: 'male',
        address: '',
      });
    } catch (error) {
      console.error('Error adding student: ', error);
    }
  };
  const qualificationOptions = [
    { label: 'Matriculation', value: 'matric' },
    { label: 'Intermediate', value: 'inter' },
    { label: "Bachelor's Degree", value: 'bachelors' },
    { label: "Master's Degree", value: 'masters' },
    { label: "PH.d Degree", value: 'phd' },
  
  ];
  const courseOptions = [
    { label: 'Mathematics', value: 'math' },
    { label: 'Science', value: 'science' },
    { label: 'History', value: 'history' },
    { label: 'Web Development', value: 'web_dev' },
  
  ];

const Cities = [
  { label: 'Karachi', value: 'karachi' },
  { label: 'Lahore', value: 'lahore' },
  { label: 'Islamabad', value: 'islamabad' },
  { label: 'Multan', value: 'multan' },
  { label: 'Rawalpindi', value: 'rawalpindi' },
];


const countries = [
  { label: 'Pakistan', value: 'pakistan' },
  { label: 'India', value: 'india' },
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Canada', value: 'canada' },
];


const sectionOptions = [
  { label: 'Section A', value: 'section_a' },
  { label: 'Section B', value: 'section_b' },
  { label: 'Section C', value: 'section_c' },
  { label: 'Section D', value: 'section_d' },
  { label: 'Section E', value: 'section_e' },
];

  return (
    <div >
      <h2 className='text-center'>Student Form</h2>
      <form className=''>
        <div className="row d-flex justify-center align-items-center">
          <div className="col-md-4">
            <Input
             className='w-100'
            variant='outlined'
              label="Student Name"
              name="studentName"
              onChange={fillModel}
              required
              value={formData.studentName} 
              />

          </div>
       
          <div className="col-md-4">
            <Input
             className='w-100'
              label="Father Name"
              name="fatherName"
              onChange={fillModel}
              required
              value={formData.fatherName}
               />

          </div>
          <div className="col-md-4">
            <Input
             className='w-100'
              label="Contact"
              name="contact"
              onChange={fillModel}
              required
              value={formData.contact}
               />

          </div>
          <div className="col-md-4">

            <Input
             className='w-100'
              label="CNIC"
              name="cnic"
              onChange={fillModel}
              required
              value={formData.cnic}
               />
          </div>
          <div className="col-md-4">
            <Input
             className='w-100'
              label="Email"
              name="email"
              type="email"
              onChange={fillModel}
              required
              value={formData.email}
               />

          </div>
          <div className="col-md-4">
            <Input
             className='w-100'
              label="Password"
              name="password"
              type="password"
              onChange={fillModel}
              required
              value={formData.password}
               />

          </div>
          <div className="col-md-4">

          <Dropdown
           label="Last Qualification" 
      
          name="lastQualification" 
          value={formData.lastQualification}
           onChange={fillModel}
           options={qualificationOptions} />
          </div>
          
          <div className="col-md-4">
          <Dropdown
           label="Section" 
           
          name="section" 
          value={formData.section}
           onChange={fillModel}
           options={sectionOptions} />

          </div>
          
          <div className="col-md-4">
          <Dropdown 
          label="Course"
           name="course"
            value={formData.course} 
            onChange={fillModel} 
            options={courseOptions} />


          </div>
          <div className="col-md-4">
          <Input
          className='w-100'
           label="Institute" 
           name="institute" 
           disabled 
           value={formData.institute} />
          </div>
          <div className="col-md-4">
          <Dropdown
           label="City" 
           
          name="city" 
          value={formData.city}
           onChange={fillModel}
           options={Cities} />

          </div>
          <div className="col-md-4">
          <Dropdown
           label="Country " 
           
          name="country" 
          value={formData.country}
           onChange={fillModel}
           options={countries} />

          </div>
          <div className="col-md-4">

            <Input
             className='w-100'
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              onChange={fillModel}
              value={formData.dateOfBirth}
               />
          </div>
          <div className="col-md-4 ">
            <Input
              className='w-100'
              label="Address"
              name="address"
              onChange={fillModel}
              value={formData.address} 
              />

          </div>
          <div className="col-md-4 py-2 ">
            <label>Gender</label>
            <div className=''>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={fillModel}
                 />

              <label className='p-3 m-2' >Male</label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={fillModel} 
                />
              <label className='p-3 m-2'>Female</label>
            </div>
          </div>
        </div>
<div className='align-items-center'>
        <BAButton label="Submit" variant="outlined" onClick={handleSubmit} />

</div>
      </form>
    </div>
  );
};

export default StudentForm;
