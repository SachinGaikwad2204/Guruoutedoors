import Footer from "../components/Footer";

const aboutList = [
  "Guru Outdoors connects brands with audiences through innovative outdoor solutions.",
  "Expert team with 10+ years of experience in event management.",
  "24x7 support for seamless campaign execution.",
  "Trusted by 150+ clients across India.",
  "Award-winning strategies for brand visibility.",
  "Custom solutions for every business need.",
  "Respect for client privacy and brand value."
];

const About = () => {
  return (
    <div style={{ padding: "40px 0", background: "#f5f8ff" }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '32px', color: '#222' }}>About Us</h1>
      <ul style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: '#333', lineHeight: '1.7', background: '#fff', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: '32px' }}>
        {aboutList.map((item, idx) => (
          <li key={idx} style={{ marginBottom: '16px' }}>{item}</li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default About;
