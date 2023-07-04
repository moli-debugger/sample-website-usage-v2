function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

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
    usageCollector.initialize("ZXlKMklqb3hMakFzSW10bGVTSTZJbVZqWlRnNVpXWmhOemN3TURRd1ltSmlOakUyTWpVeU1HSmtZVEkxWldGa0lpd2lhV1FpT2lJd01EQXdNREF3TURBd01EQXdNREF3TURBd01EQXdNREF3TURBd01EQXdNQ0lzSW5OcElqb2lkR1ZLWTJsbGRIZElhV0ZIYldseWFFWndNVzFhV0VOeGIxVTNWRVpYWVc1amRtZHRVM2hWYkdkVVl6MGlmUT09", empmail, empmail);
    if (localStorage.getItem("Churn360-usage-userInfo")) {
        usageCollector.identify(traits, uuidv4());
        usageCollector.listener();
    }
})

