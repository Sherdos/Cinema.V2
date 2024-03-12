import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MyBreadcrumbExample(props) {
  return (
    <Breadcrumb>
      {props.paths.map((path, index) => {
        if (!path.is_active) {
          return (
            <Breadcrumb.Item key={index}>
              <Link
                style={{
                  textDecorationLine: "none !important",
                  color: "white",
                }}
                to={path.url}
              >
                {path.title}
              </Link>
            </Breadcrumb.Item>
          );
        } else {
          return (
            <Breadcrumb.Item
              style={{ textDecorationLine: "none", color: "white" }}
              key={index}
              active
            >
              {path.title}
            </Breadcrumb.Item>
          );
        }
      })}
    </Breadcrumb>
  );
}
