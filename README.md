# Yelp Fusion Code Challenge 

This is a simple script to perform a search on the Yelp Fusion API for top five ice cream shops in Alpharetta

## Setup

Clone the repo:

```
$ git clone https://github.com/dheerajsingh20aug/code-challenge-yelp-fusion.git
```

Go into the directory:

```
$ cd code-challenge-yelp-fusion
```

Install the dependences:

```
$ npm install 
```

Open up the `index.js` file and change your API Key from the [manage app page](https://www.yelp.com/developers/v3/manage_app)

```javascript
// Place holder for Yelp Fusion's API Key. Grab them from https://www.yelp.com/developers/v3/manage_app
const apiKey = '<YOUR_API_KEY>';
```

You may optionally update the search criteria in
```javascript
function printBusiness() {
	const filter = {
		term: "ice cream",
		location: "alpharetta",
		limit: 5,
		sort_by: "review_count"
	}
	const topIceCreamShops = await getTopBusinesses(filter);
	console.log(JSON.stringify(topIceCreamShops, null, 4));
}
```

## Usage

Once you're all setup, you should be able to run the script directly from the command line:

```
$ npm start
```

It will print the top five ice cream shops in Alpharetta:
```javascript
[
    {
        "id": "v21jReWx5dd5KuQ0QS6Dog",
        "name": "Scream'n Nuts",
        "review_count": 307,
        "rating": 4.5,
        "address": "5950 North Point Pkwy Alpharetta, GA 30022",
        "reviews": [
            {
                "user": "Stacy A.",
                "text": "But far the best donuts in the area. These donuts have one thing in common, they are all yeast donut based 
and that's about it. The variety is outstanding...."
            }
        ]
    },
    {
        "id": "VdcQMPVIIfsiHU2FUOyDNQ",
        "name": "Sweet Spot",
        "review_count": 186,
        "rating": 4.5,
        "address": "6035 Peachtree Rd Ste A-115 Doraville, GA 30341",
        "reviews": [
            {
                "user": "Mhailene M.",
                "text": "Love this place!! \nEverytime I walk by, they are busy on the weekends which is a great sign! Even during the winter months :)!! \n\nThey have drinks, ice..."
            }
        ]
    },
    {
        "id": "KPwCwuyKWp8oyQrKo0-Uyw",
        "name": "Daddy O'Brien's Irish Ice Cream Pub",
        "review_count": 165,
        "rating": 4.5,
        "address": "5910 Suwanee Dam Rd Ste 400 Sugar Hill, GA 30518",
        "reviews": [
            {
                "user": "Diana T.",
                "text": "Wow, that's some impressive ice cream! It is the richest ice cream I have ever had. The best part was that 
I was able to get an ice cream flight! The..."
            }
        ]
    },
    {
        "id": "0RDGOFcgDhzry4MDopu0-A",
        "name": "Jeni's Splendid Ice Creams",
        "review_count": 148,
        "rating": 4.5,
        "address": "800 Avalon Blvd Alpharetta, GA 30009",
        "reviews": [
            {
                "user": "Thuy T.",
                "text": "If G(j)eniE granted me 3 wishes I would wish for a local Jeni's ice cream shop here in Orlando and by that 
I mean inside my house. Secondly that my survival..."
            }
        ]
    },
    {
        "id": "fqbZGZDppDJpwcS7P3V7wg",
        "name": "Alchemist Trading Co",
        "review_count": 145,
        "rating": 4.5,
        "address": "9700 Medlock Bridge Rd Ste 138 Alpharetta, GA 30022",
        "reviews": [
            {
                "user": "Lauren G.",
                "text": "I'm a big fan of this cute little place! Their spot in this strip mall has been rotating for a while, and it's nice to finally have some local coffee in..."
            }
        ]
    }
]
```

