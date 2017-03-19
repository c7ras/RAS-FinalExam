$('#app').html(`
<div class="preloader">
<img src="../public/img/orb.ico"><br>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span> 
    <span></span>
    <span></span>
</div>
`);

setTimeout(function(){	//**preloader to wait 0.7secs to load the inside the body
	
	$('#app').html(`
		<div id="home"><br><br><br><br><br>
		<br><img src="../public/img/REbanner.jpg" class="img"></img><br>
		<input type="button" onclick="s1();" value="Resident Evil" name="button"  class="btn">
		<input type="button" onclick="s2();" value="Apocalypse" name="button"  class="btn"> 
		<input type="button" onclick="s3();" value="Extinction" name="button"  class="btn"> 
		<input type="button" onclick="s4();" value="Afterlife" name="button"  class="btn"> 
		<input type="button" onclick="s5();" value="Retribution" name="button"  class="btn">
		<input type="button" onclick="s6();" value="The Final Chapter" name="button"  class="btn">
		<br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		</div>
	`);

},2777);

function s1(){
	$.ajax({
		url: "http://www.omdbapi.com/?i=tt0120804"

	}).done(function(res){
		console.log(res);
		let html = `
			<div id="home">
			<br><img src="../public/img/REbanner.jpg" class="img"></img><br>
			<input type="button" onclick="s1();" value="Resident Evil" name="button"  class="btn">
			<input type="button" onclick="s2();" value="Apocalypse" name="button"  class="btn"> 
			<input type="button" onclick="s3();" value="Extinction" name="button"  class="btn"> 
			<input type="button" onclick="s4();" value="Afterlife" name="button"  class="btn"> 
			<input type="button" onclick="s5();" value="Retribution" name="button"  class="btn">
			<input type="button" onclick="s6();" value="The Final Chapter" name="button"  class="btn"><br><br>
			</div>
			<div class = "s">
				<img  class="imgs" src="${res.Poster}" width="180" height="220"><b>
				${res.Title} (${res.Year})
				</b><br>${res.Plot}<br>
				<b>Genre:</b> ${res.Genre}<br>
				<b>Director:</b> ${res.Director}<br>
				<b>Writer:</b> ${res.Writer}<br>
				<b>Actor:</b> ${res.Actors}<br>
				<b>Country:</b> ${res.Country}<br>
				<b>Duration:</b> ${res.Runtime}<br>
				<b>Release:</b> ${res.Year}<br>
				<b>IMDb:</b> ${res.imdbRating}<br>
				</div>
				<br>
				<div id="s1">
				<input type="button" onclick="document.location.href='app.html';" value="HOME" name="button" class="btn">
				</div>
		`;
		$('#app').html(html);

	});
}
function s2(){
	$.ajax({
		url: "http://www.omdbapi.com/?i=tt0318627"

	}).done(function(res){
		console.log(res);
		let html = `
			<div id="home">
			<br><img src="../public/img/REbanner.jpg" class="img"></img><br>
			<input type="button" onclick="s1();" value="Resident Evil" name="button"  class="btn">
			<input type="button" onclick="s2();" value="Apocalypse" name="button"  class="btn"> 
			<input type="button" onclick="s3();" value="Extinction" name="button"  class="btn"> 
			<input type="button" onclick="s4();" value="Afterlife" name="button"  class="btn"> 
			<input type="button" onclick="s5();" value="Retribution" name="button"  class="btn">
			<input type="button" onclick="s6();" value="The Final Chapter" name="button"  class="btn"><br><br>
			</div>
			<div class = "s">
				<img  class="imgs" src="${res.Poster}" width="180" height="220"><b>
				${res.Title} (${res.Year})
				</b><br>${res.Plot}<br>
				<b>Genre:</b> ${res.Genre}<br>
				<b>Director:</b> ${res.Director}<br>
				<b>Writer:</b> ${res.Writer}<br>
				<b>Actor:</b> ${res.Actors}<br>
				<b>Country:</b> ${res.Country}<br>
				<b>Duration:</b> ${res.Runtime}<br>
				<b>Release:</b> ${res.Year}<br>
				<b>IMDb:</b> ${res.imdbRating}<br>
				</div>
				<br>
				<div id="s2">
				<input type="button" onclick="document.location.href='app.html';" value="HOME" name="button" class="btn">
				</div>
		`;
		$('#app').html(html);

	});
}
function s3(){
	$.ajax({
		url: "http://www.omdbapi.com/?i=tt0432021"

	}).done(function(res){
		console.log(res);
		let html = `
			<div id="home">
			<br><img src="../public/img/REbanner.jpg" class="img"></img><br>
			<input type="button" onclick="s1();" value="Resident Evil" name="button"  class="btn">
			<input type="button" onclick="s2();" value="Apocalypse" name="button"  class="btn"> 
			<input type="button" onclick="s3();" value="Extinction" name="button"  class="btn"> 
			<input type="button" onclick="s4();" value="Afterlife" name="button"  class="btn"> 
			<input type="button" onclick="s5();" value="Retribution" name="button"  class="btn">
			<input type="button" onclick="s6();" value="The Final Chapter" name="button"  class="btn"><br><br>
			</div>
			<div class = "s">
				<img  class="imgs" src="${res.Poster}" width="180" height="220"><b>
				${res.Title} (${res.Year})
				</b><br>${res.Plot}<br>
				<b>Genre:</b> ${res.Genre}<br>
				<b>Director:</b> ${res.Director}<br>
				<b>Writer:</b> ${res.Writer}<br>
				<b>Actor:</b> ${res.Actors}<br>
				<b>Country:</b> ${res.Country}<br>
				<b>Duration:</b> ${res.Runtime}<br>
				<b>Release:</b> ${res.Year}<br>
				<b>IMDb:</b> ${res.imdbRating}<br>
				</div>
				<br>
				<div id="s3">
				<input type="button" onclick="document.location.href='app.html';" value="HOME" name="button" class="btn">
				</div>
		`;
		$('#app').html(html);

	});
}
function s4(){
	$.ajax({
		url: "http://www.omdbapi.com/?i=tt1220634"

	}).done(function(res){
		console.log(res);
		let html = `
			<div id="home">
			<br><img src="../public/img/REbanner.jpg" class="img"></img><br>
			<input type="button" onclick="s1();" value="Resident Evil" name="button"  class="btn">
			<input type="button" onclick="s2();" value="Apocalypse" name="button"  class="btn"> 
			<input type="button" onclick="s3();" value="Extinction" name="button"  class="btn"> 
			<input type="button" onclick="s4();" value="Afterlife" name="button"  class="btn"> 
			<input type="button" onclick="s5();" value="Retribution" name="button"  class="btn">
			<input type="button" onclick="s6();" value="The Final Chapter" name="button"  class="btn"><br><br>
			</div>
			<div class = "s">
				<img  class="imgs" src="${res.Poster}" width="180" height="220"><b>
				${res.Title} (${res.Year})
				</b><br>${res.Plot}<br>
				<b>Genre:</b> ${res.Genre}<br>
				<b>Director:</b> ${res.Director}<br>
				<b>Writer:</b> ${res.Writer}<br>
				<b>Actor:</b> ${res.Actors}<br>
				<b>Country:</b> ${res.Country}<br>
				<b>Duration:</b> ${res.Runtime}<br>
				<b>Release:</b> ${res.Year}<br>
				<b>IMDb:</b> ${res.imdbRating}<br>
				</div>
				<br>
				<div id="s4">
				<input type="button" onclick="document.location.href='app.html';" value="HOME" name="button" class="btn">
				</div>
		`;
		$('#app').html(html);

	});
}
function s5(){
	$.ajax({
		url: "http://www.omdbapi.com/?i=tt1855325"

	}).done(function(res){
		console.log(res);
		let html = `
			<div id="home">
			<br><img src="../public/img/REbanner.jpg" class="img"></img><br>
			<input type="button" onclick="s1();" value="Resident Evil" name="button"  class="btn">
			<input type="button" onclick="s2();" value="Apocalypse" name="button"  class="btn"> 
			<input type="button" onclick="s3();" value="Extinction" name="button"  class="btn"> 
			<input type="button" onclick="s4();" value="Afterlife" name="button"  class="btn"> 
			<input type="button" onclick="s5();" value="Retribution" name="button"  class="btn">
			<input type="button" onclick="s6();" value="The Final Chapter" name="button"  class="btn"><br><br>
			</div>
			<div class = "s">
				<img  class="imgs" src="${res.Poster}" width="180" height="220"><b>
				${res.Title} (${res.Year})
				</b><br>${res.Plot}<br>
				<b>Genre:</b> ${res.Genre}<br>
				<b>Director:</b> ${res.Director}<br>
				<b>Writer:</b> ${res.Writer}<br>
				<b>Actor:</b> ${res.Actors}<br>
				<b>Country:</b> ${res.Country}<br>
				<b>Duration:</b> ${res.Runtime}<br>
				<b>Release:</b> ${res.Year}<br>
				<b>IMDb:</b> ${res.imdbRating}<br>
				</div>
				<br>
				<div id="s5">
				<input type="button" onclick="document.location.href='app.html';" value="HOME" name="button" class="btn">
				</div>
		`;
		$('#app').html(html);

	});
}
function s6(){
	$.ajax({
		url: "http://www.omdbapi.com/?i=tt2592614"

	}).done(function(res){
		console.log(res);
		let html = `
			<div id="home">
			<br><img src="../public/img/REbanner.jpg" class="img"></img><br>
			<input type="button" onclick="s1();" value="Resident Evil" name="button"  class="btn">
			<input type="button" onclick="s2();" value="Apocalypse" name="button"  class="btn"> 
			<input type="button" onclick="s3();" value="Extinction" name="button"  class="btn"> 
			<input type="button" onclick="s4();" value="Afterlife" name="button"  class="btn"> 
			<input type="button" onclick="s5();" value="Retribution" name="button"  class="btn">
			<input type="button" onclick="s6();" value="The Final Chapter" name="button"  class="btn"><br><br>
			</div>
			<div class = "s">
				<img  class="imgs" src="${res.Poster}" width="180" height="220"><b>
				${res.Title} (${res.Year})
				</b><br>${res.Plot}<br>
				<b>Genre:</b> ${res.Genre}<br>
				<b>Director:</b> ${res.Director}<br>
				<b>Writer:</b> ${res.Writer}<br>
				<b>Actor:</b> ${res.Actors}<br>
				<b>Country:</b> ${res.Country}<br>
				<b>Duration:</b> ${res.Runtime}<br>
				<b>Release:</b> ${res.Year}<br>
				<b>IMDb:</b> ${res.imdbRating}<br>
				</div>
				<br>
				<div id="s6">
				<input type="button" onclick="document.location.href='app.html';" value="HOME" name="button" class="btn">
				</div>
		`;
		$('#app').html(html);

	});
}

//or
//$('#app').html(`
//	<h1>Ras</h1>
//`);
//	or
//let app = document.querySelector("#app");
//app.innerHTML = "<h1>Ras</h1>";
//	or
//let app = document.GetElementById("#app");
//app.innerHTML = "<h1>Ras</h1>";