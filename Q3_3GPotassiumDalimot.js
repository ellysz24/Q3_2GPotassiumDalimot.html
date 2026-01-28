document.getElementById("signupForm").addEventListener("submit", saveSignup);
document.getElementById("viewBtn").addEventListener("click", () => {
    window.location.href = "viewSignUps.html";
});

function saveSignup(e) {
    e.preventDefault();

    if (!confirm("Are you sure you want to submit?")) return;

    const form = e.target;

    const signup = {
        id: form.student_id.value,
        fullname: form.full_name.value,
        birthday: form.birthday.value,
        email: form.email.value,
        mobile: form.mobile.value,
        grade: form.grade_level.value,
        training: form.training_type.value,
        club: form.club.value,
        reason: form.reason.value
    };

    let signups = JSON.parse(localStorage.getItem("signups")) || [];
    signups.push(signup);

    localStorage.setItem("signups", JSON.stringify(signups));

    alert("Your submission has been accepted!");
    form.reset();
}
