const apiKey = 'FfNFug0TRu1UrTpLor_zN9NIGe9JmlmmEMHfCURdCerizsFc2LJr-1x2sqvtJdCg2hewnBNBdfT1RqvzzRE15ctLJP5JtLyeJK2LOH9UPPADdallyW9Fn7pgU2rfX3Yx';
export const Yelp = {
    search(term, location, sortBy) {
        //CORS Anywhere will take requests sent to its API endpoint, make them for the requesting app with the proper CORS permissions, and then return the response back to the requesting app.
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }.then(response => {
                return response.json();
            }).then(jsonResponse => {
                if (jsonResponse.businses) {
                    return jsonResponse.business.map(business => {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.address,
                        city: business.city,
                        state: business.state,
                        zipCode: business.zipCode,
                        category: business.category,
                        rating: business.rating,
                        reviewCount: business.reviewCount
                    });
                }
            })
        });
    }
}