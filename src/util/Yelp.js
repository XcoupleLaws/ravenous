
const apiKey="8fPu3sMKDTLLY1VMFPwydmlJKxLSpUZoyj4zAXiWSshPvpcCOJXIsYIIq7hqO3Dc1A8LGZ-nMRUevvslSFpncphMyQRDNs0CbB3jZtiHH1t9VuKgNgfArehorXYXXnYx";
const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            }
        }).then(response=>{
            if(!response.ok){
                return [];
            }
            return response.json();
        }).then(jsonResponse=>{
            if(jsonResponse.businesses.length){
                console.log(jsonResponse.businesses); //массив обьектов
                return jsonResponse.businesses.map(business=>{
                    return ({
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
                    });
                });
            }
        }).catch(error=> console.log(error));
    }
};

export default Yelp;