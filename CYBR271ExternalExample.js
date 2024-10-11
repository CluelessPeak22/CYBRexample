function showAlert() {
    if (typeof elgg !== 'undefined' && elgg.session && elgg.session.user) {
        var userGuid = elgg.session.user.guid; // Get the current user's GUID
        var profileUrl = "http://your-elgg-site/profile/view/" + userGuid; // Construct the profile URL
        alert("Your profile URL is: " + profileUrl); // Display the alert message
    } else {
        console.log('Elgg session is not available');
    }
}

window.onload = function() {
    showAlert(); 
};
