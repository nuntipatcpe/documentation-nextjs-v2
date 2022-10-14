import Layout from "@/components/layouts";
import React, { useEffect, useState } from "react";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { useSelector } from "react-redux";
import { searchSelector, setMenubarTital } from "@/store/slices/postSlice";
import { useAppDispatch } from "@/store/store";
import { redundancyArray, sortArray } from "@/utils/array.util";
import { Posts } from "../models/post.model";

export async function getStaticProps() {
  const files = fs.readdirSync("markdown");

  //sort by popula
  const posts = sortArray(
    files.map((fileName) => {
      const slug = fileName.replace(".md", "");
      const readFile = fs.readFileSync(`markdown/${fileName}`, "utf-8");
      const { data: frontmatter } = matter(readFile);
      return {
        slug,
        frontmatter,
      };
    })
  );
  return {
    props: {
      posts,
    },
  };
}

const Home = ({ posts }: Posts) => {
  const { search } = useSelector(searchSelector);
  const dispatch = useAppDispatch();

  const title = redundancyArray(
    posts
      .filter(
        (e) =>
          e.frontmatter.title
            .toLowerCase()
            .replace(" ", "")
            .includes(search.toLowerCase().replace(" ", "")) || //check title && search
          e.frontmatter.name
            .toLowerCase()
            .replace(" ", "")
            .includes(search.toLowerCase().replace(" ", "")) || //check name && search
          e.slug
            .toLowerCase()
            .replace(" ", "")
            .includes(search.toLowerCase().replace(" ", "")) //check slug && search
      )
      .map((e) => e.frontmatter.title) //chooes title
  );

  const fileName = posts.filter(
    (e) =>
      e.frontmatter.title
        .toLowerCase()
        .replace(" ", "")
        .includes(search.toLowerCase().replace(" ", "")) || //check title && search
      e.frontmatter.name
        .toLowerCase()
        .replace(" ", "")
        .includes(search.toLowerCase().replace(" ", "")) || //check name && search
      e.slug
        .toLowerCase()
        .replace(" ", "")
        .includes(search.toLowerCase().replace(" ", "")) //check slug && search
  );

  useEffect(() => {
    dispatch(setMenubarTital(title));
  }, [dispatch]);

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
                        <div
                          style={{
                            position: "relative",
                          }}
                        >
                          <Link href={`/markdown/${e2.slug}`} key={e2.slug}>
                            <a href="">{e2.frontmatter.name}</a>
                          </Link>
                          <span
                            style={{
                              position: "absolute",
                              bottom: 0,
                              left: 5,
                              fontSize: 10,
                            }}
                          >
                            {e2.frontmatter.popular}
                          </span>
                        </div>
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
