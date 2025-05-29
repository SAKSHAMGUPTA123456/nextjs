import style from "../styles/index.module.css"
import Image from "next/image"
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
const Index=()=>{
  const router=useRouter()
  useEffect(()=>{
 document.body.style.background = 'linear-gradient(to bottom right, #ffe4e6, #ffffff)';
 return()=>{
  document.body.style.background="white"
 }
  },[])
 
  return(
   <>
<div className="flex justify-between">
  <div>
<Image src="image/logo.png" alt="" width={150} height={150}/></div>
<div className="flex">
  <div className="ml-14"> <Link href="/" className={router.pathname=="/" ?"underline":""}>HOME</Link></div>
  <div className="ml-10"><Link href="/account">ACCOUNT</Link></div>
</div>
<div></div>
</div>
<div className="flex mt-20 justify-between" >
<div></div>
<div style={{width:"450px"}} className="sm:mt-20"> 
  <h1 className="font-bold italic" style={{fontSize:"25px"}}>Give Your Workout</h1>
  <h1 className="font-bold">A New Style!</h1>
  <h4>Success isn't always about greatness.It's about consistency.Consistent
hard work gains success.Greatness will come
Explore Now</h4>
</div>
<div className="">
  <Image src="image/image1.png" alt="" width={400} height={400}/>
</div>
<div></div>
</div>
   </>
  )

}
export default Index