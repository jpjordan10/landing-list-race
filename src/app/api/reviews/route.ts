import { NextResponse } from "next/server";

const data = [
  {
    id: 323212,
    img: "/clients/c2.png",
    name: "James Leakar",
    location: "London, UK",
    rating: 5,
    comment:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
  },
  {
    id: 2323,
    img: "/clients/c1.png",
    name: "Monirul Islam",
    location: "Chester, UK",
    rating: 5,
    comment:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
  },
  {
    id: 34234,
    img: "/clients/c4.png",
    name: "Shohrab Hossain",
    location: "Liverpool, UK",
    rating: 5,
    comment:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
  },
  {
    id: 56756756,
    img: "/clients/c1.png",
    name: "Tom Leakar",
    location: "London, UK",
    rating: 5,
    comment:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.",
  },
];
export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return NextResponse.json(data);
}
