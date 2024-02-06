export const getBlogUrl = (title: string) => {
  return "/blog/" + title.replaceAll(" ", "-").toLowerCase();
};
