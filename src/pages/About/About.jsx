/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/programm.png",
    title: "Frontend Development",
    description:
      "Creating responsive and user-friendly interfaces with modern technologies.",
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Backend Development",
    description:
      "Scalable server-side solutions for seamless application performance.",
  },

  // {
  //   icon: "/images/icon-photo.svg",
  //   title: "Photography",
  //   description:
  //     "I make high-quality photos of any category at a professional level.",
  // },
  {
    icon: "/images/icon-design.svg",
    title: "UI Development ",
    description:
      "Crafting intuitive and visually appealing user interfaces with a focus on user experience.",
  },
];

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTestimonials(data);
      });
  }, []);
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I am a Full-Stack Developer with expertise in React.js, Next.js,
          TypeScript, and the MERN stack. As a graduate of ITI's Intensive Code
          Camp (ICC) MERN track, I have gained comprehensive experience in
          developing modern web applications using MongoDB, Express.js,
          React.js, and Node.js.
        </p>
      </section>

      {/* <!--
      - service
    --> */}

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </section>

      {/* <!--
      - testimonials
    --> */}

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Hire Me</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              to={testimonial.to}
              testimonial={testimonial.link}
            />
          ))}
        </ul>
      </section>

      {/* <!--
      - clients
    --> */}

      {/* <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src="images/logo-1-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-2-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-3-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-4-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-5-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-6-color.png" alt="client logo" />
            </a>
          </li>
        </ul>
      </section> */}
    </article>
  );
};

export default About;
