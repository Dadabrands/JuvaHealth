const API_URL = "https://juva-telemed-backend.onrender.com/";
// const LOCAL_API_URL = "http://localhost:2222";


export async function registerPatient() {
    const res = await fetch(`${API_URL}api/patients/register-patient`);

    if(!res.ok) throw Error("Failed getting endpoint");

    const {data} = await res.json();
    return data;
}

export async function loginPatient() {
    const res = await fetch(`${API_URL}api/patients/login-patient`);

    if(!res.ok) throw Error("Login Error");

    const {data} = await res.json();
    return data;
}