// Secret ki file bnai ha 

import { JWT_SECRET } from "./environment.mjs";

const jwtSecret = JWT_SECRET;   // This line creates a secret key ' ' with 6 characters.

export default jwtSecret;
            


    

// import { useState } from 'react';
// import './register.css';
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const navigate = useNavigate();
  
//   const [firstName, setFirstName] = useState(''); 
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [number, setNumber] = useState('');
//   const [error, setError] = useState('');

  
  
//   const UserRegistered = async () => {
//     // Basic validation
//     if (!firstName || !lastName || !email || !password || !number) {
//       setError('All fields are required');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:3001/users/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ firstname: firstName, lastname: lastName, email, password, number }) // Ensure the field names match the backend requirements
//       });
//       console.log(firstName, lastName, email, password, number);

//       const json = await response.json();
//       console.log('json', json);

//       if (json.error) {
//         alert('Enter Valid Credentials');
//       } else {
//         navigate('/'); // Navigate to another page on success, for example login page
//       }
//     } catch (error) {
//       console.error('Error registering user:', error);
//     }
//   };

//   return (
//     <div className='signupbody'>
//       <div className="signupcontent">
//         <div className="signupHeader">Sign Up</div>
//         <div>
//           <div className="signupfield">
//             <input 
//               type="text" 
//               placeholder='Enter your First-Name' 
//               onChange={(e) => setFirstName(e.target.value)} 
//               value={firstName} 
//             />
//           </div>
//           <div className="signupfield">
//             <input 
//               type="text" 
//               placeholder='Enter your Last-Name'  
//               onChange={(e) => setLastName(e.target.value)} 
//               value={lastName} 
//             />
//           </div>
//           <div className="signupfield">
//             <input 
//               type="text" 
//               placeholder='Enter your Email'  
//               onChange={(e) => setEmail(e.target.value)} 
//               value={email} 
//             />
//           </div>
//           <div className="signupfield">
//             <input 
//               type="password" 
//               placeholder='Create Password'  
//               onChange={(e) => setPassword(e.target.value)} 
//               value={password} 
//             />
//           </div>
//           <div className="signupfield">
//             <input 
//               type="number" 
//               placeholder='Enter your Phone Number' 
//               onChange={(e) => setNumber(e.target.value)} 
//               value={number} 
//             />
//           </div>
//           {error && <div className="error">{error}</div>}
//           <div className="Sforgot-pass"><a href="#">Forgot Password?</a></div>
//           <button className='signupBtn' onClick={UserRegistered} >Register</button>
//           <div className="signin">Already have an account? 
//             <span onClick={() => navigate('/')}> Sign-in</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   ); 
// }

// export default Register;


//  88888888888888888888888888888888888888888888888888888888888888888888888888888


// import { useState } from 'react';
// import './register.css';
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const navigate = useNavigate();
  
//   const [firstName, setFirstName] = useState(''); 
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [number, setNumber] = useState('');
//   const [error, setError] = useState('');

//   const UserRegistered = async () => {
//     // Basic validation
//     if (!firstName || !lastName || !email || !password || !number) {
//       setError('All fields are required');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:3001/users/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ firstname: firstName, lastname: lastName, email, password, number }) // Ensure the field names match the backend requirements
//       });

//       const json = await response.json();
//       console.log('json', json);

//       if (response.status === 409) { // HTTP 409 Conflict
//         setError('Email is already in use');
//       } else if (!json.success) {
//         alert('Enter Valid Credentials');
//       } else {
//         navigate('/'); // Navigate to another page on success, for example login page
//       }
//     } catch (error) {
//       console.error('Error registering user:', error);
//       setError('An error occurred while registering. Please try again.');
//     }
//   };

//   return (
//     <div className='signupbody'>
//       <div className="signupcontent">
//         <div className="signupHeader">Sign Up</div>
//         <div>
//           <div className="signupfield">
//             <input 
//               type="text" 
//               placeholder='Enter your First-Name' 
//               onChange={(e) => setFirstName(e.target.value)} 
//               value={firstName} 
//             />
//           </div>
//           <div className="signupfield">
//             <input 
//               type="text" 
//               placeholder='Enter your Last-Name'  
//               onChange={(e) => setLastName(e.target.value)} 
//               value={lastName} 
//             />
//           </div>
//           <div className="signupfield">
//             <input 
//               type="text" 
//               placeholder='Enter your Email'  
//               onChange={(e) => setEmail(e.target.value)} 
//               value={email} 
//             />
//           </div>
//           <div className="signupfield">
//             <input 
//               type="password" 
//               placeholder='Create Password'  
//               onChange={(e) => setPassword(e.target.value)} 
//               value={password} 
//             />
//           </div>
//           <div className="signupfield">
//             <input 
//               type="number" 
//               placeholder='Enter your Phone Number' 
//               onChange={(e) => setNumber(e.target.value)} 
//               value={number} 
//             />
//           </div>
//           {error && <div className="error">{error}</div>}
//           <div className="Sforgot-pass"><a href="#">Forgot Password?</a></div>
//           <button className='signupBtn' onClick={UserRegistered} >Register</button>
//           <div className="signin">Already have an account? 
//             <span onClick={() => navigate('/')}> Sign-in</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;
