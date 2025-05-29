import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
const Account=()=>{
const backgroundColors = [
  '#FFB6C1', '#FFC0CB', '#DC143C', '#FFF0F5', '#DB7093',
  '#FF69B4', '#FF1493', '#C71585', '#FFDAB9', '#FFE4E1',
  '#FFEFD5', '#FFF5EE', '#FAF0E6', '#F08080', '#E9967A',
  '#FF6347', '#FF4500', '#FF7F50', '#FFA07A', '#FF8C00',
  '#FFA500', '#FFD700', '#FFFFE0', '#FFFACD', '#FAFAD2',
  '#FFEFD5', '#FFE4B5', '#FFDAB9', '#EEE8AA', '#F0E68C',
  '#BDB76B', '#E6E6FA', '#D8BFD8', '#DDA0DD', '#EE82EE',
  '#DA70D6', '#FF00FF', '#BA55D3', '#9370DB', '#8A2BE2',
  '#9400D3', '#9932CC', '#8B008B', '#800080', '#4B0082',
  '#6A5ACD', '#483D8B', '#7B68EE', '#8470FF', '#4169E1',
  '#0000FF', '#0000CD', '#00008B', '#000080', '#191970',
  '#87CEFA', '#87CEEB', '#00BFFF', '#1E90FF', '#6495ED',
  '#4682B4', '#5F9EA0', '#00CED1', '#40E0D0', '#48D1CC',
  '#20B2AA', '#008B8B', '#008080', '#00FFFF', '#00FFFF',
  '#E0FFFF', '#AFEEEE', '#7FFFD4', '#66CDAA', '#98FB98',
  '#90EE90', '#00FF7F', '#00FA9A', '#00FF00', '#32CD32',
  '#228B22', '#006400', '#7FFF00', '#7CFC00', '#ADFF2F',
  '#9ACD32', '#6B8E23', '#556B2F', '#808000', '#BDB76B',
  '#F5F5DC', '#FAEBD7', '#FFE4C4', '#FFDEAD', '#F5DEB3',
  '#DEB887', '#D2B48C', '#BC8F8F', '#F0FFF0', '#FFFFFF'
];


    const [newcolor,oldcolor]=useState("yellow")

    const router=useRouter()
    useEffect(()=>{
document.body.style.backgroundColor=newcolor
const fg=Math.floor(Math.random()*90);

setTimeout(() => {
    

    oldcolor(backgroundColors[fg])
},2000);
// eslint-disable-next-line react-hooks/exhaustive-deps
    },[newcolor])
 return(
   <>
   <div className="flex justify-between">
  <div>
<Image src="image/logo.png" alt="" width={150} height={150}/></div>
<div className="flex">
  <div className="ml-14"> <Link href="/" className={router.pathname=="/" ?"underline":""}>HOME</Link></div>
  <div className="ml-15"><Link href="/account" className={router.pathname!="/"?"underline red":""}>ACCOUNT</Link></div>
</div>
<div></div>
</div>



  <form>
    <div className="flex justify-center mt-9">
    <div style={{width:"350px"}}>
      <div className="flex justify-center">
<h1 className="text-white" style={{fontSize:"25px"}}>LOGIN</h1></div>
<div className="flex justify-center">
<input type="text" className="bg-white" placeholder="USERNAME"></input></div>
<br></br>
<div className="flex justify-center">
<input type="text" className="bg-white" placeholder="PASSWORD"></input></div>
 <div className="flex justify-end mt-2"><h2 style={{color:"white"}}>Forgot password</h2></div>
 <div className="flex justify-center"><button style={{color:"red",backgroundColor:"white"}}>Submit Now</button></div>
    </div>
   
    </div>
  </form>


   </>

 )
}
export default Account