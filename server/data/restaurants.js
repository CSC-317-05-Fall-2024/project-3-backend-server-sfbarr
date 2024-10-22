// Fill this in
let restaurantData = [ 
    {
        "name": "Anzukko",
        "phone": "(415) 555-5555",
        "address": "2F Le Sixieme bldg., 422-1 Ebisu-cho, Nakagyo-ku",
        "photo": "https://placehold.co/235x188?text=Restaurant+Image&font=Lora"
    },
    {
        "name": "Nishiki Warai",
        "phone": "(415) 555-5555",
        "address": "499 Nakauoyacho, Nishikikoji Sagaru, Kyoto, 604-8055",
        "photo": "https://placehold.co/235x188?text=Restaurant+Image&font=Lora"
    },
    {
        "name": "Giro Giro Hitoshina",
        "phone": "(415) 555-5555",
        "address": "420-7 Nanba-cho, Takoyakushi-sagaru, Kiyamachi-dori, Shimogyo-ku, Kyoto, 600-8015",
        "photo": "https://placehold.co/235x188?text=Restaurant+Image&font=Lora"
    },
    {
        "name": "Ippudo Ramen",
        "phone": "(415) 555-5555",
        "address": "580 Nakanocho, Nishikikoji-Sagaru, Teramachi-dori, Nakagyo-ku, Kyoto, 604-8042",
        "photo": "https://placehold.co/235x188?text=Restaurant+Image&font=Lora"
    },
    {
        "name": "Kamaiki",
        "phone": "(415) 555-5555",
        "address": "9-1 Imamikadocho, Nara, 630-8374",
        "photo": "https://placehold.co/235x188?text=Restaurant+Image&font=Lora"
    },
    {
        "name": "Edogawa Naramachi",
        "phone": "(415) 555-5555",
        "address": "15 Kunodocho, Nara, 630-8357",
        "photo": "https://placehold.co/235x188?text=Restaurant+Image&font=Lora"
    },
    {
        "name": "Tenryu-ji Shigetsu (Vegan)",
        "phone": "(415) 555-5555",
        "address": "68 Sagatenryuji Susukinobabacho, Ukyo-ku, Kyoto, 616-8385",
        "photo": "https://placehold.co/235x188?text=Restaurant+Image&font=Lora"
    },
    {
        "name": "Arashiyama Yoshimura",
        "phone": "(415) 555-5555",
        "address": "3-4 Sagatenryuji Tsukurimichicho, Ukyo-ku, Kyoto, 616-8384",
        "photo": "https://placehold.co/235x188?text=Restaurant+Image&font=Lora"
    },
    {
        "name": "Sumibi Yakiniku Tsunku",
        "phone": "(415) 555-5555",
        "address": "714 Ebisunocho Shimogyo-ku Ebisu Square Bldg. 1F, Kyoto 600-8310 Kyoto Prefecture",
        "photo": "https://placehold.co/235x188?text=Restaurant+Image&font=Lora"
    }
];



const getNextId = () => {
    let lastId = restaurantData.length;     
    /* NOTE: I moved ^^ let statement ^^ into scope */
    lastId += 1;
    return lastId;
}

// Get a list of restaurants
const getRestaurants = () => {
    return restaurantData;
};


// Get a restaurant by id
const getRestaurant = (id) => {
};

// Create a new restaurant entry
const createRestaurant = (newRestaurant) => {
};

// Delete a restaurant by id
const deleteRestaurant = (id) => {
};

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };