
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
        <p>{content}        <ReadMoreButton onClick={showLess}>Read less</ReadMoreButton> </p>

      </div>
    }
    // In the final case, we show a text with ellipsis and a `Read more` button
    const toShow = content.substring(0, limit) + "...";
    return <div> 
      <p>{toShow}       <ReadMoreButton onClick={showMore}>Read more</ReadMoreButton></p>

    </div>
  }


  const ReadMoreButton = styled.button`
    
    border: none;
    color: #5e5e5e;
    background-color: white;
    cursor: pointer;
    font-weight: 600;
  `
  
  export default ReadMore;