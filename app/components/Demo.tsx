"use client";

import { useState } from "react";
import ContactTab from "./ContactTab";
import AboutTab from "./AboutTab";
import PostsTab from "./PostTab";
import TabButton from "./TabButton";

export default function TabContainer() {
  const [tab, setTab] = useState("about");

  function selectTab(nextTab: string) {
    setTab(nextTab);
  }

  return (
    <>
      <TabButton isActive={tab === "about"} onClick={() => selectTab("about")}>
        About
      </TabButton>
      <TabButton isActive={tab === "posts"} onClick={() => selectTab("posts")}>
        Posts (slow)
      </TabButton>
      <TabButton
        isActive={tab === "contact"}
        onClick={() => selectTab("contact")}
      >
        Contact
      </TabButton>
      <hr />
      {tab === "about" && <AboutTab />}
      {tab === "posts" && <PostsTab />}
      {tab === "contact" && <ContactTab />}
    </>
  );
}
