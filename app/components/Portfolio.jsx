
"use client"
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

function Portfolio() {
const [activeTab, setActiveTab] = React.useState("html"); 
const data = [
  {
    label: "anything",
    value: "html",
    desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
  },
  {
    label: "React",
    value: "react",
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },
  {
    label: "Vue",
    value: "vue",
    desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
  },
  {
    label: "Angular",
    value: "angular",
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },
  {
    label: "Svelte",
    value: "svelte",
    desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
  },
];
  return (
    <section>
      <div className=" h-[40rem] w-full bg-slate-200">
        <div className="mx-[2rem] sm:mx-[4rem] md:mx-[5rem] lg:mx-[5rem] xl:mx-[10rem]">
          <h3
            className="pt-2 text-[14px] md:py-10 md:text-[16px] 2xl:py-20 2xl:text-[22px]
             text-center font-bold underline underline-offset-2 text-[#0B5CA9]"
          >
            Portfolio
          </h3>
          <h1 className="text-[15px] font-semibold text-center sm:text-[15px] md:text-[25px] lg:text-[28px] lg:font-bold 2xl:text-[35px]">
            What I Do for My Clients
          </h1>
          <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className: "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
