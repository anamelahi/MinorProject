import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Login
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full input input-bordered h-10'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Link to='/signup' className='text-sm  hover:underline hover:text-yellow-900 mt-2 inline-block'>
						{"Don't"} have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2' disabled={loading}>
							{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;

// import React from 'react'
// import { Link } from 'react-router-dom';

// const Login = () => {
// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-lg  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-black'>Login
// 				</h1>

// 				<form>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base text-yellow-900'>Username: </span>
// 						</label>
// 						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text text-yellow-900'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>
// 					<Link to= '/signup' className='text-sm text-yellow-900 hover:underline mt-2 inline-block'>
// 						{"Don't"} have an account?
// 					</Link>

// 					<div>
// 						<button className='btn btn-block btn-md mt-2'>Login</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default Login;


// const Login = () => {
//   return (
//     // <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//     //   <div className='w-full p-6 rounded-lg shadow-md bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//     //     <h1 className='text-3xl font-semibold text-center text-gray-300'>LOGIN
//     //     <span className='text-orange-700'>  SocialChat</span>
//     //     </h1>
//     //   </div>
//     // </div>
//     <div className="card min-w-96 mx-auto bg-neutral border text-neutral-content">
//       <div className="card-body items-center text-center">
//         <h2 className="card-title">Login</h2>
        
//         {/* Form begin */}
//         <form>

//           <div>
//             <label className="label p-2">
//               <span className="label-text">Username</span>
//             </label>
//             <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label className="label">
//               <span className='text-base label-text'>Password</span>
//             </label>
//             <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' />
//           </div>
//           <a href="#" className='text-sm hover-underline hover:text-yellow-500 mt-2 inline-block'>Don't have an account?</a>
//         </form>
//         {/*  End form */}

//         <div >
//           <button className="btn btn-block btn-sm mt-2 btn-outline">Login</button>
//         </div>
//       </div>
//     </div>

//   )
// }

// export default Login