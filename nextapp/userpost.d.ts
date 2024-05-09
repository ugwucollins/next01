type PostAll = [
  {
    "userId": number,
    "it": number,
    "title": string,
    "body": string
  },
]


type UsersAll = [
    {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
      "street": string,
      "suite": string,
      "city": string,
      "zipcode": string | number,
      "geo": {
        "lat": string | number
        "lng": string | number
      }
    },
    "phone": string | number,
    "website":string,
    "company": {
      "name": string,
      "catchPhrase": string,
      "bs": string
    }
  }
]

