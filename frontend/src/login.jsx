import React, { useState } from "react"; // เพิ่ม useState
import { auth, googleProvider } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth"
import { signInWithPopup } from "firebase/auth"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // กันหน้าเว็บรีโหลด
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("เข้าสู่ระบบสำเร็จ! ยินดีต้อนรับ " + userCredential.user.email);
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });

  }

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // ล็อกอินสำเร็จ
        const user = result.user;
        console.log("ยินดีต้อนรับ:", user.displayName);
        alert("สวัสดีคุณ " + user.displayName);
      })
      .catch((error) => {
        // จัดการ Error
        console.error("Google Login Error:", error.message);
      })
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
      <button
        onClick={handleGoogleLogin}
        style={{ backgroundColor: "#4285F4", color: "white", padding: "10px" }}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
