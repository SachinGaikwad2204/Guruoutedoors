import Footer from "../components/Footer";

const jobs = [
  { title: "Event Manager", location: "Mumbai", desc: "Lead and manage outdoor events and campaigns." },
  { title: "Marketing Executive", location: "Pune", desc: "Drive brand promotions and client engagement." },
  { title: "Graphic Designer", location: "Remote", desc: "Create stunning visuals for campaigns and social media." }
];

const Careers = () => {
  return (
    <div style={{ padding: "40px 0", background: "#f5f8ff" }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '32px', color: '#222' }}>Careers</h1>
      <div className="job-list" style={{ maxWidth: '700px', margin: '0 auto', display: 'grid', gap: '24px' }}>
        {jobs.map(job => (
          <div key={job.title} className="job-card" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', padding: '24px' }}>
            <h3 style={{ color: '#002b7f' }}>{job.title}</h3>
            <p><strong>Location:</strong> {job.location}</p>
            <p>{job.desc}</p>
            <button className="about-btn" type="button" style={{ background: '#1e90ff', color: '#fff', padding: '10px 24px', borderRadius: '8px', fontWeight: '600', fontSize: '1rem', border: 'none', cursor: 'pointer' }}>Apply Now</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
