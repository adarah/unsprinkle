import React from "react";
import styled from "styled-components/macro";
import Image from "../Image";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <GridItem>
          <StyledImage src={src} alt={alt} />
        </GridItem>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const GridItem = styled.picture`
  display: block;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const StyledImage = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: flex;
  gap: 8px;
`;

const Tag = styled.li`
  width: max-content;
  text-wrap: nowrap;

  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);

  &:last-of-type {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default PhotoGridItem;
