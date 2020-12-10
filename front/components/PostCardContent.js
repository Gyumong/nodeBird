import React from "react";
import Link from "next/link";
const PostCardContent = ({ postData }) => {
  return (
    <>
      {postData.split(/(#[^\s#]+)/g).map((v) => {
        if (v.match(/(#[^\s#]+)/g)) {
          return (
            <Link href={`/hashtag/${v.slice(1)}`}>
              <a>{v}</a>
            </Link>
          );
        }
        return v;
      })}
    </>
  );
};

export default PostCardContent;
