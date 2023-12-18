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
    alcohol: false,
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
    alcohol: false,
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
    alcohol: false,
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
    alcohol: false,
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
    alcohol: false,
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
  {
    createdAt: "2023-12-17T21:09:18.473Z",
    name: "Kristi Deckow",
    phone: 24963,
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    alcohol: false,
    price: "631.00",
    ticket: 22,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/881.jpg",
    id: "16",
  },
  {
    createdAt: "2023-12-17T14:22:15.455Z",
    name: "Natasha Gleason",
    phone: 23303,
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    alcohol: false,
    price: "699.00",
    ticket: 98,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/858.jpg",
    id: "17",
  },
  {
    createdAt: "2023-12-17T11:32:03.930Z",
    name: "Pauline Stanton PhD",
    phone: 98182,
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    alcohol: false,
    price: "397.00",
    ticket: 31,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1060.jpg",
    id: "18",
  },
  {
    createdAt: "2023-12-18T06:20:34.117Z",
    name: "Erica Walsh",
    phone: 79758,
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    alcohol: false,
    price: "466.00",
    ticket: 80,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1221.jpg",
    id: "19",
  },
  {
    createdAt: "2023-12-18T01:07:51.611Z",
    name: "Jody Mohr",
    phone: 71240,
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    alcohol: false,
    price: "555.00",
    ticket: 23,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/128.jpg",
    id: "20",
  },
  {
    createdAt: "2023-12-17T16:55:44.933Z",
    name: "Candice Gibson",
    phone: 68198,
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    alcohol: false,
    price: "210.00",
    ticket: 4,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1218.jpg",
    id: "21",
  },
  {
    createdAt: "2023-12-18T08:59:26.661Z",
    name: "Antonia Wilderman",
    phone: 95699,
    description: "The Football Is Good For Training And Recreational Purposes",
    alcohol: false,
    price: "456.00",
    ticket: 28,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/613.jpg",
    id: "22",
  },
  {
    createdAt: "2023-12-17T23:38:55.469Z",
    name: "Colleen Ruecker",
    phone: 21362,
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    alcohol: false,
    price: "965.00",
    ticket: 77,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/181.jpg",
    id: "23",
  },
  {
    createdAt: "2023-12-18T01:48:40.794Z",
    name: "Sonja Terry",
    phone: 82648,
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    alcohol: false,
    price: "837.00",
    ticket: 9,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1139.jpg",
    id: "24",
  },
  {
    createdAt: "2023-12-17T21:21:32.189Z",
    name: "Ricardo Considine",
    phone: 43394,
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    alcohol: false,
    price: "106.00",
    ticket: 55,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/960.jpg",
    id: "25",
  },
  {
    createdAt: "2023-12-17T16:26:24.497Z",
    name: "Nathaniel Willms",
    phone: 79593,
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    alcohol: false,
    price: "760.00",
    ticket: 38,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/10.jpg",
    id: "26",
  },
  {
    createdAt: "2023-12-18T00:31:17.647Z",
    name: "Miss Glenn Murphy",
    phone: 13183,
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    alcohol: false,
    price: "693.00",
    ticket: 26,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1070.jpg",
    id: "27",
  },
  {
    createdAt: "2023-12-17T17:30:43.066Z",
    name: "Angel Jacobson",
    phone: 73576,
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    alcohol: false,
    price: "838.00",
    ticket: 85,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1186.jpg",
    id: "28",
  },
  {
    createdAt: "2023-12-18T05:38:19.887Z",
    name: "Christy Schoen",
    phone: 65717,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    alcohol: false,
    price: "43.00",
    ticket: 58,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/962.jpg",
    id: "29",
  },
  {
    createdAt: "2023-12-18T07:40:02.616Z",
    name: "Ida Krajcik",
    phone: 39817,
    description: "The Football Is Good For Training And Recreational Purposes",
    alcohol: false,
    price: "396.00",
    ticket: 36,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/15.jpg",
    id: "30",
  },
  {
    createdAt: "2023-12-18T07:29:03.738Z",
    name: "Sherman Lynch",
    phone: 63097,
    description: "The Football Is Good For Training And Recreational Purposes",
    alcohol: false,
    price: "168.00",
    ticket: 89,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/714.jpg",
    id: "31",
  },
  {
    createdAt: "2023-12-17T23:28:13.708Z",
    name: "Eunice Stanton",
    phone: 61091,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    alcohol: false,
    price: "932.00",
    ticket: 80,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/19.jpg",
    id: "32",
  },
  {
    createdAt: "2023-12-17T17:13:37.852Z",
    name: "Sergio Stamm I",
    phone: 9966,
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    alcohol: false,
    price: "408.00",
    ticket: 36,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/932.jpg",
    id: "33",
  },
  {
    createdAt: "2023-12-18T03:49:25.915Z",
    name: "Anita Buckridge",
    phone: 44986,
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    alcohol: false,
    price: "207.00",
    ticket: 14,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/189.jpg",
    id: "34",
  },
  {
    createdAt: "2023-12-17T10:54:36.480Z",
    name: "Miss Evan Zieme",
    phone: 36083,
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    alcohol: false,
    price: "820.00",
    ticket: 79,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/428.jpg",
    id: "35",
  },
  {
    createdAt: "2023-12-18T08:26:19.323Z",
    name: "Deborah Wolff",
    phone: 31070,
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    alcohol: false,
    price: "839.00",
    ticket: 58,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/746.jpg",
    id: "36",
  },
  {
    createdAt: "2023-12-17T09:47:53.386Z",
    name: "Eduardo Ruecker",
    phone: 52390,
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    alcohol: false,
    price: "663.00",
    ticket: 4,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/150.jpg",
    id: "37",
  },
  {
    createdAt: "2023-12-17T13:25:12.852Z",
    name: "Margaret Gleason",
    phone: 7779,
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    alcohol: false,
    price: "733.00",
    ticket: 56,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/775.jpg",
    id: "38",
  },
  {
    createdAt: "2023-12-18T04:35:33.882Z",
    name: "Dr. Tomas Halvorson",
    phone: 66357,
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    alcohol: false,
    price: "373.00",
    ticket: 95,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1174.jpg",
    id: "39",
  },
  {
    createdAt: "2023-12-17T17:17:08.189Z",
    name: "Johanna Smitham",
    phone: 87369,
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    alcohol: false,
    price: "536.00",
    ticket: 26,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/960.jpg",
    id: "40",
  },
  {
    createdAt: "2023-12-18T05:20:38.175Z",
    name: "Robert Haley",
    phone: 81562,
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    alcohol: false,
    price: "664.00",
    ticket: 88,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1235.jpg",
    id: "41",
  },
  {
    createdAt: "2023-12-18T04:32:21.300Z",
    name: "Dr. Rolando Hauck II",
    phone: 73508,
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    alcohol: false,
    price: "767.00",
    ticket: 75,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/10.jpg",
    id: "42",
  },
  {
    createdAt: "2023-12-17T20:15:40.677Z",
    name: "Dr. Forrest Little",
    phone: 33990,
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    alcohol: false,
    price: "596.00",
    ticket: 70,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/408.jpg",
    id: "43",
  },
  {
    createdAt: "2023-12-17T18:26:31.109Z",
    name: "Dave Haag",
    phone: 6467,
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    alcohol: false,
    price: "661.00",
    ticket: 51,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/132.jpg",
    id: "44",
  },
  {
    createdAt: "2023-12-17T19:50:17.760Z",
    name: "Louis Orn DVM",
    phone: 98169,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    alcohol: false,
    price: "439.00",
    ticket: 35,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/104.jpg",
    id: "45",
  },
  {
    createdAt: "2023-12-17T20:28:57.005Z",
    name: "Mr. Malcolm Harvey",
    phone: 24,
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    alcohol: false,
    price: "367.00",
    ticket: 42,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/605.jpg",
    id: "46",
  },
  {
    createdAt: "2023-12-18T06:28:08.074Z",
    name: "Maria Glover",
    phone: 27759,
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    alcohol: false,
    price: "770.00",
    ticket: 43,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1188.jpg",
    id: "47",
  },
  {
    createdAt: "2023-12-18T00:23:07.727Z",
    name: "Ralph McDermott",
    phone: 50938,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    alcohol: false,
    price: "302.00",
    ticket: 44,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/7.jpg",
    id: "48",
  },
  {
    createdAt: "2023-12-18T00:53:13.619Z",
    name: "Guy Sawayn V",
    phone: 23399,
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    alcohol: false,
    price: "282.00",
    ticket: 75,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1189.jpg",
    id: "49",
  },
  {
    createdAt: "2023-12-17T10:31:48.821Z",
    name: "Darnell Russel",
    phone: 11864,
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    alcohol: false,
    price: "760.00",
    ticket: 29,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/422.jpg",
    id: "50",
  },
  {
    createdAt: "2023-12-17T21:13:18.830Z",
    name: "Pearl Carter",
    phone: 72578,
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    alcohol: false,
    price: "350.00",
    ticket: 58,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/429.jpg",
    id: "51",
  },
  {
    createdAt: "2023-12-17T10:22:29.674Z",
    name: "Marty Waters",
    phone: 68560,
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    alcohol: false,
    price: "929.00",
    ticket: 93,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/974.jpg",
    id: "52",
  },
  {
    createdAt: "2023-12-17T18:02:26.239Z",
    name: "Sabrina Gleason III",
    phone: 81073,
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    alcohol: false,
    price: "453.00",
    ticket: 80,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/582.jpg",
    id: "53",
  },
  {
    createdAt: "2023-12-17T09:55:48.483Z",
    name: "Mike Fritsch",
    phone: 36482,
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    alcohol: false,
    price: "621.00",
    ticket: 4,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/462.jpg",
    id: "54",
  },
  {
    createdAt: "2023-12-18T08:28:10.563Z",
    name: "George Rath",
    phone: 37244,
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    alcohol: false,
    price: "384.00",
    ticket: 25,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/612.jpg",
    id: "55",
  },
  {
    createdAt: "2023-12-17T16:32:07.251Z",
    name: "Dr. Caleb Hyatt",
    phone: 82742,
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    alcohol: false,
    price: "334.00",
    ticket: 24,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/936.jpg",
    id: "56",
  },
  {
    createdAt: "2023-12-18T01:56:59.619Z",
    name: "Latoya Volkman",
    phone: 46750,
    description: "The Football Is Good For Training And Recreational Purposes",
    alcohol: false,
    price: "291.00",
    ticket: 81,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/301.jpg",
    id: "57",
  },
  {
    createdAt: "2023-12-17T16:25:44.993Z",
    name: "Tiffany Dach",
    phone: 27234,
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    alcohol: false,
    price: "703.00",
    ticket: 4,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1059.jpg",
    id: "58",
  },
  {
    createdAt: "2023-12-18T07:49:46.164Z",
    name: "Saul Heathcote",
    phone: 88824,
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    alcohol: false,
    price: "322.00",
    ticket: 59,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/396.jpg",
    id: "59",
  },
  {
    createdAt: "2023-12-17T18:51:59.172Z",
    name: "Martha Mills",
    phone: 58993,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    alcohol: false,
    price: "129.00",
    ticket: 58,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/621.jpg",
    id: "60",
  },
  {
    createdAt: "2023-12-18T08:18:38.123Z",
    name: "Todd Gerlach",
    phone: 77473,
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    alcohol: false,
    price: "881.00",
    ticket: 34,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/536.jpg",
    id: "61",
  },
  {
    createdAt: "2023-12-18T04:10:19.595Z",
    name: "Miss Donnie Kessler",
    phone: 84481,
    description: "The Football Is Good For Training And Recreational Purposes",
    alcohol: false,
    price: "418.00",
    ticket: 5,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/405.jpg",
    id: "62",
  },
  {
    createdAt: "2023-12-17T16:29:29.199Z",
    name: "Ms. Clifford Kunze",
    phone: 67531,
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    alcohol: false,
    price: "125.00",
    ticket: 86,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/662.jpg",
    id: "63",
  },
  {
    createdAt: "2023-12-17T20:54:44.010Z",
    name: "Simon Ziemann",
    phone: 72695,
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    alcohol: false,
    price: "264.00",
    ticket: 90,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/760.jpg",
    id: "64",
  },
  {
    createdAt: "2023-12-18T06:35:42.880Z",
    name: "Bradford Conn",
    phone: 76061,
    description: "The Football Is Good For Training And Recreational Purposes",
    alcohol: false,
    price: "284.00",
    ticket: 72,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/479.jpg",
    id: "65",
  },
  {
    createdAt: "2023-12-17T21:18:14.703Z",
    name: "Alexandra Gulgowski",
    phone: 74069,
    description: "The Football Is Good For Training And Recreational Purposes",
    alcohol: false,
    price: "50.00",
    ticket: 47,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/122.jpg",
    id: "66",
  },
  {
    createdAt: "2023-12-18T06:43:31.555Z",
    name: "Kathleen Towne",
    phone: 81298,
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    alcohol: false,
    price: "723.00",
    ticket: 77,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1143.jpg",
    id: "67",
  },
  {
    createdAt: "2023-12-17T17:29:52.292Z",
    name: "Diana Boyle IV",
    phone: 15149,
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    alcohol: false,
    price: "921.00",
    ticket: 70,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/306.jpg",
    id: "68",
  },
  {
    createdAt: "2023-12-17T17:59:18.529Z",
    name: "Frankie Daniel",
    phone: 49771,
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    alcohol: false,
    price: "351.00",
    ticket: 95,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1068.jpg",
    id: "69",
  },
  {
    createdAt: "2023-12-18T06:33:09.076Z",
    name: "Alex Yundt",
    phone: 99831,
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    alcohol: false,
    price: "814.00",
    ticket: 15,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg",
    id: "70",
  },
  {
    createdAt: "2023-12-17T18:20:11.787Z",
    name: "Miss Kelvin Crist",
    phone: 81490,
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    alcohol: false,
    price: "400.00",
    ticket: 69,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/818.jpg",
    id: "71",
  },
  {
    createdAt: "2023-12-17T13:59:05.222Z",
    name: "Ian Donnelly",
    phone: 13808,
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    alcohol: false,
    price: "220.00",
    ticket: 12,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1066.jpg",
    id: "72",
  },
  {
    createdAt: "2023-12-17T12:36:08.759Z",
    name: "Erma Friesen",
    phone: 28736,
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    alcohol: false,
    price: "663.00",
    ticket: 48,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/40.jpg",
    id: "73",
  },
  {
    createdAt: "2023-12-17T12:15:52.037Z",
    name: "Alexander Olson",
    phone: 72731,
    description: "The Football Is Good For Training And Recreational Purposes",
    alcohol: false,
    price: "97.00",
    ticket: 41,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/564.jpg",
    id: "74",
  },
  {
    createdAt: "2023-12-17T12:29:24.054Z",
    name: "Ernest Streich",
    phone: 34085,
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    alcohol: false,
    price: "27.00",
    ticket: 7,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/214.jpg",
    id: "75",
  },
  {
    createdAt: "2023-12-17T14:38:34.501Z",
    name: "Charles O'Kon",
    phone: 41699,
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    alcohol: false,
    price: "618.00",
    ticket: 53,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1026.jpg",
    id: "76",
  },
  {
    createdAt: "2023-12-17T16:11:23.752Z",
    name: "Ms. Kerry Wunsch",
    phone: 96591,
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    alcohol: false,
    price: "781.00",
    ticket: 73,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/237.jpg",
    id: "77",
  },
  {
    createdAt: "2023-12-17T19:23:06.180Z",
    name: "Floyd Balistreri Sr.",
    phone: 10410,
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    alcohol: false,
    price: "863.00",
    ticket: 70,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/997.jpg",
    id: "78",
  },
  {
    createdAt: "2023-12-18T03:29:42.672Z",
    name: "Aaron Cassin",
    phone: 70494,
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    alcohol: false,
    price: "966.00",
    ticket: 37,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/339.jpg",
    id: "79",
  },
  {
    createdAt: "2023-12-18T08:36:04.457Z",
    name: "Crystal Denesik",
    phone: 44409,
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    alcohol: false,
    price: "328.00",
    ticket: 46,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/857.jpg",
    id: "80",
  },
  {
    createdAt: "2023-12-17T13:56:11.953Z",
    name: "Jody Hahn",
    phone: 81815,
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    alcohol: false,
    price: "521.00",
    ticket: 10,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/64.jpg",
    id: "81",
  },
  {
    createdAt: "2023-12-17T15:53:39.332Z",
    name: "Muriel Rippin",
    phone: 92051,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    alcohol: false,
    price: "498.00",
    ticket: 40,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/828.jpg",
    id: "82",
  },
  {
    createdAt: "2023-12-17T13:19:05.652Z",
    name: "Omar Boyer IV",
    phone: 64059,
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    alcohol: false,
    price: "973.00",
    ticket: 95,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1219.jpg",
    id: "83",
  },
  {
    createdAt: "2023-12-17T16:07:58.597Z",
    name: "Teri Ebert Jr.",
    phone: 76380,
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    alcohol: false,
    price: "618.00",
    ticket: 53,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/493.jpg",
    id: "84",
  },
  {
    createdAt: "2023-12-18T10:59:07.865Z",
    name: "Caleb Cartwright",
    phone: 23717,
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    alcohol: false,
    price: "727.00",
    ticket: 4,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/38.jpg",
    id: "85",
  },
  {
    createdAt: "2023-12-17T15:14:33.773Z",
    name: "Vivian Thiel III",
    phone: 19950,
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    alcohol: false,
    price: "161.00",
    ticket: 39,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/196.jpg",
    id: "86",
  },
  {
    createdAt: "2023-12-18T10:31:53.278Z",
    name: "Pauline Ernser",
    phone: 77013,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    alcohol: false,
    price: "886.00",
    ticket: 32,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1060.jpg",
    id: "87",
  },
  {
    createdAt: "2023-12-18T06:54:37.443Z",
    name: "Angelica Tremblay",
    phone: 97222,
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    alcohol: false,
    price: "286.00",
    ticket: 12,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/993.jpg",
    id: "88",
  },
  {
    createdAt: "2023-12-18T02:50:36.299Z",
    name: "Velma Lind",
    phone: 70616,
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    alcohol: false,
    price: "376.00",
    ticket: 59,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/113.jpg",
    id: "89",
  },
  {
    createdAt: "2023-12-18T00:00:27.011Z",
    name: "Kristen Pfannerstill",
    phone: 74493,
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    alcohol: false,
    price: "290.00",
    ticket: 45,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1061.jpg",
    id: "90",
  },
  {
    createdAt: "2023-12-18T11:30:28.576Z",
    name: "Desiree Balistreri",
    phone: 34934,
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    alcohol: false,
    price: "220.00",
    ticket: 18,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/776.jpg",
    id: "91",
  },
  {
    createdAt: "2023-12-18T03:05:42.105Z",
    name: "Della Murphy DVM",
    phone: 64224,
    description: "The Football Is Good For Training And Recreational Purposes",
    alcohol: false,
    price: "849.00",
    ticket: 69,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1176.jpg",
    id: "92",
  },
  {
    createdAt: "2023-12-18T00:14:51.978Z",
    name: "Julius Littel",
    phone: 34950,
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    alcohol: false,
    price: "92.00",
    ticket: 20,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/435.jpg",
    id: "93",
  },
  {
    createdAt: "2023-12-18T07:30:28.343Z",
    name: "Luther Emmerich",
    phone: 85223,
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    alcohol: false,
    price: "735.00",
    ticket: 81,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1093.jpg",
    id: "94",
  },
  {
    createdAt: "2023-12-18T00:42:52.232Z",
    name: "Ethel Wiza",
    phone: 90912,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    alcohol: false,
    price: "535.00",
    ticket: 47,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/120.jpg",
    id: "95",
  },
  {
    createdAt: "2023-12-17T14:15:47.007Z",
    name: "Dr. Mona Reichert",
    phone: 81212,
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    alcohol: false,
    price: "796.00",
    ticket: 57,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/575.jpg",
    id: "96",
  },
  {
    createdAt: "2023-12-18T09:22:15.089Z",
    name: "Sylvia Rolfson",
    phone: 94711,
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    alcohol: false,
    price: "809.00",
    ticket: 68,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/902.jpg",
    id: "97",
  },
  {
    createdAt: "2023-12-17T21:59:09.680Z",
    name: "Bernadette Walter",
    phone: 87524,
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    alcohol: false,
    price: "715.00",
    ticket: 16,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1032.jpg",
    id: "98",
  },
  {
    createdAt: "2023-12-17T19:22:44.718Z",
    name: "Sonya Stroman",
    phone: 43214,
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    alcohol: false,
    price: "142.00",
    ticket: 44,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/504.jpg",
    id: "99",
  },
  {
    createdAt: "2023-12-18T07:20:09.087Z",
    name: "Irvin Gutmann PhD",
    phone: 2109,
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    alcohol: false,
    price: "917.00",
    ticket: 37,
    image:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/661.jpg",
    id: "100",
  },
];
