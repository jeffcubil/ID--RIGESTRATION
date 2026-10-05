document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let confirmEmail = document.getElementById("confirmEmail").value;

    let userId = document.getElementById("userId").value;
    let confirmUserId = document.getElementById("confirmUserId").value;

    let result = document.getElementById("result");

    if (email !== confirmEmail) {
        result.style.display = "block";
        result.innerHTML = "Error: Email addresses do not match.";
        return;
    }

    if (userId !== confirmUserId) {
        result.style.display = "block";
        result.innerHTML = "Error: Preferred User IDs do not match.";
        return;
    }

    let userIdPattern = /^[A-Za-z][A-Za-z0-9_]{7,19}$/;

    if (!userIdPattern.test(userId)) {
        result.style.display = "block";
        result.innerHTML =
            "Error: User ID must be 8-20 characters, start with a letter, and contain only letters, numbers, or underscore.";
        return;
    }

    result.style.display = "block";
    result.innerHTML = `
        <strong>Registration Information</strong><br><br>
        CRN / SS Number: ${document.getElementById("ssNumber").value}<br>
        Email: ${email}<br>
        Preferred User ID: ${userId}<br>
        Name: ${document.getElementById("givenName").value}
        ${document.getElementById("middleName").value}
        ${document.getElementById("surname").value}<br>
        Date of Birth: ${document.getElementById("birthDate").value}
    `;
});