import styles from './App.module.scss'
import photo1 from './images/photo1.png'
import photo2 from './images/photo2.png'
import photo3 from './images/photo3.png'
import photo4 from './images/photo4.png'
import photo5 from './images/photo5.png'
import photo6 from './images/photo6.png'

const crew = [
  {
    name: 'Bill Mahoney',
    role: 'Product Owner',
    avatar: photo1
  },
  {
    name: 'Saba Cabrera',
    role: 'Art Director',
    avatar: photo2
  },
  {
    name: 'Shae Le',
    role: 'Tech Lead',
    avatar: photo3
  },
  {
    name: 'Skylah Lu',
    role: 'UX Designer',
    avatar: photo4
  },
  {
    name: 'Griff Richard',
    role: 'Developer',
    avatar: photo5
  },
  {
    name: 'Stan John',
    role: 'Developer',
    avatar: photo6
  }
]

function App() {
  return (
    <div className={styles.container}>
      <header>
        <h1>The creative crew</h1>
        <section className={styles.about}>
          <h1>Who we are</h1>
          <p>We are team of creatively diverse. driven. <br />innovative individuals working in various <br />locations from the world.</p>
        </section>
      </header>
      <section className={styles.team}>
        {crew.map(member => {
          return (
            <div>
              <img src={member.avatar} alt={member.name} />
              <p>{member.name}</p>
              <span>{member.role}</span>
            </div>
          )
        })}
      </section>
      <footer>
        created by <a href="https://github.com.br/bonamigor">bonamigor</a> - devChallenges.io
      </footer>
    </div>
  );
}

export default App;
