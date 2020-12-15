import { Input, Button, Form } from "antd";
import React, { useCallback, useEffect } from "react";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { ADD_COMMENT_REQUEST } from "../reducers/post";
const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const { addCommentDone } = useSelector((state) => state.post);

  const [commentText, onChangeCommentText, setCommentText] = useInput("");
  const dispatch = useDispatch();

  useEffect(() => {
    // 포스트를 보내고 성공하면 input창을 비워준다.
    if (addCommentDone) {
      setCommentText("");
    }
  }, [addCommentDone]);

  const onSubmit = useCallback(() => {
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { content: commentText, postId: post.id, userId: id },
    });
    console.log(post.id, commentText);
  }, [commentText, id]);
  return (
    <Form onFinish={onSubmit}>
      <Form.Item style={{ position: "relative", margin: 0 }}>
        <Input.TextArea
          value={commentText}
          onChange={onChangeCommentText}
          rows={4}
        />
        <Button
          type="primary"
          htmlType="submit"
          style={{ position: "absolute", right: 0, bottom: "-40px" }}
        >
          짹잭
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CommentForm;
