const axios = require('axios');
// Initilize api key
const apiKey = 'Y8s6dW3uAs-TZ34YRekghk7llJxJuj3JjNAcLtADi-OZ02Dl66_soagZHv-eTyQFHC8fGWfxblXrZxyW3msB1GARItcv2KG0qhzgowweVi4qxdw3fijzXeIyKKd2XXYx';

// Set Hearders
const headers = {
	headers: {
		"Authorization" : `Bearer ${apiKey}` 
	}
};

function getBusiness(filter) {
	const url = `https://api.yelp.com/v3/businesses/search?term=${filter.term}&location=${filter.location}&limit=${filter.limit}&sort_by=${filter.sort_by}`;
	return axios.get(url, headers)
	.then( response => {
		return response.data.businesses;
	})
	.catch( err => {
		console.log(err);
	});
}

function getReviews(businesseId) {
	return axios.get(`https://api.yelp.com/v3/businesses/${businesseId}/reviews`, headers)
	.then( response => {
		return response.data.reviews;		
	})
	.catch( err => {
		console.log(err);
	});
}

async function getTopBusinesses(filter) {
	const businesses = await getBusiness(filter);
	const topIceCreamShops = [];
	const len = businesses.length;
	for(i=0; i<len; i++) {
		const businessDetails = {};

		businessDetails.id = businesses[i].id;
		businessDetails.name = businesses[i].name;
		businessDetails.review_count = businesses[i].review_count;
		businessDetails.rating = businesses[i].rating;

		businessDetails.address = businesses[i].location.display_address.join(' ');
		const reviews = await getReviews(businesses[i].id);
		
		// Get first excerpt from a review of that business 
		const review = {
			user: reviews[0].user.name,
			text: reviews[0].text
			
		}
		businessDetails.reviews = [];
		businessDetails.reviews.push(review);
		
		topIceCreamShops.push(businessDetails);
		
	}
	return topIceCreamShops;
}


/**
 * Yelp Fusion API - Business Search
 * Term : Ice Cream
 * Location: alpharetta
 * Limit: 5
 * Sort By: review_coun 
 */

 
async function printBusiness() {
	const filter = {
		term: "ice cream",
		location: "alpharetta",
		limit: 5,
		sort_by: "review_count"
	}
	const topIceCreamShops = await getTopBusinesses(filter);
	console.log(JSON.stringify(topIceCreamShops, null, 4));
}

printBusiness();


