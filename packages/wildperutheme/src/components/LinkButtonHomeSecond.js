import React from "react";
import { connect, styled } from "frontity";

const Anchor = styled.a`

    border-radius: 1rem;
    background-color: #f4623a;
    border: 2px solid #f4623a;
    color: #fff;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
    padding: 15px 20px;
    font-size: 16px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;

    &:hover {
      background-color: #ee3e0d;
    }
`;

const Link = ({ href, actions, children }) => {
  return (
    <div>
      <Anchor
        href={href}
        onClick={event => {
          event.preventDefault();
          actions.router.set(href); 
          window.scrollTo(0, 0);
        }}
      >
        {children}
      </Anchor>
    </div>
  );
};

export default connect(Link);