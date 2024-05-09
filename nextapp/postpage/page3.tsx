const API_URL = 'https://jsonplaceholder.typicode.com/posts'
export default async function PostApi(userId: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
   
    if (!res.ok) throw new Error("Didn't get the correct data3");

    const data = res.json()

    return data;
}


  




