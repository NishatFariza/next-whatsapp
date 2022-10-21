import AuthenticatedUser from "@/components/AuthenticatedUser";
import ContactCard from "@/components/ContactCard";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="chat-app">
      <div className="chat-app__sidebar">
        <AuthenticatedUser />
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
      <div className="chat-app__main">content</div>
    </div>
  );
};

export default Home;
