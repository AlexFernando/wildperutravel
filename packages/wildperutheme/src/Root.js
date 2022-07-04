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
import Header from './components/header/header';
import Sacredvalley from './components/SacredValley';
import AdventuresTours from './components/AdventuresTours'

export let bookAdventure = '';
export let ourTours = '';
export let viewMore = '';
export let bookTour = '';
export let description = '';
export let itinerary = '';
export let include = '';
export let price = '';
export let destacado = '';
export let notInclude = '';
export let startTime = '';
export let endTime = '';

 
const Root = ({state, actions}) => {

    const data = state.source.get(state.router.link);

    useEffect( () => {
        // actions.source.fetch("/homepage")
        // actions.source.fetch("/es/homepage");

        if( state.theme.lang === "en") {
            actions.source.fetch("/homepage")
            bookAdventure = 'BOOK YOUR ADVENTURE'
            ourTours = 'OUR TOURS'
            viewMore = 'VIEW MORE'
            bookTour = 'BOOK YOUR TOUR'
            description = 'Description'
            itinerary = 'Itinerary'
            include = 'Include'
            notInclude = 'Not Include'
            destacado = 'The Most Outstanding'
            price = 'Price'
            startTime = 'Start Time'
            endTime = 'End Time'
        }

        else if (state.theme.lang === "es") {
            actions.source.fetch("/es/homepage");
            bookAdventure = 'RESERVA TU AVENTURA'
            ourTours = 'NUESTROS TOURS'
            viewMore = 'VER MÁS'
            bookTour = 'RESERVA UN TOUR'
            description = 'Descripción'
            itinerary = 'Itinerario'
            include = 'Incluye'
            notInclude = 'No Incluye'
            destacado = 'Lo Más Destacado'
            price = 'Precio'
            startTime = 'Inicio'
            endTime = 'Final'

        }
    }, [])

    
    return (
      <>
      <Global
                styles={css`

                    :root {
                        --brand: #0c884a; //#5B3BE8;
                        
                        --black: #000000;
                        --white: #ffffff;
                        --bodycolor: #343434;
                    }
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
                <title>Wild Peru Travels - Tour Operator</title>
                <meta name="description" content="Wild Peru travel, your best travel agency in Cusco. We will organize your tours, like Machu Picchu, Rainbow Mountains, Salkantay trek, Inka Trail and more, so you can have the best experience." />
                <html lang="en" />
            </Head>

        {/** Navbar */}       
        {/* <NavBar /> */}

        <Header />
        {data.isHomePage && <HomePage /> }

        {data.isTourDetails && <TourDetails /> }

        {state.router.link === "/machupicchu/" && <MachuPicchu />}
        {state.router.link === "/es/machupicchu/" && <MachuPicchu />}

        {state.router.link === "/sacredvalley/" && <Sacredvalley />}
        {state.router.link === "/es/sacredvalley/" && <Sacredvalley />}

        {state.router.link === "/adventuretours/" && <AdventuresTours />}
        {state.router.link === "/es/adventuretours/" && <AdventuresTours />}

        {state.router.link === "/fulltours/" && <AllTours />}
        {state.router.link === "/es/fulltours/" && <AllTours />}

        {data.isAlltours && <TourDetails />}

        {state.router.link === "/contact-tour/" && <ContactTours />}
        {state.router.link === "/es/contact-tour/" && <ContactTours />}
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