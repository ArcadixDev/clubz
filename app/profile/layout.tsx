import { Metadata } from "next";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { ProfileSidebarNav } from "@/components/primitives/ProfileSideBar";

// import { Separator } from "@/registry/new-york/ui/separator"
// import { SidebarNav } from "@/app/examples/forms/components/sidebar-nav"

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/profile/",
  },
  {
    title: "My Bookings",
    href: "/bookings",
  },
  //   {
  //     title: "Appearance",
  //     href: "/profile/forms/appearance",
  //   },
  //   {
  //     title: "Notifications",
  //     href: "/profile/forms/notifications",
  //   },
  //   {
  //     title: "Display",
  //     href: "/profile/forms/display",
  //   },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function ProfileLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="flex-grow">
      <div className="space-y-6 px-6 py-16 md:px-10 md:py-16">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <ProfileSidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </div>
  );
}
