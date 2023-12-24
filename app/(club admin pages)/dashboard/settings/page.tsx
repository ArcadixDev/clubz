"use client";

import {
  IoIosArrowRoundBack,
  IoIosNotificationsOutline,
  IoIosArrowForward,
  IoIosGlobe,
  IoIosChatboxes,
} from "react-icons/io";
import {
  IoShieldCheckmarkOutline,
  IoHelpCircleOutline,
  IoTrashBinOutline,
  IoBugOutline,
} from "react-icons/io5";
import { MdThumbsUpDown } from "react-icons/md";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function settings() {
  const router = useRouter();
  const general_links = [
    {
      name: "Notifications",
      link: "/settings/notifications",
      icon: <IoIosNotificationsOutline className="h-6 w-6" />,
    },
    {
      name: "Language",
      link: "/settings/language",
      icon: <IoIosGlobe className="h-6 w-6" />,
    },
    {
      name: "Privacy",
      link: "/settings/privacy",
      icon: <IoShieldCheckmarkOutline className="h-6 w-6" />,
    },
    {
      name: "FAQ's",
      link: "/settings/faqs",
      icon: <IoIosChatboxes className="h-6 w-6" />,
    },
    {
      name: "Help",
      link: "/settings/help",
      icon: <IoHelpCircleOutline className="h-6 w-6" />,
    },
    {
      name: "Delete My Account",
      link: "/settings/delete-account",
      icon: <IoTrashBinOutline className="h-6 w-6" />,
    },
  ];

  const feedback_links = [
    {
      name: "Report a Problem",
      link: "/feedback/report-problem",
      icon: <IoBugOutline className="h-6 w-6" />,
    },
    {
      name: "Send Feedback",
      link: "/feedback/send-feedback",
      icon: <MdThumbsUpDown className="h-6 w-6" />,
    },
  ];
  return (
    <div className="relative mx-24 mt-16">
      <Link href={""} className="flex items-center gap-x-3 text-2xl">
        {/* {" "} */}
        {/* <Button  className=""> */}
        <IoIosArrowRoundBack onClick={() => router.back()} />
        {/* </Button>{" "} */}
        Settings
      </Link>
      <hr className="my-5" />
      <div className="flex min-h-min flex-col rounded-lg bg-muted p-10">
        <span className="mb-5 text-2xl text-white">General</span>
        {general_links.map((item, index) => {
          return (
            <Link href={item.link} key={index}>
              <div className="group mx-10 my-5 flex w-5/6 cursor-pointer items-center justify-between text-lg text-white">
                <div className="flex items-center gap-x-3">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                <div>
                  <IoIosArrowForward className="h-6 w-6 transition-all group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          );
        })}
        <span className="mb-5 mt-10 text-2xl text-white">Feedback</span>
        {feedback_links.map((item, index) => {
          return (
            <Link href={item.link} key={index}>
              <div className="mx-10 my-5 flex w-5/6 cursor-pointer items-center justify-between text-lg text-white">
                <div className="flex items-center gap-x-3">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                <div>
                  <IoIosArrowForward className="h-6 w-6 transition-all group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
