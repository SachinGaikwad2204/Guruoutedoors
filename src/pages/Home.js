import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Slideshow from '../components/Slideshow';
import ClientSlideshow from '../components/ClientSlideshow';
import '../styles/Home.css';

const Home = () => {
  const [videoData] = useState([
    {
      title: "Guruprasad Multiservices | Awarded with Maharashtra...",
      url: "https://www.youtube.com/watch?v=bqFP27rRBdk&t=11s"
    },
    {
      title: "Eicher Promotional Van Maharashtra | Election Van Campaign",
      url: "https://www.youtube.com/watch?v=4ZVB7hj_eq4"
    },
    {
      title: "Chambal Fertilizer Meet Latur | Organized by Guru Outdoors",
      url: "https://www.youtube.com/watch?v=5qhEm7b87uc"
    },
    {
      title: "Nav Durga in Krishi - कृषि में नवदुर्गा",
      url: "https://www.youtube.com/watch?v=RbSBYNZkiFc&t=3s"
    },
    {
      title: "Guru Outdoors | Advertising #mobilevanadvertising",
      url: "https://www.youtube.com/watch?v=MO3HrAgkIw0"
    },
    {
      title: "Office Opening Video",
      url: "https://www.youtube.com/watch?v=Jmw8M53BebA"
    },
    {
      title: "Chambal Fertilizers Retailer Meet | A Spectacular Event",
      url: "https://www.youtube.com/watch?v=jAF6H5Lv454"
    }
  ]);

  const [activeVideo, setActiveVideo] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const navigate = useNavigate();

  const handleVideoClick = (url) => {
    setActiveVideo(url);
  };

  const closeVideoModal = () => {
    setActiveVideo(null);
  };

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // --- Modern Service Card Section ---
  const services = [
    {
      title: "Mobile Van Activity",
      description: "Services delivered, brands promoted on the go.",
      image: "/uploads/mobile-van.jpg",
      link: "#"
    },
    {
      title: "LED TV Mobile Van Activity",
      description: "Immersive experiences on the move.",
      image: "/uploads/led-tv-van.jpg",
      link: "#"
    },
    {
      title: "Box Mobile Van Activity",
      description: "Immersive product experience on wheels.",
      image: "/uploads/box-van.jpg",
      link: "#"
    },
    {
      title: "Product Demo Van Activity",
      description: "Bringing business to your doorstep.",
      image: "/uploads/product-demo-van.jpg",
      link: "#"
    },
    {
      title: "Acrylic Dealer Board",
      description: "Transparent, strong, easy to fabricate, and durable.",
      image: "/uploads/acrylic-board.jpg",
      link: "#"
    },
    {
      title: "Dealer Board",
      description: "Prominent outdoor ads for brand and retailer.",
      image: "/uploads/dealer-board.jpg",
      link: "#"
    },
    {
      title: "Arch Gate",
      description: "Grand entrances for events and promotions.",
      image: "/uploads/arch-gate.jpg",
      link: "#"
    },
    {
      title: "Mini Hoarding",
      description: "Compact, impactful outdoor advertising.",
      image: "/uploads/mini-hoarding.jpg",
      link: "#"
    }
    // Add more services as needed
  ];

  return (
    <div className="home" style={{
      background: "linear-gradient(120deg, #eaf0fa 60%, #f5f8ff 100%)"
    }}>
      {/* Video Modal */}
      {activeVideo && (
        <div className="video-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeVideoModal}>
              <span style={{fontSize: '2rem', fontWeight: 'bold', lineHeight: '1'}}>&times;</span>
            </button>
            <iframe 
              src={activeVideo} 
              title="Video Player"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Loading Indicator */}
      {!imagesLoaded && (
        <div className="loading-indicator">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      )}

      <Slideshow />

      <section className="sub-slogan">
        <p>Improving Connectivity. Make it a strategy for brand visibility...</p>
      </section>

      <section className="hero">
        <h1>HIGH-QUALITY MARKET EXPERIENCES</h1>
      </section>

      <section className="about-us" aria-labelledby="about-heading">
        <h2 id="about-heading">ABOUT US</h2>
        <div className="services-list">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-clipboard"></i>
            </div>
            <h3>Work Order</h3>
            <p>Guru Outdoors: Your gateway to seamless connectivity.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <h3>Project Planning</h3>
            <p>Strategic project planning for success from start to finish.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-sync"></i>
            </div>
            <h3>Daily Update</h3>
            <p>Daily updates to keep you on track and informed.</p>
          </div>
        </div>
      </section>

      <section className="our-services" aria-labelledby="services-heading">
        <h2 id="services-heading">OUR SERVICES</h2>
        <p>Elevating brands with innovative and impactful outdoor advertising solutions.</p>
        <div className="service-list">
          {services.map(service => (
            <div className="service-card" key={service.title}>
              <img src={service.image} alt={service.title} className="service-img" />
              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {/* Replace anchor with button for accessibility */}
                <button className="read-more" type="button" onClick={() => navigate('/services')}>
                  READ MORE &gt;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="features" aria-labelledby="features-heading">
        <div className="container">
          <h2 id="features-heading">Why Choose Our Outdoor Marketing Solutions?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>High Visibility</h3>
              <p>Reach thousands of potential customers daily with strategic placement in high-traffic areas.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3>Remote Area Coverage</h3>
              <p>Connect with audiences in remote locations that are often missed by digital campaigns.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Boost Sales</h3>
              <p>Proven strategies that directly impact product awareness and increase sales conversion.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Mass Audience Reach</h3>
              <p>Target diverse demographics with messaging that resonates across different audience segments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-top" aria-labelledby="gallery-top-heading">
        <h2 id="gallery-top-heading">Gallery Highlights</h2>
        <div className="gallery-top-row">
          {/* Only one image and one video */}
          <div className="gallery-top-images">
            <img src="/uploads/IMG-65d58331c56762.10680753.jpg" alt="Award ceremony" />
          </div>
          <div className="gallery-top-videos">
            {videoData.slice(0, 1).map((video, index) => {
              let videoId = '';
              if (video.url.includes('youtube.com/watch')) {
                const urlParams = new URLSearchParams(video.url.split('?')[1]);
                videoId = urlParams.get('v');
              } else if (video.url.includes('youtube.com/embed/')) {
                videoId = video.url.split('embed/')[1].split(/[?&]/)[0];
              }
              const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '/uploads/video_thumbnail1.png';
              return (
                <div key={index} className="video-card">
                  <img
                    src={thumbnailUrl}
                    alt="Video thumbnail"
                    className="video-thumbnail"
                    style={{ cursor: 'pointer', width: '100%', height: 'auto' }}
                    onClick={() => handleVideoClick(video.url.includes('embed') ? video.url : `https://www.youtube.com/embed/${videoId}`)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="gallery" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading">Awards of Distinction, Achievements of Excellence.</h2>
        <div className="gallery-images">
          <img src="../uploads/IMG-65d58331c56762.10680753.jpg" alt="Award ceremony" onError={e => e.target.src = '/uploads/fallback.jpg'} />
          <img src="/uploads/IMG-67ac3fcc6b8151.98218099.jpg" alt="Group at event" onError={e => e.target.src = '/uploads/fallback.jpg'} />
          <img src="/uploads/IMG-67b4673e6f10e2.50550086.jpg" alt="Office tour" onError={e => e.target.src = '/uploads/fallback.jpg'} />
          <img src="/uploads/IMG-67b455957abfd0.11741511.jpg" alt="Inauguration event" onError={e => e.target.src = '/uploads/fallback.jpg'} />
        </div>
        <div className="gallery-videos">
          {videoData.slice(0, 4).map((video, index) => {
            let videoId = '';
            if (video.url.includes('youtube.com/watch')) {
              const urlParams = new URLSearchParams(video.url.split('?')[1]);
              videoId = urlParams.get('v');
            } else if (video.url.includes('youtube.com/embed/')) {
              videoId = video.url.split('embed/')[1].split(/[?&]/)[0];
            }
            const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '/uploads/video_thumbnail1.png';
            return (
              <div key={index} className="video-card">
                <img
                  src={thumbnailUrl}
                  alt="Video thumbnail"
                  className="video-thumbnail"
                  style={{ cursor: 'pointer', width: '100%', height: 'auto' }}
                  onClick={() => handleVideoClick(video.url.includes('embed') ? video.url : `https://www.youtube.com/embed/${videoId}`)}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* --- Modern About Section --- */}
      <section className="about-modern" aria-labelledby="about-heading">
        <div className="about-bg">
          <div className="about-content">
            <h2 id="about-heading">ABOUT US</h2>
            <ul className="about-list">
              <li>Guru Outdoors provides services to brand companies for unstoppable connectivity.</li>
              <li>Believes in group work.</li>
              <li>Provides best result with 24x7 service.</li>
              <li>Foundation of branding and marketing is our service.</li>
              <li>Believes in right choice of service and marketing method as the key of success.</li>
              <li>For impressive growth, we secure and enhance brand identity in challenging markets.</li>
              <li>We respect our clients' brand value and privacy.</li>
            </ul>
            <button className="about-btn" onClick={() => navigate('/about')}>READ MORE</button>
          </div>
          <div className="about-form">
            <form className="contact-form">
              <input type="text" placeholder="Name *" required />
              <input type="text" placeholder="Phone *" required />
              <input type="email" placeholder="Email *" required />
              <select required>
                <option value="">Choose Services?</option>
                <option value="Mobile Van">Mobile Van</option>
                <option value="Event Management">Event Management</option>
                <option value="Brand Promotion">Brand Promotion</option>
                <option value="Outdoor Campaigns">Outdoor Campaigns</option>
              </select>
              <textarea placeholder="Message" rows="3"></textarea>
              <button type="submit" className="about-btn">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>

      <section className="client-section" aria-labelledby="client-heading">
        <h2 id="client-heading">OUR CLIENTS</h2>
        <ClientSlideshow />
      </section>

      <Footer />
    </div>
  );
};

export default Home;