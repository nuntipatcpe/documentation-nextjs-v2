import { frontmatter, Posts } from "@/models/post.model";

export function redundancyArray(array: Array<string>) {
  let finalArray = array.filter((e, index) => array.indexOf(e) === index);
  return finalArray;
}

type sortArrayType = {
  slug: string;
  frontmatter: {
    [key: string]: any;
  };
};

export function sortArray(array: Array<sortArrayType>) {
  array.sort((a: sortArrayType, b: sortArrayType) => {
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
  return array;
}
