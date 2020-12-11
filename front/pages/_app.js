import React, { Component } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";
import wrapper from "../store/configureStore";
import reducer from "../reducers";
import withReduxSaga from "next-redux-saga";

// 페이지들의  공통적인 부분 처리 해주는 pages= _app.js
const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};
// Component에 들어가는 부분은 나머지 pages return 부분이 들어감 고로 app.js 컴포넌트는 나머지 페이지 컴포넌트들의 부모다.
Component.PropTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(withReduxSaga(NodeBird));
