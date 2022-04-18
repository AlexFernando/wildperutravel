import Script from "@frontity/components/script";

const MyTripAdvisorComponent = () => (
  <Script
    code={`
        const body = document.querySelector('body');

        // Triggers anytime anywhere in the body of the page is clicked
        body.addEventListener('click', e => {
            e.preventDefault();
            console.log('Button Works');
        });
    `}
  />
);

export default MyTripAdvisorComponent;