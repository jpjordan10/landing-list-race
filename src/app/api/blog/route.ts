import { NextResponse } from 'next/server';

const data = [
  {
    id: 1,
    img: "/blog/b1.jpg",
    title: "How to find your Desired Place more quickly",
    author: "Someone",
    date: "March 2018",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: "/blog/b2.jpg",
    title: "10 Tips for Making Your Move Easier",
    author: "Author Name",
    date: "April 2019",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: "/blog/b3.jpg",
    title: "The Ultimate Packing Guide",
    author: "Expert Packer",
    date: "May 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
export async function GET() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  
    return NextResponse.json(data);
  }