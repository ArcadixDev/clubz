import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import React from "react";

const generalOptions = [
  {
    id: 1,
    label: "Account",
    href: "/myprofile",
  },
  {
    id: 2,
    label: "Notification",
    href: "/notification",
  },
  {
    id: 3,
    label: "Language",
    href: "/language",
  },
  {
    id: 4,
    label: "Privacy",
    href: "/privacy",
  },
  {
    id: 5,
    label: "Help",
    href: "/help",
  },
  {
    id: 6,
    label: "Delete My Account",
    href: "/delete-account",
  },
];

const feedbackOptions = [
  {
    id: 1,
    label: "Report a Bug",
    href: "/report-bug",
  },
  {
    id: 2,
    label: "Send Feedback",
    href: "/feedback",
  },
];

const SettingsPage = () => {
  return (
    <main className="h-screen  p-10 text-white w-full">
      <div className="mx-auto">
        <section className="mb-8">
          <h1 className="mb-4 text-3xl font-bold">General Settings</h1>
          <div className="space-y-4 w-full">
            {generalOptions.map((option) => (
              <Link
                href={option.href}
                key={option.id}
                className="flex items-center justify-between rounded-lg bg-zinc-800 p-3 transition duration-300 ease-in-out hover:bg-zinc-900"
              >
                  {option.label}
                  <IoIosArrowForward />
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h1 className="mb-4 text-3xl font-bold">Feedback</h1>
          <div className="space-y-4">
            {feedbackOptions.map((option) => (
              <Link
                href={option.href}
                key={option.id}
                className="flex items-center justify-between rounded-lg bg-zinc-800 p-3 transition duration-300 ease-in-out hover:bg-zinc-900"
              >
                  {option.label}
                  <IoIosArrowForward />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default SettingsPage;
