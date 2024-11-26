document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // جلب المستخدمين المسجلين من LocalStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        alert("مرحبًا بك!");
        errorMessage.style.display = "none";
        window.location.href = "index.html"; // توجه المستخدم إلى لوحة التحكم
    } else {
        errorMessage.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة!";
        errorMessage.style.display = "block";
    }
});

