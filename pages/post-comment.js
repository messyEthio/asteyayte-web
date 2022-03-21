import { Icon } from "@iconify/react";
import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import CommentHeader from "../components/comments/comment-header";
import MainHeader from "../components/MainHeader";
import style from "./style.module.css";
export default function PostComment() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col p-0">
      <MainHeader />
      <CommentHeader />
      <div className="p-2">
        <Form layout="vertical" form={form} preserve={false}>
          <Form.Item
            label="Company name"
            name="company_name"
            rules={[{ required: true, message: "Please select company name" }]}
          >
            <Input placeholder="Select company name" />
          </Form.Item>
          <div className={"flex justify-between items-center mb-2"}>
            <span>
              <span className={style.asterisk}>*</span>Your comment
            </span>
            <Button type="link" size="large">
              <Icon icon="ic:baseline-keyboard-voice" fontSize={25} />
            </Button>
          </div>

          <Form.Item
            name="comment"
            rules={[{ required: true, message: "Please enter your comment" }]}
          >
            <Input.TextArea rows={6} placeholder="Write your comment" />
          </Form.Item>
          <Button
            id="submit"
            type="primary"
            htmlType="submit"
            className="login-btn-container-btn w-full flex justify-center items-center space-x-3"
          >
            {loading ? (
              <svg
                style={{
                  background: "none",
                  shapeRendering: "auto",
                }}
                width="16px"
                height="16px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
              >
                <circle
                  cx="50"
                  cy="50"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="8"
                  r="42"
                  strokeDasharray="113.09733552923255 150"
                  transform="rotate(306.582 50 50)"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    dur="1s"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                  >
                    <span>Post comment</span>
                  </animateTransform>
                </circle>
              </svg>
            ) : null}
            <span>Post comment</span>
          </Button>
        </Form>
      </div>
    </div>
  );
}
