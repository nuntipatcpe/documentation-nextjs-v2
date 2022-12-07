import React, { useEffect, useState } from "react";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import Code from "@/components/Code";
import Layout from "@/components/layouts";
import { useSelector } from "react-redux";
import authenSlice, {
  authenSelector,
  setAuthen,
} from "@/store/slices/authenSlice";
import { TOKEN } from "@/utils/constant";
import { useAppDispatch } from "@/store/store";

export async function getStaticPaths() {
  const files = fs.readdirSync("markdown/data/roadMap/");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const fileName = fs.readFileSync(`markdown/data/roadMap/${slug}.md`, "utf-8");
  const { content } = matter(fileName);
  return {
    props: {
      content,
    },
  };
}

function MarkdownPage({ content }: any) {
  const { isAuthen } = useSelector(authenSelector);
  const dispath = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    if (!token) {
      dispath(setAuthen(false));
    }
  }, [isAuthen, dispath]);

  return (
    <Layout>
      {/* {!isAuthen && <Auth />} */}

      <div className="markdown">
        <Markdown
          options={{
            overrides: {
              code: {
                component: Code,
              },
            },
          }}
        >
          {content}
        </Markdown>
      </div>
    </Layout>
  );
}

export default MarkdownPage;
