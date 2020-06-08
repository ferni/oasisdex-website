const slug = require('remark-slug');

const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [slug],
  },
});
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});
