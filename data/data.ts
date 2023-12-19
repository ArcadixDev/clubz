import { Club } from "@prisma/client";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
];

export const clubs: any = [
  {
    createdAt: "2023-12-18T09:05:39.146Z",
    name: "Mr. Jim Sipes",
    phone: 34558,
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    alcohol: true,
    price: "404.00",
    ticket: 46,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/945.jpg",
    id: "1",
  },
  {
    createdAt: "2023-12-17T23:40:36.216Z",
    name: "Verna Koepp",
    phone: 24474,
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    alcohol: true,
    price: "458.00",
    ticket: 37,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/195.jpg",
    id: "2",
  },
  {
    createdAt: "2023-12-17T20:13:19.167Z",
    name: "Nelson Gleichner IV",
    phone: 93288,
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    alcohol: false,
    price: "285.00",
    ticket: 69,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/835.jpg",
    id: "3",
  },
  {
    createdAt: "2023-12-17T19:03:41.320Z",
    name: "Ms. Thomas Treutel DDS",
    phone: 11299,
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    alcohol: true,
    price: "277.00",
    ticket: 23,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/410.jpg",
    id: "4",
  },
  {
    createdAt: "2023-12-18T05:59:09.853Z",
    name: "Mr. Jenny Reynolds",
    phone: 68633,
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    alcohol: false,
    price: "394.00",
    ticket: 53,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/182.jpg",
    id: "5",
  },
  {
    createdAt: "2023-12-17T14:55:18.828Z",
    name: "Edmond Ankunding",
    phone: 94,
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    alcohol: true,
    price: "337.00",
    ticket: 70,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/719.jpg",
    id: "6",
  },
  {
    createdAt: "2023-12-17T22:51:21.897Z",
    name: "Nicole McKenzie",
    phone: 30061,
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    alcohol: true,
    price: "26.00",
    ticket: 89,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1072.jpg",
    id: "7",
  },
  {
    createdAt: "2023-12-17T09:28:59.878Z",
    name: "Estelle Langosh",
    phone: 21827,
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    alcohol: false,
    price: "587.00",
    ticket: 25,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/122.jpg",
    id: "8",
  },
  {
    createdAt: "2023-12-17T16:29:35.927Z",
    name: "Darryl Nienow",
    phone: 71135,
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    alcohol: false,
    price: "51.00",
    ticket: 3,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/902.jpg",
    id: "9",
  },
  {
    createdAt: "2023-12-18T04:33:37.003Z",
    name: "Ms. Florence Collier",
    phone: 85861,
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    alcohol: false,
    price: "971.00",
    ticket: 7,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/455.jpg",
    id: "10",
  },
  {
    createdAt: "2023-12-18T08:16:08.872Z",
    name: "Colleen Wiza",
    phone: 50694,
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    alcohol: false,
    price: "897.00",
    ticket: 95,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/836.jpg",
    id: "11",
  },
  {
    createdAt: "2023-12-17T18:03:58.959Z",
    name: "Brad Connelly",
    phone: 78243,
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    alcohol: false,
    price: "722.00",
    ticket: 61,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/786.jpg",
    id: "12",
  },
  {
    createdAt: "2023-12-18T06:26:21.097Z",
    name: "Monica Walsh DVM",
    phone: 23811,
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    alcohol: false,
    price: "12.00",
    ticket: 85,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1185.jpg",
    id: "13",
  },
  {
    createdAt: "2023-12-17T18:15:53.849Z",
    name: "Lamar Watsica",
    phone: 90076,
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    alcohol: false,
    price: "295.00",
    ticket: 100,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/996.jpg",
    id: "14",
  },
  {
    createdAt: "2023-12-17T12:57:38.427Z",
    name: "Grady Schinner",
    phone: 12872,
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    alcohol: false,
    price: "807.00",
    ticket: 69,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/109.jpg",
    id: "15",
  },
];
