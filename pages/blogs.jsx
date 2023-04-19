import React, { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { H3, Header, HeaderContainer } from "@/styles/SharedStyling";
import Link from "next/link";
import Image from "next/image";
import { Puff } from "react-loader-spinner";

const About = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const articles = await fetchBlogs();
      setBlogs(articles);
      setLoading(false);
    })();
  }, []);

  const GET_USER_BLOGS = `
    query GetUserArticles($page: Int!) {
        user(username: "Deekshith") {
            publication {
                posts(page: $page) {
                  title
                  brief
                  slug
                  dateAdded
                  coverImage
                  contentMarkdown
                }
            }
        }
    }
`;

  const fetchBlogs = async () => {
    let allBlogsFetched = false;
    let page = 0;
    const articles = [];

    while (!allBlogsFetched) {
      let response = await gql(GET_USER_BLOGS, { page: page });
      articles.push(...response.data.user.publication.posts);
      if (response.data.user.publication.posts.length === 0) {
        allBlogsFetched = true;
      }

      page++;
    }
    return articles;
  };

  async function gql(query, variables = {}) {
    const data = await fetch("https://api.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    return data.json();
  }

  return (
    <Container>
      <HeaderContainer>
        <Header fontWeight="600">
          <span style={{ color: theme.default.selected }}>My</span> Blogs
        </Header>
      </HeaderContainer>
      {loading ? (
        <LoaderContainer>
          <Puff
            height="80"
            width="80"
            radius={1}
            color={theme.default.selected}
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </LoaderContainer>
      ) : (
        <BlogContainer>
          {blogs.map((blog, index) => {
            return (
              <BlogCard key={index}>
                <Link href="https://deekshithmd.hashnode.dev/" target="_blank">
                  <Image
                    src={blog.coverImage}
                    width={400}
                    height={200}
                    alt="blog"
                  />
                  <Description>{blog.title}</Description>
                </Link>
              </BlogCard>
            );
          })}
        </BlogContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  margin-left: 35rem;
  display: flex;
  justify-content: center;
  flex-flow: column;
  padding: 0 5rem;
  background: ${(props) => props.theme.default.background};
  @media (max-width: 981px) {
    margin-left: 0;
    padding: 0 2rem;
    justify-content: flex-start;
  }
`;

const BlogContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem 0;
  gap: 1rem;
`;

const BlogCard = styled.div`
  width: 40rem;
  height: 28rem;
  border-radius: 2rem;
  border: 1px solid ${(props) => props.theme.default.border};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  overflow: hidden;
`;

const Description = styled(H3)`
  font-size: 2rem;
  color: ${(props) => props.theme.default.heading};
  padding: 1rem;
  font-weight: 700;
  text-align: justify;
`;

const LoaderContainer = styled.div`
  min-height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default About;
