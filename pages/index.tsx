import Layout from "@/components/layouts";
import React, { useEffect, useState } from "react";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector, setMenubarTital } from "@/store/slices/postSlice";
import { useAppDispatch } from "@/store/store";

interface PostsType {
  posts: Array<{
    slug: string;
    frontmatter: {
      title: string;
      name: string;
      popular: number;
    };
  }>;
}

export async function getStaticProps() {
  const files = fs.readdirSync("markdown");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`markdown/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  posts.sort((a, b) => {
    let fb = a.frontmatter.popular,
      fa = b.frontmatter.popular;

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  return {
    props: {
      posts,
    },
  };
}

const Home = ({ posts }: PostsType) => {
  const { search } = useSelector(searchSelector);
  const dispatch = useAppDispatch();

  let titleArray = posts
    .filter((e) =>
      e.slug
        .toLowerCase()
        .replace(" ", "-")
        .includes(search.toLowerCase().replace(" ", "-"))
    ) //search from search bar
    .map((e) => e.frontmatter.title);

  let title = titleArray.filter(
    (e: string, index: number) => titleArray.indexOf(e) === index
  );

  const fileName = posts.filter((e) =>
    e.slug
      .toLowerCase()
      .replace(" ", "-")
      .includes(search.toLowerCase().replace(" ", "-"))
  );

  useEffect(() => {
    dispatch(setMenubarTital(title));
  }, []);

  return (
    <>
      <Layout>
        <div className="app">
          {title?.map((e) => {
            return (
              <div key={e} className="card">
                <h1 className="card_title">{e}</h1>
                <div className="card_file">
                  {fileName?.map((e2) => {
                    if (e2.frontmatter.title === e) {
                      return (
                        <Link href={`/markdown/${e2.slug}`} key={e2.slug}>
                          <a href="">{e2.frontmatter.name}</a>
                        </Link>
                      );
                    }
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default Home;
