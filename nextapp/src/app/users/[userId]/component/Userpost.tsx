type Props = {
  promise: Promise<PostAll[]>
  }
  export default async function Userposts({ promise }:Props) {
     const post:any = promise
  
    return (
      <>
      <div className="flex gap-1 ml-2">
        <h1 className="text-xl font-medium">Title:</h1>
        <h1 className="text-[18px] font-medium underline transition-all hover:font-semibold">{post.title}</h1>
      </div>
        <br/>
        <div className="flex">
          <h1 className="text-xl font-medium ml-2">Body:&nbsp;</h1>
          <h2 className="font-medium mb-2">{post.body}</h2>
        </div>
      </>
    )
  }
  