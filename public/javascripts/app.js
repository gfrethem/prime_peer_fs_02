/**
 * Created by gfrethem on 10/1/15.
 */
$(function () {

    //Declare global variables
    //var tempUrl = "";
    var numImages = 0;
    var cuteArray = [];

    //Call for initial 5 cute cards
    $.ajax({
        type: "GET",
        dataType: "json",
        url: '/cute',
        complete: function () {
            console.log('AJAX2 complete');
        },
        success: function (data) {
            numImages = data.length;
            for (var i = 0; i < numImages; i++) {
                cuteArray[i] = i;
            }
            shuffleArray(cuteArray);
            shiftAndSearch();
            shiftAndSearch();
            shiftAndSearch();
            shiftAndSearch();
            shiftAndSearch();
            shiftAndSearch();
        }
    });

    function fetchImage(cuteId) {
        $.ajax({
            type: "GET",
            dataType: "json",
            url: '/cute/' + cuteId,
            complete: function () {
                console.log('AJAX complete');
            },
            success: function (data) {
                //console.log("THIS IS THE DATA: " + data);
                //console.log(data.url);
                appendToScreen(cuteId, data.url);
            }
        });
    }

    function appendToScreen(currentImage, tempUrl) {
        //console.log("TEMPURL IS: " + tempUrl);

        var $whatToAppend = '<div class=image ' + currentImage + '><img src=' + tempUrl
            + '><br><button class="removeMe">I HATES THIS ONE</button></div>';
        $(".adorable").append($whatToAppend);
    }


    function shuffleArray(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    function shiftAndSearch() {
        //console.log(cuteArray);
        var currentImage = cuteArray.shift();
        console.log("CURRENT IMAGE IS: " + currentImage);

        fetchImage(currentImage);

        cuteArray.push(currentImage);
        //console.log(cuteArray);
    }

    $(document).on('click', '.removeMe', function () {
        $(this).parent().remove();
        shiftAndSearch();

    });

    $(".newDeck").on('click', function () {
        $("main").children().remove();
        shuffleArray(cuteArray);
        shiftAndSearch();
        shiftAndSearch();
        shiftAndSearch();
        shiftAndSearch();
        shiftAndSearch();
        shiftAndSearch();
    });

});