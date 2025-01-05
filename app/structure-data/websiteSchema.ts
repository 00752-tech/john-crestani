const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "John Crestani",
  url: "https://johncrestani.me",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://johncrestani.me/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default websiteSchema;
