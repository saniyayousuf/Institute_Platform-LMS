import React, { useState } from 'react';
import { FbAdd } from '../../../Config/Firebase/FirebaseMethods';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel, Grid } from '@mui/material';



export default function InstituteForm() {
    const [instituteData, setInstituteData] = useState({
        name: '',
        shortName: '',
        logo: '',
        numOfCampus: 0,
        campusDetails: [],
        location: '',
        address: '',
        contact: '',
        ownerContact: '',
        ownerEmail: '',
        userType: 'Institute',
        instituteType: 'School',
    });

    const fillModel = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setInstituteData({ ...instituteData, [name]: value });
    };

    const handleAddInstitute = async () => {
        try {
            await FbAdd('institutes', instituteData); 
            setInstituteData({ ...instituteData, name: '',
             shortName: '',
             logo:"",
             numOfCampus:"",
             location : '',
             address: "",
             contact: "",
             ownerEmail: '',
             


              });
        } catch (error) {
            console.error('Error adding institute:', error);
        }
    };

    return (
        // <div>
        //     <h2>Institute Form</h2>
        //     <form>
        //         <div className="row">
        //         <div className="col-md-4 p-3 text-center ">
        //             <label>Institute Name:</label>
        //             <input
        //             className='form-control mt-2'
        //                 type="text"
        //                 name="name"
        //                 value={instituteData.name}
        //                 onChange={fillModel}
        //                  />
        //         </div>
        //         <div className="col-md-4 p-3 text-center ">
        //             <label>Institute Name:</label>
        //             <input
        //             className='form-control mt-2'
        //                 type="text"
        //                 name="shortname"
        //                 value={instituteData.shortname}
        //                 onChange={fillModel}
        //                  />
        //         </div>
        //         <div className="col-md-4 p-3 text-center ">
        //             <label>Institute Name:</label>
        //             <input
        //             className='form-control mt-2'
        //                 type="text"
        //                 name="name"
        //                 value={instituteData.name}
        //                 onChange={fillModel}
        //                  />
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-md-4 p-3 text-center ">
        //             <label>Institute Name:</label>
        //             <input
        //             className='form-control mt-2'
        //                 type="text"
        //                 name="name"
        //                 value={instituteData.name}
        //                 onChange={fillModel}
        //                  />
        //         </div>
        //         <div className="col-md-4 p-3 text-center ">
        //             <label>Institute Name:</label>
        //             <input
        //             className='form-control mt-2'
        //                 type="text"
        //                 name="name"
        //                 value={instituteData.name}
        //                 onChange={fillModel}
        //                  />
        //         </div>
        //         <div className="col-md-4 p-3 text-center ">
        //             <label>Institute Name:</label>
        //             <input
        //             className='form-control mt-2'
        //                 type="text"
        //                 name="name"
        //                 value={instituteData.name}
        //                 onChange={fillModel}
        //                  />
        //         </div>
        //     </div>


        //         {/* Add other form fields similarly */}
        //         <div className="p-2">
        // <Button
        //    type="button"
        //     onClick={handleAddInstitute}
        //      variant="outlined">Add Institute</Button>
        
        // </div>
                
        //     </form>
        // </div>
        <div>
        <h2>Institute Form</h2>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Institute Name"
                name="name"
                value={instituteData.name}
                onChange={(e:any) => fillModel(e)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Short Name"
                name="shortName"
                value={instituteData.shortName}
                onChange={(e:any) => fillModel(e)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Logo"
                name="logo"
                value={instituteData.logo}
                onChange={(e:any) => fillModel(e)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Number of Campus"
                name="numOfCampus"
                value={instituteData.numOfCampus}
                onChange={(e:any) => fillModel(e)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Location"
                name="location"
                value={instituteData.location}
                onChange={(e:any) => fillModel(e)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={instituteData.address}
                onChange={(e:any) => fillModel(e)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Contact"
                name="contact"
                value={instituteData.contact}
                onChange={(e:any) => fillModel(e)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Owner Contact"
                name="ownerContact"
                value={instituteData.ownerContact}
                onChange={(e:any) => fillModel(e)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Owner Email"
                name="ownerEmail"
                value={instituteData.ownerEmail}
                onChange={(e:any) => fillModel(e)}
              />
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel>User Type</InputLabel>
                <Select
                  name="userType"
                  value={instituteData.userType}
                  onChange={(e:any) => fillModel(e)}
                >
                  <MenuItem value="Institute">Institute</MenuItem>
                  <MenuItem value="School">School</MenuItem>
                  <MenuItem value="College">College</MenuItem>
                  <MenuItem value="University">University</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel>Institute Type</InputLabel>
                <Select
                  name="instituteType"
                  value={instituteData.instituteType}
                  onChange={(e:any) => fillModel(e)}
                >
                  <MenuItem value="School">School</MenuItem>
                  <MenuItem value="College">College</MenuItem>
                  <MenuItem value="University">University</MenuItem>
                  <MenuItem value="Institute">Institute</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <div className="p-2">
            <Button
              type="button"
              onClick={handleAddInstitute}
              variant="outlined"
            >
              Add Institute
            </Button>
          </div>
        </form>
      </div>
    );
};


