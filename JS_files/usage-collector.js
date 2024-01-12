function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

$(document).ready(async function () {

    var empmail = localStorage.getItem("userId")

    var fullName = empmail.split('@')[0];

    var firstName = fullName;
    var lastName = fullName;

    var traits = {
        firstName: firstName,
        lastName: lastName,
        email: empmail,
        address: {
        }
    }

   var usageCollector = new churn360.UsageCollector();
    await usageCollector.initialize("ZXlKMklqb3hMakFzSW10bGVTSTZJamN4TVROak1XTmpZbUk1TnpRMU9UVmhNbVV3WWpsaU1UY3hZVGhqTmpJeElpd2lhV1FpT2lJMFpqSXpaamt6TldNek0yRTBZbU5oWlRWaE16QTRaR0pqWVRObU5XSmxOaUlzSW5OcElqb2lRbXhCU0U1cVMybG9MelU0ZWxnNVRFUmlUamQyZEd4UmNqaE5iSFpRY3paaVRXaG5TMnd5YkVwdE1EMGlmUT09", empmail, empmail);
    await usageCollector.identify(empmail,traits);
    await usageCollector.listener();
})

