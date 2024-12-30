'use client'
import "../fonts/fonts.css";
import "src/styles/globals.css"
import Header from "./Header/Header";
import Hero from "./Hero/page";
import Logos from "./Logos/Logos";
//This the main page  of the App
import Navigation from "./NavBar/page";
import Page from "./Page/Page";
import Testimonial from "./Testimonial/Testimonial";
import Features from "./Features/Features";
import Video from "./Video/Video";
import FAQ from "./FAQ/FAQ";
import Accordion from "./Accordion/page";
import Pricing from "./Pricing/Pricing";
import CTA from "./CTA/CTA";
import Footer from "./Footer/Footer";
import Faq from "./FAQ/FAQ";

export default function HomePage() {
  return ( 
    <Page>
      <Header>
        <Navigation />
        <Hero />
      </Header>
      <Logos />
      <Testimonial>
        <h5 className="h5 testimonial__heading">
        We’ve seen incredible growth since partnering with them. Their ability to connect with our target audience and turn insights into actionable strategies is impressive. Highly recommended!
        </h5>
        <div className="testimonial__author-section">
          <p className="text-reg testimonial__organization">
          Emily S., E-commerce Brand Owner
          </p>
        </div>
        <img
          className="testimonial__quotes"
          src="./double-quote.svg"
          alt="quote"
        />
      </Testimonial>
      <Features/>
      <Testimonial>
      <h5 className="h5 testimonial__heading">
      I was skeptical at first, but working with this team has been a game-changer. They don’t just promise results ,they deliver. My business has grown by 150% since we started!"
      </h5>
      <div className="testimonial__author-section">
          
          <p className="text-reg testimonial__organization">
          Natalie T., Small Business Owner
          </p>
        </div>
        <img className="testimonial__quotes" src="./double-quote.svg" alt="quote" />
      </Testimonial>
      <Video />
      <Faq>
       <Accordion/>
      </Faq>
      <Testimonial>
        <h5 className="h5 testimonial__heading">
        They turned our vague ideas into a powerful marketing strategy. The creativity and dedication of their team have been pivotal in our brand’s transformation."
        </h5>
        <div className="testimonial__author-section">
          <p className="text-reg testimonial__organization">
          Lisa K., Creative Lead
          </p>
        </div>
        <img className="testimonial__quotes" src="./double-quote.svg" alt="quote" />

      </Testimonial>
  
      <Footer/>
    </Page>
    
  );
}
