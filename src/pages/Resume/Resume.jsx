import React from "react";
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import SkillItem from "./SkillItem";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Information Technology Institute (ITI)"
            date="May 2024 -August 2024"
            description="Participated in an immersive coding boot camp focused on web
development, with a specific emphasis on the MERN 
(MongoDB, Express.js, React.js, Node.js) stack"
          />
          {/* <TimelineItem
            title="New york academy of art"
            date="2006 — 2007"
            description="Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis."
          /> */}
          {/* <TimelineItem
            title="High school of art and design"
            date="2002 — 2004"
            description="Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos."
          /> */}
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Web developer at Mishkat"
            date="Oct 2024 — Present"
            description="Web Developer at Mishkat, specializing in responsive and user-friendly web applications, with hands-on experience in backend integration, API development, and database management to ensure seamless functionality"
          />
          <TimelineItem
            title="Freelance Web Developer"
            date="As Full-Stack Developer"
            description="Freelance Web Developer specializing in creating responsive websites and seamless backend solutions."
          />
          {/* <TimelineItem
            title="Web designer"
            date="2010 — 2013"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          /> */}
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        {/* <ul className="skills-list content-card">
          <SkillItem title="Web design" value={80} />
          <SkillItem title="Graphic design" value={70} />
          <SkillItem title="Branding" value={90} />
          <SkillItem title="WordPress" value={50} />
        </ul> */}

        <div className="skills_img">
          <img src="images/html2.png" alt="" />
          <img src="images/css.png" alt="" />
          <img src="images/js.png" alt="" />
          <img src="images/tailwind.png" alt="" />
          <img src="images/bootstrap.png" alt="" />
          <img src="images/node.png" alt="" />
          <img src="images/mongo.png" alt="" />
          <img src="images/nest.png" alt="" />
          <img src="images/react.png" alt="" />
          <img src="images/next.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Resume;
