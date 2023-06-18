/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
const getusers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};
const getDogs = async () => {
  // so that it will not store the data in the cache mmemory, it will load every time page is refreshing
  //   const res = await fetch("https://dog.ceo/api/breeds/image/random", {
  //     cache: "no-store",
  //   });
  // another way is revalidate
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    next: {
      revalidate: 3, //after 3 seconds this is going to fetch again
    },
  });
  return res.json();
};
const Posts = async () => {
  //   const posts = await getPosts();
  const [posts, users, dog] = await Promise.all([
    getPosts(),
    getusers(),
    getDogs(),
  ]);
  return (
    <>
      <Image src={dog.message} alt={""} height={300} width={300} />
      <div>
        {posts.map((post: any, i: any) => (
          <div key={i}>
            <h1>{post.title}</h1>
          </div>
        ))}
      </div>
      <div>
        {users.map((user: any, i: any) => (
          <div key={i}>
            <h1>{user.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
