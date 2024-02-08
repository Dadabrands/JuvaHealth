const API_URL = "https://juva-telemed-backend.onrender.com/";
// const LOCAL_API_URL = "http://localhost:2222";



export async function registerPatient(data) {
    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        }
    const res = await fetch(`${API_URL}api/patients/register-patient`,options);

    if(!res.ok) throw Error("Failed getting endpoint");

    const {userData} = await res.json();
    return userData;
}



export async function loginPatient(data) {
    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        }
    const res = await fetch(`${API_URL}api/patients/login-patient`,options);

    if(!res.ok) throw Error("Login Error");

    const {userData} = await res.json();
    return userData;
}