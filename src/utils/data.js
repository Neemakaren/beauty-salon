import { service1 } from "../assets/images";

export const data = [
  {
    id: "recZkNf2kwmdBcqd0",
    name: "item1",
    description: "jewellery",
    profile: service1,
  },
  {
    id: "recEHmzvupvT8ZONH",
    name: "item2",
    description: "hairextensions",
    profile: service1,
  },
  {
    id: "rec5NBwZ5zCD9nfF0",
    name: "item3",
    description: "makeup",
    profile: service1,
  },
  {
    id: "recd1jIVIEChmiwhe",
    name: "item4",
    description: "shoes",
    profile: service1,
  },
  {
    id: "recoM2MyHJGHLVi5l",
    name: "item5",
    description: "clothes",
    profile: service1,
  },
];
// export const data1 = [
//   {
//     id: "recZkNf2kwmdBcqd0",
//     name: "item1",
//     description: "jewellery",
//     profile: img,
//   },
//   {
//     id: "recEHmzvupvT8ZONH",
//     name: "item2",
//     description: "hairextensions",
//     profile: img,
//   },
//   {
//     id: "rec5NBwZ5zCD9nfF0",
//     name: "item3",
//     description: "makeup",
//     profile: img,
//   },
//   {
//     id: "recd1jIVIEChmiwhe",
//     name: "item4",
//     description: "shoes",
//     profile: img,
//   },
//   {
//     id: "recoM2MyHJGHLVi5l",
//     name: "item5",
//     description: "clothes",
//     profile: img,
//   },
// ];


export const fetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

