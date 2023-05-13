import "../Assets/style/chat.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
// import { Client } from "@web3mq/client";

import React, { useState } from "react";
import Message from "../component/Chat/Message";
import SearchFilter from "../component/Chat/SearchTopic";
// import SearchFilter from "../component/Chat/CreateTopic";

const Chat = () => {
  

  let topics = ["etheruem", "solana", "web3", "technology", "bitcoin"];

  // const bestEndpointUrl = await Client.init({
  //   connectUrl: "https://testnet-us-west-1-2.web3mq.com", //
  //   app_key: "app_key", // temporary authorization key obtained by applying, will be removed in future testnets and mainnet
  // });
  // const fastUrl = await Client.init({
  //   connectUrl: bestEndpointUrl, // takes in a valid endpoint url as input, when this paramter is given, client will always connect to that specific node.
  //   app_key: "app_key", // Appkey applied from our team
  // });
  return (
    <div classname="container-fluid">
      <Navbar />
      <h2>Chose Topics </h2>
      <SearchFilter topics={topics} />
      <form>
        <p>Create New Topic</p>
        <input className="newTopic" />
        <p>Message</p>
        <Message placeholder={'what is on your mind'} />
        <div><button type="submit">submit</button></div>
        
      </form>
      <Footer />
    </div>
  );
};
export default Chat;
