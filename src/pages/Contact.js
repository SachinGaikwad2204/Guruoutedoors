import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div style={{ padding: "40px 0", background: "#f5f8ff" }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '32px', color: '#222' }}>Contact Us</h1>
      <form className="contact-form" style={{ maxWidth: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px', background: '#fff', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: '32px' }}>
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
        <button type="submit" className="about-btn" style={{ background: '#1e90ff', color: '#fff', padding: '12px 32px', borderRadius: '8px', fontWeight: '600', fontSize: '1rem', border: 'none', cursor: 'pointer' }}>SEND MESSAGE</button>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
