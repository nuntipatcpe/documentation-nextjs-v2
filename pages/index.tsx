import Layout from "@/components/layouts";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

type Props = {
  posts: Array<{
    slug: string;
    frontmatter: {
      title: string;
      name: string;
      popular: number;
    };
  }>;
};

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

const Home = ({ posts }: Props) => {
  // let checkGroup = "";
  // let title = posts
  //   .filter((e) => {
  //     if (e.frontmatter.title !== checkGroup) {
  //       checkGroup = e.frontmatter.title;
  //       return e;
  //     }
  //   })
  //   .map((e) => e.frontmatter.title);

  // posts = [
  //   {
  //     slug: "--",
  //     frontmatter: {
  //       title: "test01",
  //       popular: 0,
  //     },
  //   },
  //   {
  //     slug: "--",
  //     frontmatter: {
  //       title: "test02",
  //       popular: 0,
  //     },
  //   },
  //   {
  //     slug: "--",
  //     frontmatter: {
  //       title: "test02",
  //       popular: 0,
  //     },
  //   },
  // ];
  let titleArray = posts.map((e) => e.frontmatter.title);
  //titleArray = ["test01","test02","test02"]
  let title = titleArray.filter(
    (e: string, index: number) => titleArray.indexOf(e) === index
  );

  const fileName = posts;

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
