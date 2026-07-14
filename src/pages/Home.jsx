import Hero from '../components/Hero.jsx'
import FeaturedProjects from '../components/home/FeaturedProjects.jsx'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero title="Thomas Fieguth" image="placeholder" />

      <section className={styles.about}>
        <h2 className={styles.aboutHeading}>About Me</h2>
        <p className={styles.aboutBody}>My name is Thomas Fieguth, a Systems Design Engineering graduate from the University of Waterloo, now working as a Software Engineer at Werkr Tractors. My five co-op terms took me from Accelerated Systems to GEI Consultants to Werkr Tractors, where I learned mechanical design, CNC machining, data analysis, and autonomous robotics. </p>
        <p className={styles.aboutBody}>I work across the full stack of a physical project: CAD design, CNC fabrication, welding and machining, and software ranging from embedded C++/ROS2 control systems to Qt-based GUIs and 3D visualization tools. I end up using the same combination of hardware and software skills whether I'm building the onboard interface for an autonomous tractor, the depth-sensing feedback system in my capstone, or the terrain and river logic for a custom Catan tile set. </p>
        <p className={styles.aboutBody}>Outside of formal engineering work, I build many different projects for fun: CNC-routed wooden globes, topographical maps, a stormbreaker replica, and a Catan combinatorial optimizer.</p>
      </section>

      <FeaturedProjects />
    </div>
  )
}
