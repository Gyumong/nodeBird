import React, { useState, useCallback } from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import styled from "styled-components";

const ButtonBlock = styled.div`
  margin-top: 10px;
`;

const FormBlock = styled(Form)`
  padding: 10px;
`;
const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);
  return (
    <FormBlock onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <Input
          name="user-password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonBlock>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonBlock>
    </FormBlock>
  );
};

export default LoginForm;
