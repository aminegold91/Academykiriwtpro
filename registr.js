
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("error-message");

    // التحقق من أن كلمة المرور وتأكيدها متطابقان
    if (newPassword !== confirmPassword) {
        errorMessage.textContent = "كلمة المرور وتأكيدها غير متطابقين!";
        errorMessage.style.display = "block";
        return;
    }

    // حفظ بيانات المستخدم في LocalStorage (كبديل لقاعدة البيانات في هذه المرحلة)
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find(user => user.username === newUsername);

    if (userExists) {
        errorMessage.textContent = "اسم المستخدم موجود بالفعل!";
        errorMessage.style.display = "block";
    } else {
        users.push({ username: newUsername, password: newPassword });
        localStorage.setItem("users", JSON.stringify(users));
        alert("تم التسجيل بنجاح! يمكنك تسجيل الدخول الآن.");
        window.location.href = "index.html";
    }
});


