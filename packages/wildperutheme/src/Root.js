import React, {useEffect} from 'react';
import { Head, connect, Global, css, styled } from "frontity";
import NavBar from './components/NavBar';
import Footer from './components/footer';
import HomePage from './components/Home';
import Contact from './components/contact';
import TourDetails from './components/ToursDetails';
import MachuPicchu from './components/MachuPicchu';
import AllTours from './components/AllTours';
import ContactTours from './components/ContactTours';

const Root = ({state, actions}) => {

    const data = state.source.get(state.router.link);

    useEffect( () => {
        actions.source.fetch("/homepage")
    }, [])

    
    return (
      <>
      <Global
                styles={css`

                    body {
                        margin: 0;
                        font-family: 'Montserrat', sans-serif;
                        overflow-x: hidden;
                        width: 100%;
                        /*height: 100%;*/
                    }

                
                    /* * {
                        border: 1px solid #f00 !important;
                    }  
                     */
                    p {
                        font-family: 'Montserrat', sans-serif;
                        font-weight: 400;
                    }
                `}
            />

            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet" media="print" onload="this.media='all'"/> 
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
            </Head>

        {/** Navbar */}       
        <NavBar />

        {data.isHomePage && <HomePage /> }

        {data.isTourDetails && <TourDetails /> }

        {state.router.link === "/machupicchu/" && <MachuPicchu />}

        {state.router.link === "/fulltours/" && <AllTours />}

        {data.isAlltours && <TourDetails />}

        {state.router.link === "/contact-tour/" && <ContactTours />}
        {/**Other components */}
{/*         
        {data.isFullProgram && <AllEvents />}  
        {data.isAllevents && <EventsDetails/>}
        {state.router.link === "/mainevent/" && <MainEvent />}

        {state.router.link === "/contact/" && <StayInTouch />}
*/}


        <Contact />  
            
        <Footer title={"Wild Perú Travel"}/>   
      </>
    );
  };

  export default connect(Root);