import slugify from "slugify";

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
export const slugit = (str: string) => {
  return slugify(str, { lower: true, replacement: "-" });
};
