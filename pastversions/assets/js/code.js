Question
How can I build a minimal working sample on a site like codepen showing a location and it's temperature using the Yahoo weather API. I need specifically San Diego, CA. And using only HTML and Javascript, not PHP.

Background
I did check the site for a similar question but it only addressed temperature Getting only temperature from Yahoo Weather but it's only answer linked to an overcomplicated tutorial with excessive code.

Other answers on the site only have YML but don't show how to integrate an entire working example.

I was following along to the documentation from Yahoo but there is no working example like how NASA has a live example

Code
I have this CodePen demo

HTML
<div id="output"></div>
Javascript
$(document).ready(function () {
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487889&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys/", function (data) {
        console.log(data);
        console.log(query)
        $('#output').append( 'The temperature in' + result.location.["location"] + 'is' + result.condition.["temp"] );
    })
})