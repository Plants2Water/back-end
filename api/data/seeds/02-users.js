exports.seed = function(knex, Promise) {
    return knex('users').insert([
        {   username: 'doej', 
            password: "2021-07-27T07:45:00Z",
            last_name: "Doe",
            first_name: "John",
            telephone: "(208)-382-6396",
            email: "johndoe@name.com"
        },
        {   username: 'brownthumb', 
            password: "2021-07-27T07:45:00Z",
            last_name: "Jones",
            first_name: "Pesticide",
            telephone: "(208)-382-6786",
            email: "brownie@kill.com"
        },
        {
            username: 'janesmith', 
            password: "2021-07-27T07:45:00Z",
            last_name: "Jane",
            first_name: "Smith",
            telephone: "(215)-555-1243",
            email: "jane.smith@flower.com"
        },
        {
            username: 'plantlover', 
            password: "2021-07-27T07:45:00Z",
            last_name: "Williams",
            first_name: "Tom",
            telephone: "(801)-555-7712",
            email: "tommyw@blast.com"
        },
    ]);
  };