import React from "react";
import Layout from "@theme/Layout";
import {pdf} from "../components/pdfBase"

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
        <iframe
          src={`data:application/pdf;base64,${pdf}`}
          style={{ width: "1000px", height: "1100px" }}
          title = "Vamsi's Resume"
        ></iframe>
      </div>
    </Layout>
  );
}

export default Hello;

