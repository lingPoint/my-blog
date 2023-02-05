// this is mock data
const data = [
  {
    id: "my-second-post",
    attributes: {
      title: "My Second Post",
      slug: "my-second-post",
      date: "2022-03-06",
      description: "description",
    },
    markdown: `# My Second Post

content`,
  },
  {
    id: "my-first-post",
    attributes: {
      title: "My First Post",
      slug: "my-first-post",
      date: "2022-03-06",
      description: "hello blogkit",
    },
    markdown: `# My First Post

Note it is pure markdown content

![hehYDM](https://evilaassets.oss-cn-shanghai.aliyuncs.com/uPic/2022/03/hehYDM.png!jpg)

paragraph content

[link item](https://github.com/2nthony/blogkit)`,
  },
];

export function getPostList() {
  return Promise.resolve(data);
}

export function getPost(slug: string) {
  const post = data.find((item) => item.attributes.slug === slug);

  return Promise.resolve(post);
}
