// import { useState } from "react";
// import {
//   GiCalendar,
//   GiClawSlashes,
//   GiMailbox,
//   GiMayanPyramid,
//   GiPhone,
// } from "react-icons/gi";

// const Aside = () => {
//   const [show, setShow] = useState(false);

//   return (
//     <aside className={`${show ? "sidebar.active" : "sidebar"} `}>
//       <div className="sidebar-info">
//         <figure className="avatar-box">
//           <img src={"/images/montaser.jpg"} alt="Richard hanrick" width="80" />
//         </figure>

//         <div className="info-content">
//           <h1 className="name" title="Richard hanrick">
//             Omer Khaled
//           </h1>

//           <p className="title">Web developer</p>
//         </div>

//         <button
//           onClick={() => setShow(!show)}
//           className="info_more-btn "
//           data-sidebar-btn
//         >
//           <span>Show Contacts</span>

//           <GiClawSlashes />
//         </button>
//       </div>

//       <div className="sidebar-info_more">
//         <div className="separator"></div>

//         <ul className="contacts-list">
//           <li className="contact-item">
//             <div className="icon-box">
//               <GiMailbox />
//             </div>

//             <div className="contact-info">
//               <p className="contact-title">Email</p>

//               <a href="mailto:richard@example.com" className="contact-link">
//                 richard@example.com
//               </a>
//             </div>
//           </li>

//           <li className="contact-item">
//             <div className="icon-box">
//               <GiPhone />
//             </div>

//             <div className="contact-info">
//               <p className="contact-title">Phone</p>

//               <a href="tel:+12133522795" className="contact-link">
//                 +1 (213) 352-2795
//               </a>
//             </div>
//           </li>

//           <li className="contact-item">
//             <div className="icon-box">
//               <GiCalendar />
//             </div>

//             <div className="contact-info">
//               <p className="contact-title">Birthday</p>

//               <time dateTime="1982-06-23">June 23, 1982</time>
//             </div>
//           </li>

//           <li className="contact-item">
//             <div className="icon-box">
//               <GiMayanPyramid />
//               <ion-icon name="location-outline"></ion-icon>
//             </div>

//             <div className="contact-info">
//               <p className="contact-title">Location</p>

//               <address>Sacramento, California, USA</address>
//             </div>
//           </li>
//         </ul>

//         <div className="separator"></div>

//         <ul className="social-list">
//           <li className="social-item">
//             <a href="#" className="social-link">
//               <ion-icon name="logo-facebook"></ion-icon>
//             </a>
//           </li>

//           <li className="social-item">
//             <a href="#" className="social-link">
//               <ion-icon name="logo-twitter"></ion-icon>
//             </a>
//           </li>

//           <li className="social-item">
//             <a href="#" className="social-link">
//               <ion-icon name="logo-instagram"></ion-icon>
//             </a>
//           </li>
//         </ul>
//       </div>
//     </aside>
//   );
// };

// export default Aside;
import { useState } from "react";
import {
  GiCalendar,
  GiClawSlashes,
  GiMailbox,
  GiMayanPyramid,
  GiPhone,
} from "react-icons/gi";

const Aside = () => {
  const [show, setShow] = useState(false);

  return (
    <aside className={`sidebar ${show ? "active" : ""}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={"/images/montaser.jpg"} alt="Omer Khaled" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Omer Khaled">
            Omer Khaled
          </h1>

          <p className="title">Web Developer</p>
        </div>

        <button
          onClick={() => setShow(!show)} // Toggle visibility on click
          className="info_more-btn"
          data-sidebar-btn
        >
          <span>{show ? "Hide Contacts" : "Show Contacts"}</span>
          <GiClawSlashes />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <GiMailbox />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:omer@example.com" className="contact-link">
              omer.khailed.ali@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiPhone />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+123456789" className="contact-link">
                +201033237716
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiCalendar />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1995-08-25">Oct 23, 1998</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiMayanPyramid />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Minya, Egypt</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
