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

  return {
    props: {
      posts,
    },
  };
}

const Home = ({ posts }: Props) => {
  let checkGroup = "";
  const title = posts
    .filter((e) => {
      if (e.frontmatter.title !== checkGroup) {
        checkGroup = e.frontmatter.title;
        return e;
      }
    })
    .map((e) => e.frontmatter.title);

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
                          <a href="">{e2.slug}.md</a>
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
