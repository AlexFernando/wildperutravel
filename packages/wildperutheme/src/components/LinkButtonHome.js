import React from "react";
import { connect, styled } from "frontity";

const Anchor = styled.a`
    
    border-radius: 1rem;
    background-color: #fff;
    color: #000;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
    padding: 20px 20px;
    font-size: 14px;
    text-align: center;
    text-transform: uppercase;

    &:hover {
      background-color: #f8f9fa;
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