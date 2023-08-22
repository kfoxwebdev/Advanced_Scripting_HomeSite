"use strict";


const domain = "https://jsonplaceholder.typicode.com";
// makes a constant that stores the domain




const getPhoto = (id) => {
	//this function returns a promise when its given an id
	
	if (id < 1 || id > 5000) {
        return Promise.reject(
            new Error("Photo ID must be between 1 and 5000."));
		//if the id is outside our range, it returns a rejected promise-object and creates an error
		
    } else {
        return fetch(`${domain}/photos/${id}`)
            .then( response => response.json() ); // resolves to photo object
    }
};




const getPhotoAlbum = photo => {
	//takes what we get from "getPhoto" and puts it in the "photo" parameter
	
	return fetch(`${domain}/albums/${photo.albumId}`)
	
		//two chained .then() methods
        .then( response => response.json() )   // resolves to album object. there's no semicolon because it's chained to the ".then" below
	
        .then( album => {
            photo.album = album;	// add album property
            return photo;	// wraps it in a Promise-object
        });
};




const getPhotoAlbumUser = photo => {
		// this function also takes photo as a parameter
	
	return fetch(`${domain}/users/${photo.album.userId}`)
	
	//two chained .then() methods
	.then( response => response.json() ) // resolves user object (again, no semicolon since it's chained)
	.then( user => {
            photo.album.user = user;	// add album.user property
            return photo;	// wraps it in Promise object
        })
};




const displayPhotoData = photo => {
	// this function also takes photo as a paremeter, but there's no fetch-request since we're putting our html together
	
	let html = `<img src="${photo.thumbnailUrl}" alt="${photo.title}">` ; // the "let" makes a temporary variable called "html" that we only use locally
	
	html    += `<h4>Title: ${photo.title}</h4>`; // the title-property is already built-in from the first time we resolved the photo-object in our "getPhoto" function
	
    html    += `<p>Album: ${photo.album.title}</p>`; // again, the title-property is already built-in from when we resolved the photo-object in our "getPhotoAlbum" function

    html    += `Posted by: ${photo.album.user.username}`;
	
    $("#photo").html(html); //selects element with id="photo", and writes everything we just put inside the variable called "html" that we made within this function
	
};




const displayError = e => {
	// this function displays an error if we get one from our "getPhoto" function
	
    let html = `<span>${e}</span>`;
    $("#photo").html(html);
};




$(document).ready( () => {
	// this selects the "document" as a document.ready event-handler with an arrow-function.
	
	$("#view_button").click( () => {
		// this creates a click event-handler when the id="view_button" element is clicked
		
		const photo_id = $("#photo_id").val(); //gets the value of the id="photo_id" element and stores it in a variable called photo_id
        
		getPhoto(photo_id) // calls our getPhoto-function with the above "photo_id" variable, and uses chained .then() methods to call our other functions in order (since each function needs information from the previous one)
            .then(getPhotoAlbum)
            .then(getPhotoAlbumUser)
            .then(displayPhotoData)
            .catch(displayError);
		
	});
	
});


