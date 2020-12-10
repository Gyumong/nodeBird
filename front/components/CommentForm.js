import { Input, Button, Form } from "antd";
import React, { useCallback } from "react";
import useInput from "../hooks/useInput";
import { useSelector } from "react-redux";
const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const [commentText, onChangeCommentText] = useInput("");
  const onSubmit = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText]);
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
