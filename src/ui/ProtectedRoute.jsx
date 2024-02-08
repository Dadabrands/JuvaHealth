/* eslint-disable react/prop-types */


function ProtectedRoute({children}) {


  // Retrieve access token from cookie
const accessToken = document.cookie
.split('; ')
.find(row => row.startsWith('_vercel_jwt='))
?.split('=')[1];

if (accessToken || !accessToken ) {
// Send token to server for verification
fetch('https://juva-telemed-backend.onrender.com/api/patients/get-patient', {
  method: 'GET',
  // headers: {
  //   'Authorization': `Bearer ${accessToken}`
  // }
})
.then(response => response.json()).then(data => {
  console.log(data)
  
})
.catch(error => {
  console.error('Error verifying token:', error);
  // Handle error, e.g., redirect to login page
});
} else {
// Token not found in cookie, user is not authenticated
console.log('User is not authenticated');
// Redirect to login page or display error message
}

  return (
    <div>{children}</div>
  )
}

export default ProtectedRoute