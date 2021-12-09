// API NEWS "https://newsapi.org/v2/everything?q=tesla&from=2021-11-07&sortBy=publishedAt&apiKey=f0549508d0964934a57cefcd027c33c9"

import React from "react";
import "./main.style.css";
import CardComponent from "../Card/CardComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState, useEffect } from "react";

function Main() {
  let [tesla, setTesla] = useState({});

  // useEffect(() => {
  //   fetch(
  //     "https://newsapi.org/v2/everything?q=tesla&from=2021-11-09&sortBy=publishedAt&apiKey=f0549508d0964934a57cefcd027c33c9"
  //   )
  //     .then((response) => response.json())

  //     .then((data) => setTesla(data.articles));
  // }, []);
  console.log(tesla);
  const posts = [
    {
      imgSrc:
        "https://media.istockphoto.com/photos/mid-adult-man-using-a-smart-phone-to-monitor-his-cryptocurrency-and-picture-id1324164290",
      title: "Title 1",
      text: "Text 1",
    },
    {
      imgSrc:
        "https://media.istockphoto.com/photos/mid-adult-man-using-a-smart-phone-to-monitor-his-cryptocurrency-and-picture-id1324164290",
      title: "Title 2",
      text: "Text 2",
    },
    {
      imgSrc:
        "https://media.istockphoto.com/photos/mid-adult-man-using-a-smart-phone-to-monitor-his-cryptocurrency-and-picture-id1324164290",
      title: "Title 3",
      text: "Text 3",
    },
    {
      imgSrc:
        "https://media.istockphoto.com/photos/mid-adult-man-using-a-smart-phone-to-monitor-his-cryptocurrency-and-picture-id1324164290",
      title: "Title 4",
      text: "Text 4",
    },
  ];
  // console.log(tesla);
  return (
    <div className="main">
      <div id="tab-poz">
        <Tabs
          style={{
            top: "80vh",
            left: "0",
            width: "300px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          defaultActiveKey="profile"
          // id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Home"></Tab>
          <Tab eventKey="profile" title="Profile"></Tab>
          <Tab eventKey="contact" title="Contact" disabled></Tab>
        </Tabs>
      </div>
      <h1>Our Video Catalog</h1>

      <div className="cardPosition">
        {posts.map((blog) => {
          console.log(tesla);
          return (
            <CardComponent
              imgSrc={blog.imgSrc}
              title={blog.title}
              text={blog.text}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Main;
