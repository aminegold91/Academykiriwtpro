let btn = document.querySelector('.btn');
let tp = document.querySelector('.top');
let btm = document.querySelector('.bottom');
let ctr = document.querySelector('.center');
let menu = document.querySelector('.menu');

btn.addEventListener('click', () => {
  tp.classList.toggle('active');
  btm.classList.toggle('active');
  ctr.classList.toggle('active');
  menu.classList.toggle('active');
})

// if (localStorage.getItem("isLoggedIn") !==
//   "true") {

//   window.location.href = "login.html";
// }
// localStorage.getItem();



    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
        document.getElementById("username").textContent = currentUser;
    }



    document.getElementById("logoutButton").addEventListener("click", function () {
        // إزالة حالة تسجيل الدخول
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
        alert("تم تسجيل الخروج بنجاح.");
        window.location.href = "login.html"; // إعادة التوجيه إلى صفحة تسجيل الدخول
    });




