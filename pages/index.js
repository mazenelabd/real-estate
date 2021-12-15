import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Projects from '../components/projects/Projects'
import Testimonial from '../components/Testimonial'
import { API_URL } from '../config/index'

export default function Home({ projects }) {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects projects={projects} />
      <Testimonial />
      <Contact />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/projects`)
  const projects = await res.json()

  return {
    props: { projects },
  }
}
