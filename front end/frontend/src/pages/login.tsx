// import React from "react";
// import { signInWithPopup } from "firebase/auth";
// import { auth, provider } from "../firebase";

// const Login: React.FC = () => {

//   const handleGoogleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       console.log("User:", result.user);
//     } catch (error) {
//       console.error("Login Error:", error);
//     }
//   };

//   return (
//     <div style={styles.page}>

//       <h1 style={styles.logo}>AI Campus Assistant</h1>

//       <div style={styles.card}>

//         {/* Left Illustration */}
//         <div style={styles.left}>
//           <img
//             src="/campus-ai.png"
//             alt="AI Campus"
//             style={styles.image}
//           />
//         </div>

//         {/* Right Login Form */}
//         <div style={styles.right}>

//           <h2 style={styles.title}>Login</h2>
//           <p style={styles.subtitle}>Continue Learning</p>

//           <label style={styles.label}>Student Email</label>
//           <input
//             type="email"
//             placeholder="Enter email"
//             style={styles.input}
//           />

//           <label style={styles.label}>Password</label>
//           <input
//             type="password"
//             placeholder="Enter password"
//             style={styles.inputPurple}
//           />

//           <button style={styles.loginBtn}>
//             Sign In
//           </button>

//           <div style={styles.divider}>or</div>

//           <button
//             style={styles.googleBtn}
//             onClick={handleGoogleLogin}
//           >
//             Continue with Google
//           </button>

//           <p style={styles.signup}>
//             New here? <span style={styles.link}>Create account</span>
//           </p>

//         </div>
//       </div>

//     </div>
//   );
// };

// const styles: { [key: string]: React.CSSProperties } = {

// page:{
// height:"100vh",
// background:"radial-gradient(circle at top,#0f1730,#050916)",
// display:"flex",
// flexDirection:"column",
// alignItems:"center",
// justifyContent:"center",
// fontFamily:"Inter, sans-serif",
// color:"white"
// },

// logo:{
// position:"absolute",
// top:"30px",
// left:"40px",
// fontSize:"22px",
// fontWeight:600
// },

// card:{
// display:"flex",
// width:"780px",
// padding:"40px",
// borderRadius:"20px",
// background:"rgba(20,25,50,0.6)",
// backdropFilter:"blur(20px)",
// boxShadow:"0 0 40px rgba(120,80,255,0.4)",
// border:"1px solid rgba(120,80,255,0.5)"
// },

// left:{
// flex:1,
// display:"flex",
// alignItems:"center",
// justifyContent:"center"
// },

// image:{
// width:"260px"
// },

// right:{
// flex:1,
// display:"flex",
// flexDirection:"column",
// gap:"12px"
// },

// title:{
// fontSize:"28px",
// margin:0
// },

// subtitle:{
// color:"#aaa",
// marginBottom:"15px"
// },

// label:{
// fontSize:"14px",
// color:"#ccc"
// },

// input:{
// padding:"12px",
// borderRadius:"8px",
// border:"1px solid #00e0ff",
// background:"transparent",
// color:"white"
// },

// inputPurple:{
// padding:"12px",
// borderRadius:"8px",
// border:"1px solid #a855f7",
// background:"transparent",
// color:"white"
// },

// loginBtn:{
// marginTop:"10px",
// padding:"12px",
// borderRadius:"10px",
// border:"none",
// background:"linear-gradient(90deg,#7c3aed,#a855f7)",
// color:"white",
// fontWeight:600,
// cursor:"pointer"
// },

// divider:{
// textAlign:"center",
// color:"#888",
// margin:"10px 0"
// },

// googleBtn:{
// padding:"12px",
// borderRadius:"10px",
// border:"1px solid #555",
// background:"#111827",
// color:"white",
// cursor:"pointer"
// },

// signup:{
// fontSize:"14px",
// color:"#aaa",
// marginTop:"10px"
// },

// link:{
// color:"#a855f7",
// cursor:"pointer"
// }

// };

// export default Login;