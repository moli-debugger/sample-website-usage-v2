function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

$(document).ready(function () {
    var empmail = localStorage.getItem("userId");
    var churn360Notifier = new churn360notifier.Churn360Notifier();
    churn360Notifier.initialize(
      "15BD2360-0B69-46C5-9271-F7A3B8814CAE",
      "aquamarine5013",
      "ram@gmail.com");
})
