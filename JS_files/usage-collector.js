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
    usageCollector.initialize("ZXlKMklqb3hMakFzSW10bGVTSTZJbVV5WmpNek1ESTROVGRoTWpRd09UZGlNR1U1WTJVeFl6VXdNRGd6T1RjMUlpd2lhV1FpT2lJME1UWmxNRGN4TkdVeE16STBNalE0T1daalpESmpZakprWmpjd01tVTBOQ0lzSW5OcElqb2lUVTF3ZUVacVRHSXpSVFZ6YUd0eVkwSmlhSEZOYmtKWGVHTlNORUZLUVZScFZFbFFLMGhSYmpCNlJUMGlmUT09", empmail, empmail);
    if (localStorage.getItem("Churn360-usage-userInfo")) {
        usageCollector.identify(traits, empmail);
        usageCollector.listener();
    }
})

