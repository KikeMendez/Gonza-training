$( document ).ready(function() {
    let text = "Please complete all fields before continuing";

    $("#clickMeButtonId").click(function () {
        $("#errorsDiv").html("");

        let firstNameInputVal = $("#firstNameInput").val();
        let ageInputVal = $("#ageInput").val();

        if (firstNameInputVal.length < 3) {
            alert(text);
        }

        if (ageInputVal.length && ageInputVal < 18) {
            $("#errorsDiv").html("<p style='color: red'> pelate pendejo</p>");
        }
    });
});