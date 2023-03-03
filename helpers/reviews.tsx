interface Review {
  id: number;
  name: string;
  image: string;
  alt: string;
  joined: string;
  stars: number[];
  content: string;
}

export const reviews: Review[] = [
  {
    id: 0,
    name: "John Smith",
    image: "/assets/images/maternity.webp",
    alt: "reviewers avatar",
    joined: "10/12/2022",
    stars: [1, 2, 3, 4],
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem et sit ipsum voluptatum dignissimos quae quisquam porro, delectus reiciendis sint?",
  },
  {
    id: 1,
    name: "John Smith",
    image: "/assets/images/maternity.webp",
    alt: "reviewers avatar",
    joined: "10/12/2022",
    stars: [1, 2, 3, 4, 5],
    content: "content",
  },
  {
    id: 2,
    name: "John Smith",
    image: "/assets/images/maternity.webp",
    alt: "reviewers avatar",
    joined: "10/12/2022",
    stars: [1, 2, 3],
    content: "content",
  },
  {
    id: 3,
    name: "John Smith",
    image: "/assets/images/maternity.webp",
    alt: "reviewers avatar",
    joined: "10/12/2022",
    stars: [1, 2, 3, 4, 5],
    content: "content",
  },
  {
    id: 4,
    name: "John Smith",
    image: "/assets/images/maternity.webp",
    alt: "reviewers avatar",
    joined: "10/12/2022",
    stars: [1, 2, 3, 4, 5],
    content: "content",
  },
];
