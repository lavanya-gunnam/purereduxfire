import axios from "axios";

const URL = 'https://redux-adaa5-default-rtdb.firebaseio.com';

export const getEmployee = async () => {
    try {
        const response = await axios.get(`${URL}/employee.json`);
        const jsonData = response.data;

        if (jsonData === null) {
            return [];
        } else {
            return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
        }
    } catch (error) {
        console.error('Error fetching employee data:', error);
        return [];
    }
}

export const addEmployee = async (formData) => {
    debugger
    try {
        if (formData.name !== ''&& formData.gmail !== ''&& formData.phoneNumber !== '') {
            const response = await axios.post(`${URL}/employee.json`, formData);
            // alert("Data successfully stored in Firebase");
            console.log(response.data, 'This is Data');
        } else {
            alert('Please enter name and');
        }
    } catch (error) {
        alert('Error storing data in Firebase:', error);
    }
}


 export const updateEmployee = async (id,formData) => {
    try{
        await axios.put(`${URL}/employee/${id}.json`,formData);
        console.log("Hey I'm Updating...!")
    }catch(error){
        console.log('error occured')
    }
 };


 export const deleteEmployee = async (id) => {
    try{
        await axios.delete(`${URL}/employee/${id}.json`)
    }catch (error) {
        console.log('error occured')
      }
 }
