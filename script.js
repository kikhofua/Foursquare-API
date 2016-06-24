$(document).ready(function() {
	var client_id = 'KIETNPVEB2K1GI3PJZ1ZZOP300BK2BIZO0ZFF2XLHID15PVW';
	var client_secret = 'H0IO5VJZD43N2A0ZXKWIWZZAKNOMTJZ21ZEUIZROJOQBZXQO';
	$("#submit").click(function(){
		$.get("https://api.foursquare.com/v2/venues/search" +
        "?client_id=" + client_id +
        "&client_secret=" + client_secret +
        "&v=20151209" +
        "&near=nyc" +
        "&query=pizza",
        function(data) {
            // Callback code goes here. This gets executed after receiving data from the Foursquare API.
            //console.log(data);
            linebreak = document.createElement("br");
            var list = "";
            for (i=0; i<30; i++) {
            	list += "<li>"+data['response']['venues'][i]['name']+" "+"-"+" "+data['response']['venues'][i]['contact']['formattedPhone']+"</li>";
            };
            $("#results").append(list);
        });
        

	})
});