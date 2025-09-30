import Footer from "../components/Footer";

const galleryImages = [
  { src: "/uploads/IMG-65d58331c56762.10680753.jpg", alt: "Award ceremony" },
  { src: "/uploads/IMG-67ac3fcc6b8151.98218099.jpg", alt: "Group at event" },
  { src: "/uploads/IMG-67b4673e6f10e2.50550086.jpg", alt: "Office tour" },
  { src: "/uploads/IMG-67b455957abfd0.11741511.jpg", alt: "Inauguration event" }
];

const Gallery = () => {
  return (
    <div style={{ padding: "40px 0", background: "#f5f8ff" }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '32px', color: '#222' }}>Gallery</h1>
      <div className="gallery-images" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px', margin: '32px auto', maxWidth: '1200px' }}>
        {galleryImages.map(img => (
          <img key={img.alt} src={img.src} alt={img.alt} style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.10)', transition: 'transform 0.3s, box-shadow 0.3s', cursor: 'pointer' }} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
