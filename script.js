

// // $("button").on("click",function() {
// // 	var sub =$("#subreddit").val();
// // 	$.get("http:/www.reddit.com/r/" + sub + ".json").done(function(data){
// // 		var postArray = data.data.children;
// // 		postArray.forEach(function(post) { 
// // 	  		console.log(post.data.author, post.data.title);
// //              $
// // 	   		$("body").append(`
	   			
// // 	   		<div class ="container">
// // 	   			<h4>` + post.data.title + `</h4>
// // 				<p>` + post.data.author + `</p>
// // 		  		<img src=` + post.data.preview.images[0]
// // 		  		.source.url +`>
// // 		    </div>



// // 		   `);
// //   		});
// //  	});
// // });

// //ca83d75da92bf0b7



// // $("button").on("click", function() {
// // 	var nameOfState = $("#state").val();
// // 	var nameOfCity = $("#city").val();



// // $.get("http://api.wunderground.com/api/ca83d75da92bf0b7/conditions/q/"  + nameOfState + "/" + nameOfCity + ".json")

// // .done(function(response) {

// // 	console.log(response);
// // });

// // });

// $(document).ready(function() {
// // $.get("https://montanaflynn-mapit.p.mashape.com/directions?ending=New+York%2C+NY%2C+USA&starting=Orange+County%2C+CA",{
// // 	"X-Mashape-Key": "Grc6KylI53msh7ezTvG2msaJbQp1p1EUHRzjsnHU2456oOjGAQ" ,
// //   "Accept": "application/json"}).done(function(response){

// // console.log(response);
// $.ajax({
//   url: "https://montanaflynn-mapit.p.mashape.com/directions?ending=New+York%2C+NY%2C+USA&starting=Orange+County%2C+CA" + '/posts/1',
//   headers: {"X-Mashape-Key":"Grc6KylI53msh7ezTvG2msaJbQp1p1EUHRzjsnHU2456oOjGAQ":"Accept":"application/json"},
//   method: "GET";
// }).then(function(data, status, xhr) {
//   console.log(xhr.getAllResponseHeaders());
//     });


// });





































