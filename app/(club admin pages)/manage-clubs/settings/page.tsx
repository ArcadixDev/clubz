import { IoIosArrowRoundBack, IoIosNotificationsOutline, IoIosArrowForward, IoIosGlobe, IoIosChatboxes } from "react-icons/io";
import { IoShieldCheckmarkOutline, IoHelpCircleOutline,IoTrashBinOutline, IoBugOutline } from "react-icons/io5";
import { MdThumbsUpDown } from "react-icons/md";

import Link from "next/link";

export default function settings() {
    const general_links= [
        {
            name: "Notifications",
            link: "/settings/notifications",
            icon: <IoIosNotificationsOutline className="h-6 w-6"/>,
        },
        {
            name: "Language",
            link: "/settings/language",
            icon: <IoIosGlobe className="h-6 w-6"/>,
        },
        {
            name: "Privacy",
            link: "/settings/privacy",
            icon: <IoShieldCheckmarkOutline className="h-6 w-6"/>,
        },
        {
            name: "FAQ's",
            link: "/settings/faqs",
            icon: <IoIosChatboxes className="h-6 w-6"/>,
        },
        {
            name: "Help",
            link: "/settings/help",
            icon: <IoHelpCircleOutline className="h-6 w-6"/>,

        },
        {
            name: "Delete My Account",
            link: "/settings/delete-account",
            icon: <IoTrashBinOutline className="h-6 w-6"/>, 
        }
    ];

    const feedback_links= [
        {
            name: "Report a Problem",
            link: "/feedback/report-problem",
            icon: <IoBugOutline className="h-6 w-6"/>,
        },
        {
            name: "Send Feedback",
            link: "/feedback/send-feedback",
            icon: <MdThumbsUpDown className="h-6 w-6"/>,
        }
    ]
  return (
    <div className="relative mx-24 mt-16">
      <Link href={""} className="flex items-center gap-x-3 text-2xl"> <IoIosArrowRoundBack /> Settings</Link>
      <hr className="my-5" />
      <div className="flex flex-col p-10 bg-gray-200 bg-opacity-40 min-h-min rounded-lg">
        <span className="text-2xl text-white mb-5">General</span>
        {
            general_links.map((item, index) =>{
                return (
                    <Link href={item.link} key={index}>
                        <div className="group flex w-5/6 text-lg items-center justify-between my-5 mx-10 text-white cursor-pointer">
                            <div className="flex gap-x-3 items-center">
                            {item.icon}
                            <span>{item.name}</span>
                            </div>
                            <div>
                            <IoIosArrowForward className="transition-all group-hover:translate-x-2 h-6 w-6"/>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
        <span className="text-2xl text-white mt-10 mb-5">Feedback</span>
        {
            feedback_links.map((item, index) =>{
                return (
                    <Link href={item.link} key={index}>
                        <div className="flex w-5/6 text-lg items-center justify-between my-5 mx-10 text-white cursor-pointer">
                            <div className="flex gap-x-3 items-center">
                            {item.icon}
                            <span>{item.name}</span>
                            </div>
                            <div>
                            <IoIosArrowForward className="transition-all group-hover:translate-x-2 h-6 w-6"/>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
      </div>
    </div>
  )
}
