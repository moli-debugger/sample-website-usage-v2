$(document).ready(function () {
    var empmail = localStorage.getItem("userId")

    var fullName = empmail.split('@')[0].split('.');

    var firstName = fullName[0];
    var lastName = fullName[fullName.length - 1]

    var traits = {
        firstName: firstName,
        lastName: lastName,
        email: empmail,
        address: {
        }
    }

    var usageCollector = new churn360.UsageCollector();
    usageCollector.initialize("ZXlKMklqb3hMakFzSW10bGVTSTZJbU15Tm1FeFlqbG1NamswWXpRMk1XUTVZVFpsTldNek56azVaVFl4T1dZNElpd2lhV1FpT2lKaU5EaGhNR0ZrTW1Fd1pUWTBNakkyT0RZeU1tVTJNR0prTkdRMU5UWXpOU0lzSW5OcElqb2lhRVp4T0hSM1dsbG5iWEZFYm5kR1RUSnBhV2hGYlcxcmVFMW5NRk0zUTI5cFkycDBRMUZsVjI5bE9EMGlmUT09", empmail, empmail);
    window.addEventListener("load", function () {
        if (localStorage.getItem("Churn360V-TagApikey")) {
            usageCollector.identify(traits, UserId);
            usageCollector.listener();
        }
    });

    alert(empmail)
})
