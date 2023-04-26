function validateForm() {
    clearErrors()
    // Get the values of the form inputs
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let pcode = document.getElementById("pcode").value;
    let subject = document.getElementById("subject").value;

    // Define regular expressions for email, mobile and postcode
    let emailRegex = /\S+@\S+\.\S+/;
    let mobileRegex = /^(?:\+?61|0)[2-478](?:[ -]?[0-9]){8}$/;
    let pcodeRegex = /^(0[289]|[1-9]\d?)\d{3}$/;

    // Define error messages and error flag for each input
    let fnameError = "";
    let lnameError = "";
    let emailError = "";
    let mobileError = "";
    let pcodeError = "";
    let subjectError = "";
    let hasErrors = false;

    // Check if the first name is empty
    if (fname == "") {
        fnameError = "<span>Please enter your first name.</span>";
        document.getElementById("fname").style.border = '1px solid red'
        hasErrors = true;

    }

    // Check if the last name is empty
    if (lname == "") {
        lnameError = "<span>Please enter your last name.</span>";
        document.getElementById("lname").style.border = '1px solid red'
        hasErrors = true;
    }

    // Check if the email is empty or invalid
    if (email == "") {
        emailError = "<span>Please enter your email address.</span>";
        document.getElementById("email").style.border = '1px solid red'
        hasErrors = true;
    } else if (!emailRegex.test(email)) {
        emailError = "<span>Please enter a valid email address.</span>";
        document.getElementById("email").style.border = '1px solid red'
        hasErrors = true;
    }

    // Check if the mobile number is empty or invalid
    if (mobile == "") {
        mobileError = "<span>Please enter your mobile number.</span>";
        document.getElementById("mobile").style.border = '1px solid red'
        hasErrors = true;
    } else if (!mobileRegex.test(mobile)) {
        mobileError = "<span>Please enter a valid Australian mobile number.</span>";
        document.getElementById("mobile").style.border = '1px solid red'
        hasErrors = true;
    }

    // Check if the postcode is empty or invalid
    if (pcode == "") {
        pcodeError = "<span>Please enter your postcode.</span>";
        document.getElementById("pcode").style.border = '1px solid red'
        hasErrors = true;
    } else if (!pcodeRegex.test(pcode)) {
        pcodeError = "<span>Please enter a valid Australian postcode.</span>";
        document.getElementById("pcode").style.border = '1px solid red'
        hasErrors = true;
    }

    // Check if the subject is empty
    if (subject == "") {
        subjectError = "<span>Please enter your question(s).</span>";
        document.getElementById("subject").style.border = '1px solid red'
        hasErrors = true;
    }

    // If there are errors, display them and prevent form submission
    if (hasErrors) {
        document.getElementById("fname-error").innerHTML = fnameError;
        document.getElementById("lname-error").innerHTML = lnameError;
        document.getElementById("email-error").innerHTML = emailError;
        document.getElementById("mobile-error").innerHTML = mobileError;
        document.getElementById("pcode-error").innerHTML = pcodeError;
        document.getElementById("subject-error").innerHTML = subjectError;
        return false;
    }

    // If there are no errors, allow form submission
    return true;
}


function clearErrors() {
    document.getElementById("fname-error").innerHTML = '<span></span>'
    document.getElementById("lname-error").innerHTML = '<span></span>'
    document.getElementById("email-error").innerHTML = '<span></span>'
    document.getElementById("mobile-error").innerHTML = '<span></span>'
    document.getElementById("pcode-error").innerHTML = '<span></span>'
    document.getElementById("subject-error").innerHTML = '<span></span>'
    document.getElementById("fname").style.border = '1px solid grey'
    document.getElementById("lname").style.border = '1px solid grey'
    document.getElementById("email").style.border = '1px solid grey'
    document.getElementById("mobile").style.border = '1px solid grey'
    document.getElementById("pcode").style.border = '1px solid grey'
    document.getElementById("subject").style.border = '1px solid grey'

}