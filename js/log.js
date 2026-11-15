//Step 1: Conditional Statement => loob ng Function
//get the value saved in our localStorage
function loginUser() {
    let old_user = localStorage.getItem("userRecord");

    if (old_user === null) { //checks if there are existing records
        document.getElementById("loginMessage").innerHTML =
            "<h3 style='color:red'>No user record found. Kindly Register First.</h3>";
        return;
    }

    //split values of the localStorage
    let userData = old_user.split(" | "); //this is an array

    //retrieved first name, username and password at the location of the array
    let old_name = userData[0];
    let old_uname = userData[3];
    let old_pword = userData[5];

    //retrieve user input via the login form
    let loginuname = document.getElementById("login_uname").value.trim();
    let loginpword = document.getElementById("login_pword").value;

    //conditional statement - checking old vs login data
    if (loginuname === old_uname && loginpword === old_pword) {
        document.getElementById("loginMessage").innerHTML =
            "<h3 style='color:green'>Welcome " + old_name + "! You may now add an item.</h3>";

        //remember who is logged in (list.js checks this)
        localStorage.setItem("currentUser", old_uname);

        //move to next page after 1.5 seconds so the message can be read
        setTimeout(function () {
            window.location.href = "list.html";
        }, 1500);

    } else {
        document.getElementById("loginMessage").innerHTML =
            "<h3 style='color:red'>Invalid User Credentials!</h3>";
    }
}