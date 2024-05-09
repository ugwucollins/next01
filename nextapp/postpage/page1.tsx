const API_URL = 'https://jsonplaceholder.typicode.com/users';
// https://jsonplaceholder.typicode.com/users

const Userpage = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)

  if (!res.ok) throw new Error("Didn't get the correct data");
  
  const data = res.json()

  return data;
}

export default Userpage;
  





