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
}

export interface postss {}
