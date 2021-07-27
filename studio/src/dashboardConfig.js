export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61005a5ee404aa0f7d76eedd",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-gm3rucv4",
                  apiId: "dfb5ff7f-76da-463f-9c6b-163acad98658",
                },
                {
                  buildHookId: "61005a5fcbdf300edb262ab9",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-q32vx61e",
                  apiId: "f2b5a30a-23b9-4163-91a6-fea86c068b87",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/react-ghost/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-q32vx61e.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
