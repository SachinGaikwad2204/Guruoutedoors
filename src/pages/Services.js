import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: "Mobile Van Activity",
    description: "Delivering brand experiences on the move with custom vans.",
    image: "/uploads/mobile-van.jpg",
    link: "/services/mobile-van"
  },
  {
    title: "LED TV Mobile Van Activity",
    description: "High-impact multimedia displays for outdoor campaigns.",
    image: "/uploads/led-tv-van.jpg",
    link: "/services/led-tv-van"
  },
  {
    title: "Box Mobile Van Activity",
    description: "Immersive product launches and demos on wheels.",
    image: "/uploads/box-van.jpg",
    link: "/services/box-van"
  },
  {
    title: "Product Demo Van Activity",
    description: "Showcase your products directly to your audience.",
    image: "/uploads/product-demo-van.jpg",
    link: "/services/product-demo"
  }
];

const Services = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: "40px 0", background: "#f5f8ff" }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '32px', color: '#222' }}>Our Services</h1>
      <div className="service-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px', margin: '40px 0' }}>
        {services.map(service => (
          <div className="service-card" key={service.title} style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', padding: '24px', transition: 'box-shadow 0.2s' }}>
            <img src={service.image} alt={service.title} className="service-img" style={{ width: '120px', height: '80px', objectFit: 'cover', borderRadius: '8px', marginRight: '24px' }} />
            <div className="service-info">
              <h3 style={{ color: '#002b7f', fontSize: '1.2rem', marginBottom: '8px' }}>{service.title}</h3>
              <p style={{ color: '#444', fontSize: '1rem', marginBottom: '12px' }}>{service.description}</p>
              <button className="read-more" type="button" style={{ color: '#1e90ff', background: 'none', border: 'none', fontWeight: 'bold', fontSize: '0.95rem', cursor: 'pointer', transition: 'color 0.2s' }} onClick={() => navigate(service.link)}>
                READ MORE &gt;
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Services;
