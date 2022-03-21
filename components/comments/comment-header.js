import { Icon } from "@iconify/react";
import { Button, Typography } from "antd";
import Link from "next/link";
import React from "react";
import style from "./style.module.css";
export default function CommentHeader() {
  return (
    <div className={style.header}>
      <Button type="link">
        <Link href={"/"}>
          <Icon
            icon="eva:arrow-back-fill"
            fontSize={40}
            style={{ marginTop: "-10px", color: "white" }}
          />
        </Link>
      </Button>
      <Typography.Title level={4} className={style.title}>
        Post your comment
      </Typography.Title>
    </div>
  );
}
