"use client";
import { BlogPost } from "@/domain";
import { useEffect, useState } from "react";
import BlogPostLoader from "./BlogPostLoader";
import Image from 'next/image';

const Blog = () => {
  const [content, setContent] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const response = await fetch("/api/blog");
      const data = await response.json();
      setContent(data);
      setLoading(false);
    };
    fetchBlogPosts();
  }, []);

  return (
    <section id="blog" className="py-32 bg-gray-50">
      <div className="w-full lg:w-11/12 2xl:w-6/12 flex flex-col items-center gap-20 mx-auto px-4">
        <div className="flex flex-col gap-6 text-center">
          <h2 className="text-2xl uppercase font-medium">News and Articles</h2>
          <p className="text-gray-500">
            Always up to date with our latest News and Articles
          </p>
        </div>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <BlogPostLoader key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.map((x) => (
              <div
                key={x.id}
                className="group bg-white 2xl:max-w-md p-4 rounded duration-500 shadow-md hover:drop-shadow-2xl border border-t cursor-pointer"
              >
                 <Image
                  src={x.img}
                  alt= {`content-image-${x.id}`}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded"
                />
                <div className="flex flex-col p-6 gap-5">
                  <div className="flex flex-col gap-3">
                    <h2 className="font-medium group-hover:text-red-500 duration-300">
                      <a href="#">{x.title}</a>
                    </h2>
                    <div className="flex flex-row justify-between gap-1">
                      <p className="text-sm text-slate-400">
                        Posted by{" "}
                        <a
                          className="font-medium text-slate-600 uppercase"
                          href=""
                        >
                          {x.author}
                        </a>
                      </p>
                      <p className="text-slate-400 w-24 text-right text-sm font-normal px-1 border-l-2">
                        {x.date}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-400">{x.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
