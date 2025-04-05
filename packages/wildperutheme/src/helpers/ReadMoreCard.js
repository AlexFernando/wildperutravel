
import React, {useState} from 'react';
import { connect, styled, css, Global } from "frontity";

const ReadMoreCard = ({ content,limit}) => {
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
    const toShow = content.substring(0, limit);
    return <ContainerReadMore> 
  
      <ReadMoreLink onClick={showMore}><p>{toShow} <span> ...Read More</span></p> </ReadMoreLink>
    </ContainerReadMore>
  }

  const ContainerReadMore = styled.div`
    /* display: flex;
    justify-content: center; */
  `


  const ReadMoreLink = styled.div`
    font-size: 1.1rem;
    border: none;
    color: #333333;
    text-decoration: none;
    padding: 0;
    cursor: pointer;
    color: #3A6F84;
    margin-top: 1rem;

  `
  
  export default ReadMoreCard;