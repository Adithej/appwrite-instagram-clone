import React from 'react'
import OpenGraph from 'src/component/opengraph'

export default function post({openPost}) {
    return (
        <div>
        {console.log("openPost", openPost)}
            <OpenGraph metaData={openPost} />
            
            test post
        </div>
    )
}

export const getServerSideProps=async(context)=>{

  const id = context.query.id
  if(id==undefined){
    return{
      props:{openPost:{
        image:"https://dev.liiighthouse.net/images/icons/logo_liiighthouse.svg",
        titile:"liiighthouse",
        description:"speek freely",
        url:"https://dev.liiighthouse.net/"
      }}
    }
  }
  console.log("id",id)
  const  res= await fetch(`https://dev-social.liiighthouse.net/api/userApi/view_post?post_id=${id}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  const data=await res.json();

  return{
    props:{openPost:{
      image: data.data.image,
      titile:data.data.titile,
      description:data.data.description
    }}
  }

}

  

