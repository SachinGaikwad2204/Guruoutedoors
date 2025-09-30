import Footer from "../components/Footer";

const partners = [
  { name: "Mahindra EPC", logo: "/uploads/partner-mahindra.png" },
  { name: "Malabar Gold & Diamonds", logo: "/uploads/partner-malabar.png" },
  { name: "Mankind Agritech", logo: "/uploads/partner-mankind.png" },
  { name: "MCF", logo: "/uploads/partner-mcf.png" }
];

const Partner = () => {
  return (
    <div style={{ padding: "40px 0", background: "#f5f8ff" }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '32px', color: '#222' }}>Our Partners</h1>
      <div className="partner-list" style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {partners.map(partner => (
          <div key={partner.name} className="partner-card" style={{ textAlign: 'center', background: '#fff', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', padding: '24px' }}>
            <img src={partner.logo} alt={partner.name} style={{ width: '120px', height: '80px', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }} />
            <h3 style={{ marginTop: '16px', color: '#002b7f' }}>{partner.name}</h3>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Partner;
