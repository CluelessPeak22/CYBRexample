// Function to display an alert message with the user's profile link
function showAlert() {
    var userGuid = elgg.session.user.guid; // Get the current user's GUID
    var profileUrl = "http://your-elgg-site/profile/view/" + userGuid; // Construct the profile URL
    alert("Your profile URL is: " + profileUrl); // Display the alert message
}

// Call the function to display the alert
showAlert();
