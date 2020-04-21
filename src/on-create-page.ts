import validate, { Options } from "./utils/validate";

const onCreatePage = (
  { boundActionCreators: { createPage, deletePage }, page, reporter },
  options: Options[]
) => {
  return new Promise((resolve) => {
    options.forEach(({ pattern, replacement = "" }) => {
      const error = validate({ pattern, replacement });

      if (error) {
        reporter.panic(error);
      }

      const path = page.path.replace(pattern, replacement);

      if (page.path !== path) {
        deletePage(page);
        createPage({ ...page, path });
      }

      resolve();
    });
  });
};

export default onCreatePage;
