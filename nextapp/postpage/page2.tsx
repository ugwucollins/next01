const API_URL = 'https://jsonplaceholder.typicode.com/users';
// https://jsonplaceholder.typicode.com/users

const UserApi = async (userId: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  if (!res.ok) throw new Error("Didn't get the correct data2");

  const data = res.json()

  return data;
}

export default UserApi;
  





