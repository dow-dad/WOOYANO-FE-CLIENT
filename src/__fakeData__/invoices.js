import { nanoid } from "nanoid";
export const INVOICE_LIST = [{
  date: new Date(2021, 11, 2),
  invoiceId: "#872348",
  id: nanoid(),
  name: "Natalie Dormer",
  avatar: "/static/avatar/001-man.svg",
  status: "Pending",
  email: "Mike1203@gmail.com"
}, {
  invoiceId: "#872349",
  date: new Date(2021, 11, 2),
  id: nanoid(),
  name: "Kyle Williams",
  avatar: "/static/avatar/005-man-1.svg",
  status: "Pending",
  email: "kyle21@gmail.com"
}, {
  invoiceId: "#872350",
  date: new Date(2021, 11, 2),
  id: nanoid(),
  name: "Alan Mask",
  avatar: "/static/avatar/014-man-3.svg",
  status: "Complete",
  email: "alan03@gmail.com"
}, {
  date: new Date(2021, 11, 2),
  invoiceId: "#872348",
  id: nanoid(),
  name: "Justin Dormer",
  avatar: "/static/avatar/007-boy-1.svg",
  status: "Complete",
  email: "dormer25@gmail.com"
}, {
  invoiceId: "#872349",
  date: new Date(2021, 11, 2),
  id: nanoid(),
  name: "Kyle Walker",
  avatar: "/static/avatar/003-boy.svg",
  status: "Complete",
  email: "walker22@gmail.com"
}];