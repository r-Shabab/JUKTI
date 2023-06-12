import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3dtVO3w9L9PD7pEaHX9WdMAw8P8pxRgg",
  authDomain: "jukti-official-club-of-cse.firebaseapp.com",
  databaseURL:
    "https://jukti-official-club-of-cse-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jukti-official-club-of-cse",
  storageBucket: "jukti-official-club-of-cse.appspot.com",
  messagingSenderId: "464261726994",
  appId: "1:464261726994:web:98e30dc02f5f2f078da9cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const advisor = ref(database, "Board");
addFaculty();
addAdvisor();
addExecutive();
function addAdvisor() {
  let advise = document.getElementById("advisor");
  onValue(advisor, function (snapshot) {
    let advisors = Object.values(snapshot.val());
    let newAdvisors = Object.values(advisors[1]);
    for (let i = 0; i < newAdvisors.length; i++) {
      advise.innerHTML += `<div class="col-lg-3">
                            <div class="card border-start"
                            style="margin-top: 40px; background-image: url('img/card.png'); height: 440px; width: 340px;">
                              <div class="text-dark-navy fw-bolder d-flex justify-content-end pe-2 pt-3">JUKTI</div>
  
                              <div class="d-flex justify-content-center pt-5">
                                <div class="border border-5 border-orange me-2"></div>
                                <img src='${newAdvisors[i]["Image"]}' height="130px" width="130px"
                                style="border-radius: 5px; border: 5px solid orange">
                              </div>
  
                              <div class="text-center p-1 m-3">
                                <h3>${newAdvisors[i]["Name"]}</h3>
                                <h5>${newAdvisors[i]["Position"]}</h5>
                              </div>
                              <div class="icons d-flex justify-content-center">
                                <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons" class="m-1"> <img
                                src="img/facebook.png" width="25px"></a>
                                <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons" class="m-1"><img
                                src="img/linkedin.png" width="25px"></a>
                                <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons" class="m-1"><img
                                src="img/instagram.png" width="25px"></a>
                              </div>
  
                            </div>
                          </div>`;
                          
    }
  });
}
function addFaculty() {
  let advise = document.getElementById("faculty");
  onValue(advisor, function (snapshot) {
    let advisors = Object.values(snapshot.val());
    let newAdvisors = Object.values(advisors[2]);
    advise.innerHTML+=`<div class="col-lg-3"></div>`;
    for (let i = 0; i < newAdvisors.length; i++) {
      advise.innerHTML += `<div class="col-lg-3">
                            <div class="card border-start"
                            style="margin-top: 40px; background-image: url('img/card.png'); height: 440px; width: 340px;">
                              <div class="text-dark-navy fw-bolder d-flex justify-content-end pe-2 pt-3">JUKTI</div>
  
                              <div class="d-flex justify-content-center pt-5">
                                <div class="border border-5 border-orange me-2"></div>
                                <img src='${newAdvisors[i]["Image"]}' height="130px" width="130px"
                                style="border-radius: 5px; border: 5px solid orange">
                              </div>
  
                              <div class="text-center p-1 m-3">
                                <h3>${newAdvisors[i]["Name"]}</h3>
                                <h5>${newAdvisors[i]["Position"]}</h5>
                              </div>
                              <div class="icons d-flex justify-content-center">
                                <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons" class="m-1"> <img
                                src="img/facebook.png" width="25px"></a>
                                <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons" class="m-1"><img
                                src="img/linkedin.png" width="25px"></a>
                                <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons" class="m-1"><img
                                src="img/instagram.png" width="25px"></a>
                              </div>
  
                            </div>
                          </div>`;
                          
    }
    advise.innerHTML+=`<div class="col-lg-3"></div>`;
  });
}
function addExecutive() {
  let advise = document.getElementById("executive");
  onValue(advisor, function (snapshot) {
    let advisors = Object.values(snapshot.val());
    let newAdvisors = Object.values(advisors[0]);
    for (let i = 0; i < newAdvisors.length; i++) {
      advise.innerHTML += `<div class="col-lg-3">
                            <div class="card border-start"
                            style="margin-top: 40px; background-image: url('img/card.png'); height: 440px; width: 340px;">
                              <div class="text-dark-navy fw-bolder d-flex justify-content-end pe-2 pt-3">JUKTI</div>
  
                              <div class="d-flex justify-content-center pt-5">
                                <div class="border border-5 border-orange me-2"></div>
                                <img src='${newAdvisors[i]["Image"]}' height="130px" width="130px"
                                style="border-radius: 5px; border: 5px solid orange">
                              </div>
  
                              <div class="text-center p-1 m-3">
                                <h3>${newAdvisors[i]["Name"]}</h3>
                                <h5>${newAdvisors[i]["Position"]}</h5>
                              </div>
                              <div class="icons d-flex justify-content-center">
                                <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons" class="m-1"> <img
                                src="img/facebook.png" width="25px"></a>
                                <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons" class="m-1"><img
                                src="img/linkedin.png" width="25px"></a>
                                <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons" class="m-1"><img
                                src="img/instagram.png" width="25px"></a>
                              </div>
  
                            </div>
                          </div>`;
                          
    }
  });
}
