import { styled } from "@linaria/react";
import type { Post } from "@woodshop/api";
import MarkdownIt from "markdown-it";
import type { FC } from "react";
import React from "react";

import { makeRem } from "../../../theme/theme.utils";
import { dateFactory } from "../../../utils/date-factory";
import { TypographyHeading } from "../../atoms/typography/TypographyHeading";

const md = new MarkdownIt();

const BlogContainer = styled.div`
  margin: 0 auto;
`;

const BlogHeader = styled.header`
  margin: 0 auto;
  padding: ${makeRem(32)} 0;
  text-align: center;
`;

const BlogHeaderImg = styled.img`
  width: 100%;
  height: auto;
`;

const BlogHeaderTitle = styled.div`
  min-width: 92%;
  max-width: ${makeRem(700)};
  text-align: center;
  margin: ${makeRem(64)} auto;
`;

export const BlogContent = styled.div`
  padding: ${makeRem(32)} ${makeRem(44)};
  margin: 0 auto;
  max-width: ${makeRem(700)};

  h1 {
    font-family: var(--font-family-heading);
    line-height: var(--font-line-height-heading);
    margin-top: 0;
    font-size: 3.052rem;
    font-weight: bold;
  }
  h2 {
    font-family: var(--font-family-heading);
    line-height: var(--font-line-height-heading);
    font-size: 2.441rem;
    width: 100%;
    padding-bottom: 1rem;
    border-bottom: ${makeRem(1)} solid var(--color-grey3);
  }
  h3 {
    font-family: var(--font-family-heading);
    line-height: var(--font-line-height-heading);
    font-size: 1.953rem;
    font-weight: bold;
  }
  h4 {
    font-family: var(--font-family-heading);
    line-height: var(--font-line-height-heading);
    font-size: 1.563rem;
  }
  h5 {
    font-family: var(--font-family-heading);
    line-height: var(--font-line-height-heading);
    font-size: 1.25rem;
  }
  h6 {
    font-family: var(--font-family-heading);
    line-height: var(--font-line-height-heading);
    font-size: 1rem;
  }

  p {
    font-family: var(--font-family);
    line-height: var(--font-line-height);
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    margin: 0 auto;
  }
`;

export const Blog: FC<Post> = ({
  date_published,
  title,
  banner_img_url,
  content
}) => {
  return (
    <BlogContainer>
      <BlogHeader>
        <TypographyHeading
          cxVariant="subtitle2"
          cxNode="div"
          style={{
            margin: "1rem auto",
            textTransform: "uppercase",
            fontWeight: "500",
            color: "var(--color-grey5)",
            height: makeRem(44),
            display: "inline-block",
            borderBottom: `${makeRem(1)} solid var(--color-grey4)`
          }}
        >
          {date_published ? dateFactory(date_published, "longDate") : "-- --"}
        </TypographyHeading>
        <BlogHeaderTitle>
          <TypographyHeading cxVariant="h1" cxNode="h1">
            {title}
          </TypographyHeading>
        </BlogHeaderTitle>
        <BlogHeaderImg src={banner_img_url} alt={title} />
      </BlogHeader>
      <BlogContent
        dangerouslySetInnerHTML={{
          __html: md.render(content || "")
        }}
      />
    </BlogContainer>
  );
};
