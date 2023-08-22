const domain = "https://api.nasa.gov/planetary/apod?api_key=uI9NEw548lf5GIoFKOaw97Cm0yT9rLkN11Uuce6c"; //This gets the general url
var htmi = ""; //This will be used later to build the html that uses the server data
var apodVal = ""; //This will be used to get the value of the button

//When Topic one is pressed
$('#d1').click(() => {
    
	apodVal = $('#d1').val(); //Gets the value assigned to the button
	//Here it combines the domain and the button value to select the specific apod from the server
    
	fetch(`${domain}${apodVal}`).then( response => {
	return response.json();}) //This function sets the response to json
    
	.then( path => {
		//This api is set with objects in each apod
        var apodDATE = path.date; //gets the value of the date
        var apodIMG = path.url; //gets the value of url (the jpg file)
        var apodTITLE = path.title; //gets the value of the title
        var apodEXP = path.explanation; //get the value of gameSeries
            //This takes all of the information we got above and formats it for the html web page
        htmi =  `<p>Date: ${apodDATE}</p>`
        htmi += `<h3>Title: ${apodTITLE}</h3>`;
        htmi += `<img class="globalpage__resizeImg" src="${apodIMG}" alt="${apodTITLE}">`;
        htmi += `<p>Image URL: ${apodIMG}</p>`
        htmi += `<p>${apodEXP}</p>`;
        $("#info").html(htmi); //This selects the div we're putting the html in
    }); //END .then
}); //END t01 click event

//The other buttons work the same.
$('#d2').click(() => {
	apodVal = $('#d2').val();
	fetch(`${domain}${apodVal}`).then( response => {
	return response.json();})
	.then( path => {
        var apodDATE = path.date;
        var apodIMG = path.url;
        var apodTITLE = path.title;
        var apodEXP = path.explanation;
        htmi =  `<p>Date: ${apodDATE}</p>`
        htmi += `<h3>Title: ${apodTITLE}</h3>`;
        htmi += `<img class="globalpage__resizeImg" src="${apodIMG}" alt="${apodTITLE}">`;
        htmi += `<p>Image URL: ${apodIMG}</p>`
        htmi += `<p>${apodEXP}</p>`;
        $("#info").html(htmi);
    });
});

$('#d3').click(() => {
	apodVal = $('#d3').val();
	fetch(`${domain}${apodVal}`).then( response => {
	return response.json();})
	.then( path => {
        var apodDATE = path.date;
        var apodIMG = path.url;
        var apodTITLE = path.title;
        var apodEXP = path.explanation;
        htmi =  `<p>Date: ${apodDATE}</p>`
        htmi += `<h3>Title: ${apodTITLE}</h3>`;
        htmi += `<img class="globalpage__resizeImg" src="${apodIMG}" alt="${apodTITLE}">`;
        htmi += `<p>Image URL: ${apodIMG}</p>`
        htmi += `<p>${apodEXP}</p>`;
        $("#info").html(htmi);
    });
});

$('#d4').click(() => {
	apodVal = $('#d4').val();
	fetch(`${domain}${apodVal}`).then( response => {
	return response.json();})
	.then( path => {
        var apodDATE = path.date;
        var apodIMG = path.url;
        var apodTITLE = path.title;
        var apodEXP = path.explanation;
        htmi =  `<p>Date: ${apodDATE}</p>`
        htmi += `<h3>Title: ${apodTITLE}</h3>`;
        htmi += `<img class="globalpage__resizeImg" src="${apodIMG}" alt="${apodTITLE}">`;
        htmi += `<p>Image URL: ${apodIMG}</p>`
        htmi += `<p>${apodEXP}</p>`;
        $("#info").html(htmi);
    });
});

$('#d5').click(() => {
	apodVal = $('#d5').val();
	fetch(`${domain}${apodVal}`).then( response => {
	return response.json();})
	.then( path => {
        var apodDATE = path.date;
        var apodIMG = path.url;
        var apodTITLE = path.title;
        var apodEXP = path.explanation;
        htmi =  `<p>Date: ${apodDATE}</p>`
        htmi += `<h3>Title: ${apodTITLE}</h3>`;
        htmi += `<img class="globalpage__resizeImg" src="${apodIMG}" alt="${apodTITLE}">`;
        htmi += `<p>Image URL: ${apodIMG}</p>`
        htmi += `<p>${apodEXP}</p>`;
        $("#info").html(htmi);
    });
});


