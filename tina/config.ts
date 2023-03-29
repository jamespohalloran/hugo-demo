import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "d1bd9438-c124-4645-babd-f7ce49e55822", // Get this from tina.io
  token: "7b0b3b083e411426b8d515d22f46275969115fff", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        label: "Pages",
        name: "pages",
        path: "content",
        match: {
          include: "*",
        },
        templates: [
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "datetime",
                name: "date",
                label: "Date",
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
              },
              {
                type: "string",
                name: "banner_image",
                label: "Banner image",
              },
              {
                type: "datetime",
                name: "publish_date",
                label: "Publish date",
              },
            ],
            label: "contact",
            name: "contact",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Hero Heading",
              },
              {
                type: "string",
                name: "sub_heading",
                label: "Hero Sub heading",
              },
              {
                type: "object",
                name: "hero_button",
                label: "Hero Button",
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Text",
                  },
                  {
                    type: "string",
                    name: "href",
                    label: "Link",
                  },
                ],
              },
              {
                type: "image",
                name: "banner_image",
                label: "Hero Image",
              },
              {
                type: "string",
                name: "textline",
                label: "Description",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
              {
                type: "object",
                name: "services",
                label: "Services",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "heading",
                    label: "Heading",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                  },
                  {
                    type: "image",
                    name: "icon",
                    label: "Icon",
                  },
                ],
              },
              {
                type: "boolean",
                name: "show_news",
                label: "Show News?",
              },
              {
                type: "image",
                name: "partners",
                label: "Partner Logos",
                list: true,
              },
              {
                type: "boolean",
                name: "show_staff",
                label: "Show Staff?",
              },
              {
                type: "string",
                name: "layout",
                label: "Layout",
              },
            ],
            label: "landing-page",
            name: "landing_page",
          },
        ],
      },
      {
        label: "Posts",
        name: "posts",
        path: "content/posts",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "string",
            name: "sub_heading",
            label: "Sub Heading",
          },
          {
            type: "datetime",
            name: "date",
            label: "Publish Date",
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "image",
            name: "banner_image",
            label: "Banner Image",
          },
          {
            type: "string",
            name: "related_posts",
            label: "Related Posts",
            list: true,
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
          },
        ],
      },
      {
        label: "Projects",
        name: "projects",
        path: "content/projects",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "string",
            name: "sub_heading",
            label: "Sub Heading",
          },
          {
            type: "image",
            name: "banner_image",
            label: "Banner Image",
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
          },
        ],
      },
      {
        label: "People",
        name: "people",
        path: "content/people",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "Name",
          },
          {
            type: "string",
            name: "sub_heading",
            label: "Sub Heading",
          },
          {
            type: "image",
            name: "thumbnail",
            label: "Thumbnail",
          },
          {
            type: "string",
            name: "role",
            label: "Departments",
            list: true,
          },
          {
            type: "string",
            name: "email",
            label: "Email",
          },
          {
            type: "string",
            name: "linkedin",
            label: "Linkedin",
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
          },
        ],
      },
      {
        label: "Contact Information",
        name: "contact_information",
        path: "data",
        format: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "information",
        },
        fields: [
          {
            type: "string",
            name: "email",
            label: "Email",
          },
          {
            type: "string",
            name: "phone",
            label: "Phone",
          },
          {
            type: "string",
            name: "address_1",
            label: "Address 1",
          },
          {
            type: "string",
            name: "address_2",
            label: "Address 2",
          },
          {
            type: "string",
            name: "city",
            label: "City",
          },
          {
            type: "string",
            name: "state",
            label: "State",
          },
          {
            type: "string",
            name: "postal_code",
            label: "Postal code",
          },
          {
            type: "string",
            name: "country",
            label: "Country",
          },
          {
            type: "string",
            name: "twitter",
            label: "Twitter",
          },
        ],
      },
      {
        label: "Publications",
        name: "publications",
        path: "data",
        format: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "publications",
        },
        fields: [
          {
            type: "object",
            name: "publication",
            label: "Publication",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "datetime",
                name: "date",
                label: "Date",
              },
              {
                type: "string",
                name: "link",
                label: "link",
              },
              {
                type: "string",
                name: "projects",
                label: "Projects",
                list: true,
              },
              {
                type: "string",
                name: "authors",
                label: "Authors",
                list: true,
              },
            ],
          },
        ],
      },
    ],
  },
});
