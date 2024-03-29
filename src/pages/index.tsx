import Image from "next/image";
import { Inter } from "next/font/google";
import membersPosts from "../../posts/membersPosts.json"
import type { NextPage,InferGetStaticPropsType } from "next";
import { Infer } from "next/dist/compiled/superstruct";
import Post from "../components/Post"

const inter = Inter({ subsets: ["latin"] });

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home:NextPage<Props> = ({membersPosts}) =>{
  return(
    <>
    {
    membersPosts.map((post)=> {
    return <Post post ={post} key={post.url}/>
  })
  }
  </>
  )
}

export const getStaticProps = async () => {
  return{
    props:{
      membersPosts
    }
  }
}

export default Home;