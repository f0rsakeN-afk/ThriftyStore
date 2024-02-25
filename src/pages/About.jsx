import React from "react";
import Slider from "../components/Slider";

function About() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-12 py-8 ">
        <div className="">
          <Title
            text1={`At ThriftyStore, we believe in more than just providing quality
                    fashion; we believe in creating a style statement. Our journey
                    began in 2010 with a passion for the latest trends and
                    fashion-forward accessories. Since then, we have been dedicated to
                    bringing chic, trendy, and affordable styles to your wardrobe.`}
            text={`Welcome to ThriftyStore`}
          />
          <br />
          <Title
            text={"Our Story"}
            text1={`Founded in the heart of the fashion capital, ThriftyStore started as a small online boutique, driven by the desire to offer unique and handpicked accessories to our customers. Over the years, we've grown, learned, and expanded our offerings while staying true to our commitment to style and quality.`}
          />

          <Title
            text={" Our Mission"}
            text1={`Our mission at ThriftyStore is to inspire confidence through fashion. We aim to empower individuals to express their unique style with our curated selection of accessories that are both trendy and timeless.`}
          />

          <Title
            text={"Connect With Us"}
            text1={`We love hearing from our customers! Feel free to reach out to us with any questions, feedback, or just to say hello. Follow us on Instagram and Facebook to stay updated on our latest products, promotions, and behind-the-scenes moments.
                    `}
          />
          <Title
            text1={`Thank you for being a part of the ThriftyStore family. We look forward to helping you make a statement with your style.`}
          />
          <p className="text-gray-600 dark:text-gray-200">Happy Shopping</p>
          
          <p className="text-gray-600 dark:text-gray-200 ">
            The ThriftyStore Team
          </p>
        </div>
        <Slider/>
      </div>
    </div>
  );
}
function Title({ text, text1 }) {
  return (
    <div className="py-4">
      <h2 className="text-4xl font-semibold pb-2 text-gray-700 dark:text-gray-200">
        {text}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{text1}</p>
    </div>
  );
}
export default About;
