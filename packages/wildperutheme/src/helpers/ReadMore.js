
import React, {useState} from 'react';
import { connect, styled, css, Global } from "frontity";

const ReadMore = ({ content,limit}) => {
    const [showAll, setShowAll] = useState(false);
  
    const showMore = () => setShowAll(true);
    const showLess = () => setShowAll(false);
  
    if (content.length <= limit) {
      // there is nothing more to show
      return <div>
          <p>{content}</p>
          </div>
    }
    if (showAll) {
      // We show the extended text and a link to reduce it
      return <div> 
        <p>{content}</p>
        <ReadMoreButton onClick={showLess}>Read less</ReadMoreButton> 
      </div>
    }
    // In the final case, we show a text with ellipsis and a `Read more` button
    const toShow = content.substring(0, limit) + "...";
    return <div> 
      <p>{toShow}</p>
      <ReadMoreButton onClick={showMore}>Read more</ReadMoreButton>
    </div>
  }


  const ReadMoreButton = styled.button`
    font-size: .8rem;
    border: none;
    color: #333333;
    padding: 0;
    cursor: pointer;
  `
  
  export default ReadMore;