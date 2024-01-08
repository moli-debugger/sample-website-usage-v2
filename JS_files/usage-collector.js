function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

$(document).ready(async function () {

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
    await usageCollector.initialize("ZXlKMklqb3hMakFzSW10bGVTSTZJalJqTW1WbU0yWXpNell3WmpSa1pEQmlOVEE1T1RKaU16Tm1OakF6TTJZeElpd2lhV1FpT2lJd01EQXdNREF3TURBd01EQXdNREF3TURBd01EQXdNREF3TURBd01EQXdNQ0lzSW5OcElqb2llSGxHWVVoVVJubHZTeTlsVDBSamVGUjVaVWxCUWxNd0sybDJORGR5VURjck1VWnVVWFJhVkRKQk1EMGlmUT09", empmail, empmail);
    await usageCollector.identify(empmail,traits);
    await usageCollector.startEventListener();
})

