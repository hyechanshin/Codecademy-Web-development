const apiKey = 'FfNFug0TRu1UrTpLor_zN9NIGe9JmlmmEMHfCURdCerizsFc2LJr-1x2sqvtJdCg2hewnBNBdfT1RqvzzRE15ctLJP5JtLyeJK2LOH9UPPADdallyW9Fn7pgU2rfX3Yx';

const Yelp = {
    search(term, location, sortBy) {
        //CORS Anywhere will take requests sent to its API endpoint, make them for the requesting app with the proper CORS permissions, and then return the response back to the requesting app.
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    }).then(response => {
        return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
        });
    }
};

export default Yelp;