$(document).ready(function() {
    var txt = $("input[id$=textLength]");
    var span = $("#results");           
    $(txt).keyup(function() {
        var length = $(txt).val().length;
        $(span).text(length + " characters long");
        $(span).css("background-color", length >= 8 ? "#ff0000" : "#00FF00");
    });  

    $(txt).val("Hello World!");
    QUnit.test("Number of characters in text field is 8 or more", function(assert) {
        $(txt).trigger("keyup");
        assert.ok($(txt).val().length >= 8, "There are " + $(txt).val().length + " characters.");
    });  

    $(txt).val("Hello World!");
    QUnit.test("Number of characters in text field is 8 or less", function(assert) {
        $(txt).trigger("keyup");
        assert.ok($(txt).val().length <= 8, "There are " + $(txt).val().length + " characters.");
    });      
});