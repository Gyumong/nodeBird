import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
const Profile = () => {
  const followerList = [
    { nickname: "민구" },
    { nickname: "몽실" },
    { nickname: "규몽" },
  ];
  const followingList = [
    { nickname: "민구" },
    { nickname: "몽실" },
    { nickname: "규몽" },
  ];
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
