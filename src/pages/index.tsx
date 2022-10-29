import AuthenticatedUser from "@/components/AuthenticatedUser";
import ContactCard from "@/components/ContactCard";
import NoRoomScreen from "@/components/NoRoomScreen";
import Search from "@/components/Search";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="chat-app">
      <div className="chat-app__sidebar">
        <AuthenticatedUser />
        <Search />
        <div className="chat-app__contacts">
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
        </div>
      </div>
      <div className="chat-app__main">
        <NoRoomScreen />
      </div>
    </div>
  );
};

export default Home;
