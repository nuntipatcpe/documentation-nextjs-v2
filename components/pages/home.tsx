import React, { useState } from "react";

import Link from "next/link";
import { useSelector } from "react-redux";
import { searchSelector } from "@/store/slices/postSlice";

import { redundancyArray } from "@/utils/array.util";

import Image from "next/image";
import Layout from "@/components/layouts";
import { Posts } from "@/models/post.model";

const Home = ({ posts, link }: Posts) => {
  const { search } = useSelector(searchSelector);

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

  return (
    <Layout isSearch>
      {title?.map((e) => {
        return (
          <div key={e} className="home">
            <h1 className="home_title">{e}</h1>
            <div className="home_card">
              {fileName?.map((e2) => {
                if (e2.frontmatter.title === e) {
                  return (
                    <div className="home_card_content" key={e2.slug}>
                      <span className="home_card_content_icon">
                        <Image
                          src="/icons/MD.svg"
                          alt="MD"
                          width={30}
                          height={30}
                        />
                        <div className="home_card_content_icon_popular">
                          <Image
                            src="/icons/GroupStars.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                          <span>{e2.frontmatter.popular}</span>
                        </div>
                      </span>
                      <div className="home_card_content_link">
                        <Link href={`/${link}/${e2.slug}`}>
                          <a href="">{e2.frontmatter.name}</a>
                        </Link>
                      </div>
                      <div className="home_card_content_icon">
                        <a
                          href={`/${link}/${e2.slug}`}
                          target={"blank"}
                          className="home_card_content_icon_tri"
                        >
                          <Image
                            src="/icons/back.svg"
                            alt="MD"
                            width={35}
                            height={35}
                          />
                        </a>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default Home;
