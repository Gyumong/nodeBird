import React from "react";
export const init = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "규몽",
      },
      content: "첫번째 게시글 #해시태그",
      Images: [
        {
          src:
            "https://img1.daumcdn.net/thumb/C428x428/?scode=mtistory2&fname=https%3A%2F%2Ftistory4.daumcdn.net%2Ftistory%2F4328096%2Fattach%2F032fa1057f75438197365a6da7cc794c",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "규몽",
          },
          content: "우왕 ㅋ 굳",
        },
        {
          User: {
            nickname: "상도",
          },
          content: "ㅅㄷ ㅅㄷ",
        },
      ],
    },
  ],
  imagesPaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터 임니다",
  User: {
    id: 1,
    nickname: "밈구",
  },
  Images: [],
  Comments: [],
};
const reducer = (state = init, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts], // 앞에다 추가해야 게시글 맨 위에 올라옴
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
