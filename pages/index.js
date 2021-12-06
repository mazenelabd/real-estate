import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Projects from '../components/projects/Projects'
import Testimonial from '../components/Testimonial'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Testimonial />
      <Contact />
    </Layout>
  )
}
