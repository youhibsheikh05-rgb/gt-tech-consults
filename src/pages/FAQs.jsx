import { useState } from 'react'

const faqs = [
  { q: 'What does GT Tech Consults do?', a: 'We are a technology consulting and digital solutions agency. We help learners build practical tech skills and help businesses with web development, design, AI automation, marketing, and technology consulting.' },
  { q: 'Who can join your courses?', a: 'Our courses are beginner-friendly and designed for students, aspiring freelancers, and anyone who wants practical, in-demand digital skills.' },
  { q: 'Are the courses online or on-site?', a: 'Course format, schedule, and availability are confirmed during application. Contact us for the latest details on the course you are interested in.' },
  { q: 'Do you guarantee a job or paid work?', a: 'No. We provide practical learning and real project exposure, but we do not guarantee placement, jobs, or paid opportunities.' },
  { q: 'How do I start a project with your agency?', a: 'Use the Start a Project form to share your goals, scope, and timeline. Our team will review your brief and get back to you with next steps.' },
  { q: 'How can I contact GT Tech Consults?', a: 'You can call or WhatsApp us at 03430374243, email gttechconsults@gmail.com, or use the contact form on this website.' },
  { q: 'What information do you collect?', a: 'We only collect the information needed to respond to inquiries, applications, and project requests. See our Privacy Policy for full details.' },
]

export default function FAQs() {
  const [open, setOpen] = useState(null)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">FAQs</span>
          <h1>Frequently Asked Questions</h1>
          <p>Answers to common questions about services, courses, and working with us.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          {faqs.map((f, i) => (
            <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <span className="plus">+</span>
              </button>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}