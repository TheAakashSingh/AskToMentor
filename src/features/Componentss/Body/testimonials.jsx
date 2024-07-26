import React, { useState, useEffect } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBIcon,
} from 'mdb-react-ui-kit';
import './testimonials.css'; // Import your CSS file for styling

const testimonials = [
  {
    name: 'Sneha Patel',
    role: 'Graphic Designer',
    quotes: [
      '"The community and mentors have helped me refine my techniques and push my creative boundaries. I am truly grateful for this platform!"',
      '"I really enjoy being part of this community. It\'s amazing how much I\'ve learned and grown as a designer."',
      '"AskToMentor has given me the confidence to explore new design trends and techniques. I feel more inspired than ever!"'
    ],
    avatar: 'https://img.freepik.com/premium-photo/indian-female-college-student-university-girl-student-with-books-bag_466689-96767.jpg',
    stars: 4,
  },
  {
    name: 'Amit Sharma',
    role: 'Marketing Specialist',
    quotes: [
      '"AskToMentor has revolutionized my approach to marketing. The insights and strategies shared by mentors have enabled me to achieve exceptional results in my campaigns. It\'s a must-have resource for any marketer!"',
      '"I never thought I could learn so much about marketing strategies in such a short time. This platform has exceeded my expectations."',
      '"The marketing webinars are simply outstanding. I\'ve implemented many new ideas into my campaigns and seen significant improvements."'
    ],
    avatar: 'https://t4.ftcdn.net/jpg/07/82/66/59/360_F_782665978_VS3k97JqHKGYRau7sjVpRTGX8VzdE5P5.jpg',
    stars: 4.5,
  },
  {
    name: 'Anurag Mishra',
    role: 'Web Developer',
    quotes: [
      '"AskToMentor has been an incredible platform for me. The mentorship and resources have significantly enhanced my skills in web development. I owe my success to the guidance and support I received here. Highly recommended!"',
      '"The web development bootcamps are top-notch. I\'ve learned advanced techniques that have boosted my career prospects."',
      '"This platform is a game-changer for web developers. The community is supportive, and the resources are extensive."'
    ],
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwnxUWGuoCCxg7SlNRqBgDlaYXP48mcdgNWQ&s',
    stars: 5,
  },
];

const App = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex(prevIndex =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h3 className="testimonials-heading mb-4 mt-5">Testimonials</h3>
          <p className="testimonials-paragraph mb-5 pb-2 mb-md-5 pb-md-0">
            Hear from our subscribers about how AskToMentor has transformed their careers.
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="justify-content-center">
        <MDBCol md="8" className="mb-4">
          <div className="testimonial-card">
            <div className="testimonial-content">
              {testimonials.map((testimonial, index) => (
 <div
 key={index}
 className={`testimonial-slide ${index === currentTestimonialIndex ? 'active' : ''}`}
>
 <img
   src={testimonial.avatar}
   className="rounded-circle shadow-1-strong"
   width="120"
   height="120"
   alt={testimonial.name}
 />
 <div className="text-content">
   <div className="c">
     <h5 className="person-name mb-3">{testimonial.name}</h5>
     <h6 className="role-text mb-3">{testimonial.role}</h6>
   </div>
   <p className="px-xl-3">
     <MDBIcon fas icon="quote-left" className="pe-2" />
     {testimonial.quotes[0]} {/* Displaying only the first quote */}
     <MDBIcon fas icon="quote-right" className="ps-2" />
   </p>
   <div className="stars">
     {[...Array(5)].map((_, i) => (
       <span key={i}>
         {i < Math.floor(testimonial.stars) ? (
           "⭐"
         ) : (
           i - testimonial.stars < 0.5 ? "⭐" : "☆"
         )}
       </span>
     ))}
   </div>
 </div>
</div>

              ))}
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default App;
