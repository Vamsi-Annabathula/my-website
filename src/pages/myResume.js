import React from "react";
import Layout from "@theme/Layout";
import { HomepageHeader } from "./index";

function Hello() {
  return (
    <Layout title="My Resume">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "150vh",
          fontSize: "20px",
        }}
      >
        <embed
          src="../../static/docs/myResume.pdf"
          style={{ width: "1000px", height: "1100px" }}
        ></embed>
      </div>
    </Layout>
  );
}

export default Hello;
