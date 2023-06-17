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
const executive = ref(database, "Executive");
addAdvisor();
addExecutive();
function addAdvisor() {
  let advise = document.getElementById("advisor");
  onValue(advisor, function (snapshot) {
    let advisors = Object.values(snapshot.val());
    for (let i = 0; i < advisors.length; i++) {
      advise.innerHTML += `<div class="col-lg-4">
                            <div class="card border m-lg-5 rounded narrower-card">
                              <div>
                                <div  style="height: 150px;">
                                  <div class="text-right text-orange font-semibold p-3">JUKTI</div>
                                </div>
                                <div class="bg-dark-navy" style="height: 80px;"></div>
                                <div class="floating-image">
                                  <img src='${advisors[i]["Image"]}' height="150px" width="150px"
                                  style="border-radius: 50%; border: 5px solid" class="border-orange">
                                </div>
                              </div>
  
                              <div class="text-center bg-dark-navy text-white ">
                                <h2 class="text-center fs-5 font-bold py-1">${advisors[i]["Name"]}</h2>
                                <h5 class="text-center py-1">${advisors[i]["Position"]}</h5>
                              </div>
                              <div class="text-center bg-dark-navy text-white rounded-bottom">
                                <div class="icons d-flex justify-content-center m-3">
                                  <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons" class="m-1"> <i class="fa-brands fa-facebook" style="color: #f97924;"></i></a>
                                  <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons" class="m-1"><i class="fa-brands fa-linkedin-in" style="color: #f97924;"></i></a>
                                  <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons" class="m-1"><i class="fa-brands fa-instagram" style="color: #f97924;"></i></a>
                                </div>
                              </div>
  
                            </div>
                          </div>`;
    }
  });
}
function addExecutive() {
  let execute = document.getElementById("executive");
  onValue(executive, function (snapshot) {
    let executives = Object.values(snapshot.val());
    for (let i = 0; i < executives.length; i++) {
      execute.innerHTML += `<div class="col-lg-4">
                            <div class="card border m-lg-5 rounded narrower-card">
                              <div>
                                <div  style="height: 150px;">
                                  <div class="text-right text-orange font-semibold p-3">JUKTI</div>
                                </div>
                                <div class="bg-dark-navy" style="height: 80px;"></div>
                                <div class="floating-image">
                                  <img src='${executives[i]["Image"]}' height="150px" width="150px"
                                  style="border-radius: 50%; border: 5px solid" class="border-orange">
                                </div>
                              </div>
  
                              <div class="text-center bg-dark-navy text-white ">
                                <h2 class="text-center fs-5 font-bold py-1">${executives[i]["Name"]}</h2>
                                <h5 class="text-center py-1">${executives[i]["Position"]}</h5>
                              </div>
                              <div class="text-center bg-dark-navy text-white rounded-bottom">
                                <div class="icons d-flex justify-content-center m-3">
                                  <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons" class="m-1"> <i class="fa-brands fa-facebook" style="color: #f97924;"></i></a>
                                  <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons" class="m-1"><i class="fa-brands fa-linkedin-in" style="color: #f97924;"></i></a>
                                  <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons" class="m-1"><i class="fa-brands fa-instagram" style="color: #f97924;"></i></a>
                                </div>
                              </div>
  
                            </div>
                          </div>`;
    }
  });
}
