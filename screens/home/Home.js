import React from "react";
import { Layout } from "../../components";
import { Box } from "rebass";

export const Home = () => (
  <Layout>
    <Box
      css={{
        height: "100vh",
        background:
          "url(https://gld-funding-template-01.herokuapp.com/assets/img/guy.png)",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    />
  </Layout>
);
