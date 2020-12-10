import { Card, Popover, Button } from "antd";
import {
  RetweetOutlined,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import ButtonGroup from "antd/lib/button/button-group";
import Avatar from "antd/lib/avatar/avatar";
import PostImages from "./PostImages";
const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [commentFormOpen, setCommentFormOpen] = useState(false);
  const id = useSelector((state) => state.user.me?.id);
  // 옵셔널 체이닝연산자 보호연산자를 단축한거임

  const onToggleLiked = useCallback(() => {
    setLiked((prev) => !prev);
  });
  const onToggleComment = useCallback(() => {
    setCommentFormOpen((prev) => !prev);
  });
  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartOutlined key="heart" onClick={onToggleLiked} />
          ) : (
            <HeartTwoTone twoToneColor="#eb2f96" onClick={onToggleLiked} />
          ),
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={
              <ButtonGroup>
                {id && post.User.id === id ? (
                  <>
                    {" "}
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </ButtonGroup>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          title={post.User.nickname}
          description={post.content}
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
        />
      </Card>
      {/* <CommentForm />
      <Comments /> */}
      {commentFormOpen && <div>댓글</div>}
    </div>
  );
};

export default PostCard;
