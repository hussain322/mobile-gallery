const person = [
    {
      name: "rahim",
      age: 22,
      friends: ["rahim,karim,jabbar"],
    },
    {
      name: "rahim2",
      age: 22,
      friends: ["rahim,karim,jabbar"],
    },
    {
    name: "rahim3",
    age: 22,
    friends: ["rahim,karim,jabbar"],
  },
  ];

//   console.log(person.slice(1,2))

const dreamGirl = [
    {
      sokina: {
        name: "bbu",
        height: "5.4",
        family: [{ father: "rock", mother: "shila", sister: "chinki" }],
        age: undefined,
        contactInfo: [
          {
            facebook: {
              link: "https://www.facebook.com/",
              followers: "12545",
              status: "single",
              friendsList: [{ name: "rofik" }, undefined],
            },
          },
          { instagram: "https://www.instagram.com/" },
        ],
      },
    },
  ];

//   console.log(dreamGirl.sokina.contactInfo[1].instagram)

const phones = [
    { name: "sony", price: 500 },
    { name: "apple", price: 700 },
    { name: "sony", price: 700 },
  ];
  const  result = phones.filter(phone => phone.price != 500);
  // console.log(result)

  const obj ={a:1, b:7, c:3, length:2};
// console.log(Object.keys(obj).length);

const obj1= {module: 35, video:2}; const obj2= {module: 35, video:2};
// console.log(obj1 === obj2);

 const getGirlFriend= (name = "chokina")=>"name"; console.log(getGirlFriend());