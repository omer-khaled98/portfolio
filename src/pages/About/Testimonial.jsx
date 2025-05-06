import { Link } from "react-router-dom";

const Testimonial = ({ to, avatar, testimonial }) => {
  console.log(to, testimonial);
  return (
    <li className="testimonials-item">
      <div className="content-card" data-testimonials-item>
        {/* <figure className="testimonials-avatar-box">
          <img src={avatar} alt={name} width="60" data-testimonials-avatar />
        </figure> */}
        {/* <h4 className="h4 testimonials-item-title" data-testimonials-title>
          {name}
        </h4> */}
        <div className="testimonials-text" data-testimonials-text>
          <Link target="_blank" to={to}>
            <img
              src={testimonial}
              // alt={name}
              width="60"
              data-testimonials-avatar
            />
          </Link>
        </div>
      </div>
    </li>
  );
};

export default Testimonial;
