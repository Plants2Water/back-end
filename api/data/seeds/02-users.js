exports.seed = function(knex, Promise) {
    return knex('users').insert([
        {   username: 'doej', 
            password: "$2a$08$AzOlHUp/rIlACzSd17YSxOAD7CYbCXVZng0TiHMTRsx88lCI5qVUu",
            last_name: "Doe",
            first_name: "John",
            telephone: "(208)-382-6396",
            email: "johndoe@name.com"
        },
        {   username: 'brownthumb', 
            password: "$2a$08$tjE6ebEFy7n7zUjsjD2IO.jilGy.RsS8dQEdJgk70XeDrKpnSVVtK",
            last_name: "Jones",
            first_name: "Pesticide",
            telephone: "(208)-382-6786",
            email: "brownie@kill.com"
        },
        {
            username: 'janesmith', 
            password: "$2a$08$q/WhUp36r6LKs8tWdQ/5guQt8kMxiy0O8jHPGZXwKsmxjOSD5rQ2C",
            last_name: "Smith",
            first_name: "Jane",
            telephone: "(215)-555-1243",
            email: "jane.smith@flower.com"
        },
        {
            username: 'plantlover', 
            password: "$2a$08$MtASjzwWWWD.N8XX4hE2G.lRt0J08Qb4FTjd.OODcz4hQsRppyMxK",
            last_name: "Williams",
            first_name: "Tom",
            telephone: "(801)-555-7712",
            email: "tommyw@blast.com"
        },
    ]);
  };