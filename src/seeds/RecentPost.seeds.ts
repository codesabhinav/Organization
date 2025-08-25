export type RecentPost = {
  img: string;
  date: string;
  title: string;
  link: string;
};

export const recentPosts: RecentPost[] = [
  {
    img: "https://digiflow-html.netlify.app/assets/images/blog/recent-post-img1.jpg",
    date: "Sep 15, 2025",
    title: "Digital Marketing in Website",
    link: "/blog-details",
  },
  {
    img: "https://digiflow-html.netlify.app/assets/images/blog/recent-post-img2.jpg",
    date: "Sep 15, 2025",
    title: "Which is Right for Your Business?",
    link: "/blog-details",
  },
  {
    img: "https://digiflow-html.netlify.app/assets/images/blog/recent-post-img3.jpg",
    date: "Sep 15, 2025",
    title: "Web Design Trends to Watch in 2025",
    link: "/blog-details",
  },
];
