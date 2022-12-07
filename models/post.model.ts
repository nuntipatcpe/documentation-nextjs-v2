export interface frontmatter {
  title: string;
  name: string;
  popular: number;
}

export interface Posts {
  posts: Array<{
    slug: string;
    frontmatter: frontmatter;
  }>;
  link: string;
}
export interface test {
  t1: [];
  t2: () => void;
}

export interface postss {}
