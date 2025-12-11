import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "18",
  
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        // Page d'accueil
        {
          name: "HomePage",
          type: "page",
          urlPath: "/",
          filePath: "content/pages/home.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "metaDescription", type: "string" },
            {
              name: "hero",
              type: "object",
              fields: [
                { name: "badge", type: "string" },
                { name: "title", type: "string" },
                { name: "titleAccent", type: "string" },
                { name: "subtitle", type: "string" },
                { name: "ctaPrimary", type: "string" },
                { name: "ctaSecondary", type: "string" },
              ]
            },
          ]
        },
        // Page Services
        {
          name: "ServicesPage",
          type: "page",
          urlPath: "/services",
          filePath: "content/pages/services.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "metaDescription", type: "string" },
            {
              name: "hero",
              type: "object",
              fields: [
                { name: "badge", type: "string" },
                { name: "title", type: "string" },
                { name: "titleAccent", type: "string" },
                { name: "subtitle", type: "string" },
              ]
            },
            {
              name: "services",
              type: "list",
              items: { type: "reference", models: ["Service"] }
            }
          ]
        },
        // Modèle Service (réutilisable)
        {
          name: "Service",
          type: "data",
          filePath: "content/services/{slug}.json",
          fields: [
            { name: "number", type: "string", required: true },
            { name: "title", type: "string", required: true },
            { name: "shortDesc", type: "string" },
            { name: "description", type: "text" },
            { name: "icon", type: "string" },
            { name: "anchor", type: "string" },
            {
              name: "features",
              type: "list",
              items: { type: "string" }
            },
            { name: "highlight", type: "string" },
            { name: "ctaText", type: "string" },
            { name: "ctaHref", type: "string" },
            { name: "image", type: "image" },
            { name: "imageAlt", type: "string" },
          ]
        },
        // FAQ Items
        {
          name: "FAQItem",
          type: "data",
          filePath: "content/faq/{slug}.json",
          fields: [
            { name: "question", type: "string", required: true },
            { name: "answer", type: "text", required: true },
            { name: "order", type: "number" },
          ]
        },
        // Informations de contact
        {
          name: "SiteConfig",
          type: "data",
          filePath: "content/config/site.json",
          fields: [
            { name: "companyName", type: "string" },
            { name: "phone", type: "string" },
            { name: "email", type: "string" },
            { name: "address", type: "string" },
            {
              name: "socialLinks",
              type: "list",
              items: {
                type: "object",
                fields: [
                  { name: "platform", type: "string" },
                  { name: "url", type: "url" },
                ]
              }
            }
          ]
        }
      ],
    })
  ],

  // Configuration du preview pour Netlify Visual Editor
  devCommand: "npm run dev",
});
