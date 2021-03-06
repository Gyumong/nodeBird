/** @format */
// 개별 페이지
import { useRouter } from "next/router";
import { END } from "redux-saga";
import Axios from "axios";
import wrapper from "../../store/configureStore";
import { LOAD_POSTS_REQUEST, LOAD_POST_REQUEST } from "../../reducers/post";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import AppLayout from "../../components/AppLayout";
import PostCard from "../../components/PostCard";
import { useSelector } from "react-redux";
import Head from "next/head";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const { singlePost } = useSelector((state) => state.post);
  return (
    <AppLayout>
      <Head>
        <title>
          {singlePost.User.nickname}
          님의 글
        </title>
        <meta name="description" content={singlePost.content} />
        <meta
          property="og:title"
          content={`${singlePost.User.nickname}님의 게시글`}
        />
        <meta property="og:description" content={singlePost.content} />
        <meta
          property="og:image"
          content={
            singlePost.Images[0]
              ? singlePost.Images[0].src
              : "https://nodebird.com/favicon.ico"
          }
        />
        <meta property="og:url" content={`http://localhost:3000/post/${id}`} />
      </Head>
      <PostCard post={singlePost} />
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    Axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      Axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      // 페이지 접속시 사용자 정보 불러옴
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
      type: LOAD_POST_REQUEST,
      data: context.params.id,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Post;
