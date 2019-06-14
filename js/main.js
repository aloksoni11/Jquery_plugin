$(document).ready(function () {
    var myElement = document.querySelector("header");
    // construct an instance of Headroom, passing the element
    var headroom = new Headroom(myElement);
    // initialise
    headroom.init();
});
$(document).ready(function () {
    $(".type").typed({
        strings: ["DEVELOPER.", "DESIGNER.", "ADVENTURER.", "NATURE LOVER."]
        , stringsElement: null, // typing speed
        typeSpeed: 0, // time before typing starts
        startDelay: 0, // backspacing speed
        backSpeed: 0, // shuffle the strings
        shuffle: false, // time before backspacing
        backDelay: 500, // Fade out instead of backspace
        fadeOut: false
        , fadeOutClass: 'typed-fade-out'
        , fadeOutDelay: 500, // milliseconds
        // loop
        loop: true, // false = infinite
        loopCount: false, // show cursor
        showCursor: true, // character for cursor
        cursorChar: "|", // attribute to type (null == text)
        attr: null, // either html or text
        contentType: 'html'
    });
    $('#table_id').DataTable();
    $("#lightgallery").lightGallery({
        mode: 'lg-fade'
        , cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)'
        , selector: '.item'
    });
    $(".highlight").css("color", getRandomColor());

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
        window.setInterval(getRandomColor(), 1000);
    }
});