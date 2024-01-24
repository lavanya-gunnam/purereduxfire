

import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { addEmployee, deleteEmployee, getEmployee, updateEmployee } from "../redux/Api";
import { connect } from "react-redux";
import { select_Id, setData } from "../redux/Action";


const Employee = ({ data, setData }) => {
  const [idSelected, setIdSelected] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    gmail:'',
    phoneNumber:'',
  });
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    getEmployees();
  }, []);
  

  const getEmployees = async () => {
    const Employees = await getEmployee();
    setData(Employees);
  }

  const handleChange = (event, field) => {
    setFormData({ ...formData, [field]: event.target.value });
  }

  const handleEdit = (id) => {
    const selectEmployee = data.find((Employee) => Employee.id === id);
    select_Id(id);
    setIdSelected(id);
    setFormData({
      name: selectEmployee.name,
      gmail: selectEmployee.gmail,
      phoneNumber: selectEmployee.phoneNumber,
    });
    setIsEditMode(true);
  };

  const handleUpdate = async () => {
    try {
      if (formData.name === '') {
        alert("Please fill in the data");
      } else {
        await updateEmployee(idSelected, formData);
        getEmployees();
        select_Id(null);
        setFormData({
          name: '',
          gmail: '',
          phoneNumber: '',
        });
        setIsEditMode(false);
      }
    } catch (error) {
      console.error('Error updating Employee:', error);
    }
  }

  const handleDelete = async (id) => {
    try{
      await deleteEmployee(id)
      alert("Employee is successfully Deleted....!")
      getEmployees();
    }catch(error){
      console.log("Employee Successfully Deleted")
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
debugger
    try {
      if (formData.name !== ''&& formData.gmail !== ''&& formData.phoneNumber !== '' ) {
        await addEmployee(formData);
        getEmployees();
        setFormData({
          name: '',
          gmail: '',
          phoneNumber: '',
        });
        setIsEditMode(false);
      } else {
        alert("Please enter a name");
      }
    } catch (error) {
      console.error('Error adding Employee:', error);
    }
  }

  return (
    <>
     <div className="row ">
          <div className="col-md-5">
          <h2 className="mt-3">Employee information Form</h2>
      <div className="container m-4" style={{ border: '2px solid black', padding: '10px' }}>
      <div className="row row-cols-md-1 g-3">
  <div className="col ">
   
    <input
      type="text"
      className="form-control shadow"
      id="name"
      placeholder="Enter your name"
      value={formData.name}
      onChange={(e) => handleChange(e, 'name')}
    />
  </div>
  <div className="col">
    <input
      type="email"
      className="form-control shadow"
      id="gmail"
      placeholder="Enter your Gmail"
      value={formData.gmail}
      onChange={(e) => handleChange(e, 'gmail')}
    />
  </div>
  <div className="col">
    <input
      type="tel"
      className="form-control shadow"
      id="phoneNumber"
      placeholder="Enter your phone number"
      value={formData.phoneNumber}
      onChange={(e) => handleChange(e, 'phoneNumber')}
    />
  </div>
</div>

        {isEditMode ? (
          <button type="submit" className="btn btn-primary mt-2" onClick={handleUpdate}>
            Update
          </button>
        ) : (
          <button type="submit" className="btn btn-dark mt-2" onClick={handleSubmit}>
            Add
          </button>
        )}
      </div> 


          </div>
       
         
          <div className="col-md-6">
          <h2 className="mt-3">Records</h2>
      <div className='container'>
        <div className='row row-cols-md-4 justify-content-center'>
        
            <table className="table mt-3 border shadow">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">gmail</th>
                  <th scope="col">phoneNumber</th>
                
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody className=''>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.gmail}</td>
                    <td>{item.phoneNumber}</td>
                    <td>
                      <button type="button" className="btn btn-dark" onClick={() => handleEdit(item.id)}> Edit </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-dark" onClick={ ()=> handleDelete(item.id)}>Delete </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
      </div>
      </div>
    </>
  );

}

const mapStateToProps = state => {
  console.log("mapstate",mapStateToProps);
  return {

    data: state.data,
    selectEmployeeId: state.selectEmployeeId,
  }
 
}

const mapDispatchToProps = {
  setData,
  select_Id,
}

export default connect(mapStateToProps, mapDispatchToProps)(Employee);

