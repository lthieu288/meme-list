import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { useQuery } from "react-query";
const Meme = () => {
  const { data } = useQuery("repoData", () => {
    axios.get("https://api.imgflip.com/get_memes").then((response) => {
      console.log(response.data.data.memes);
      return response.data;
    });
  });

  return <div>{data}</div>;
};

export default Meme;
