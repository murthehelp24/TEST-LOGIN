import { onAuthStateChanged } from "firebase/auth";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("ผู้ใช้ล็อกอินอยู่:", user.uid);
  } else {
    console.log("ยังไม่ได้ล็อกอิน");
  }
});
