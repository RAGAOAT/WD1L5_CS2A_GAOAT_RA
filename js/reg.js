//1. Get user Details, Concatenate, Save to localStorage
function saveUserDetails() {
    let first_name = document.getElementById("fname").value.trim();
    let last_name = document.getElementById("lname").value.trim();
    let address = document.getElementById("address").value.trim();
    let user_name = document.getElementById("uname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("pword").value;

    //make sure that all blanks are filled
    //HTML Tag INPUT "required"
    //OR make our own remarks

    if (first_name === "" || last_name === "" || address === ""
        || user_name === "" || email === "" || password === ""
    ) {
        document.getElementById("regMessage").innerHTML
            = "<h3 style='color:red'>Please Complete Details</h3>";
        return;
    }

    //String Concatenate all Details
    let userDetails = first_name + " | " + last_name + " | " +
                      address + " | " + user_name + " | " +
                      email + " | " + password;

    // save to LocalStorage (to store setItem/ to retrieve getItem)
    localStorage.setItem("userRecord", userDetails);

    document.getElementById("regMessage").innerHTML =
        "<h3 style='color:green'>Registration Successful!</h3>";

    alert("User Registered Successfully!");

    //move to next page
    window.location.href = "login.html";
}