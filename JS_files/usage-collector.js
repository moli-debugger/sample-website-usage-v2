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

    var domain = empmail.split("@");

    var traits = {
        firstName: firstName,
        lastName: lastName,
        email: empmail,
        address: {
        }
    }

   var usageCollector = new churn360.UsageCollector();
    await usageCollector.initialize(localStorage.getItem('apiKey'), localStorage.getItem("identifier"), empmail);
    await usageCollector.identify(traits,empmail);
    // await usageCollector.page();
    // await usageCollector.page({'env':'sample'})
    // await usageCollector.track('sample 101', 'test from sample')
    // await usageCollector.track('sample 101', 'test from sample', {'env':'sample'});
    await usageCollector.startEventListener();
})

