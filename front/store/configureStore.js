import create from "@ant-design/icons/lib/components/IconFont";
import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import reducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  store.sagaTask = sagaMiddleware.run(rootSaga); // 사가미들웨어 실행 rootSaga는 rootReducer와 같은 느낌

  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development", // true면 redux에 관해서 자세한 설명이 나옴
});

export default wrapper;
