import { Suspense } from "react"
import UserApi from "../../../../postpage/page2"
import PostApi from "../../../../postpage/page3"
import Userpost from "./component/Userpost"
import Link from "next/link"
type params = {
  params: {
    userId: string
  }
}
  const Postpage = async ( {params : { userId }}: params)  => {
  const userData: Promise<UsersAll> = UserApi( userId )
  const postData: Promise<PostAll[]> = PostApi( userId )

   //const [user, post]:any = await Promise.all([userData, postData])
    const user:any = await userData;
     const post:any = await postData;
   
  return (
    <div>
      <br />
    <Suspense fallback={<h2>Loading ...</h2>}>
       <div className="flex gap-1 ml-2">
        <h1 className="text-xl">Name:&nbsp;</h1>
        <h1 className="text-xl font-semibold">{user.name}</h1>
      </div>
        <Userpost promise={post} key={post.userId} />
        <Link href='/users' className="hover:text-red-700 hover:font-semibold ml-2">Back To User Page</Link>
    </Suspense> 
    </div>
  )
}
export default Postpage