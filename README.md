# Phonegigs - Development Planning

## Brief

Phonegigs, an e-commerce website for second hand phone market. User can login and buy best deal if available for them. On the website all the top (atmost 5) products will be diplayed in carousel on the home page; User will have two options, either to visit product page or see more products from that brand. User would also like the products and can view them in favorites section when they log in. They should be able to buy products and see history of products they have bought. Product will have multiple images with brief description along with price and rating.

## Tech Stack

- HTML, CSS (TailwindCSS)
- JavaScript
- Next.js (React.js) + NextAuth.js
- Google Firebase
- Express.js

## Models

### User

```json
{
	"name": "string",
	"email": "string",
	"contact_number": "number",
	"address": {
		"home_no": "number",
		"street": "string",
		"city": "string",
		"landmark": "string",
		"pincode": "number",
		"country": "string"
	}
}
```

### Product

```json
{
	"name": "string",
	"make": "string",
	"image": "url",
	"description": "string",
	"price": "number"
}
```

### Collaborators

- [Shubham Garudkar](https://github.com/garudkarshubham)
- [Sushant Garudkar](https://github.com/Sushant5776)
