import styles from './App.module.scss'
import photo1 from './images/photo1.png'
import photo2 from './images/photo2.png'
import photo3 from './images/photo3.png'
import photo4 from './images/photo4.png'
import photo5 from './images/photo5.png'
import photo6 from './images/photo6.png'

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
        <div>
          <img src={photo1} alt="bill mahoney" />
          <p>Bill Mahoney</p>
          <span id={styles.bill} >Product Owner</span>
        </div>
        <div>
          <img src={photo2} alt="saba cabrera" />
          <p>Saba Cabrera</p>
          <span id={styles.saba} >Art Director</span>
        </div>
        <div>
          <img src={photo3} alt="shae le" />
          <p>Shae Le</p>
          <span id={styles.shae} >Tech Lead</span>
        </div>
        <div>
          <img src={photo4} alt="skylah lu" />
          <p>Skylah Lu</p>
          <span id={styles.skylah} >UX Designer</span>
        </div>
        <div>
          <img src={photo5} alt="griff richards" />
          <p>Griff Richards</p>
          <span id={styles.griff} >Developer</span>
        </div>
        <div>
          <img src={photo6} alt="stan john" />
          <p>Stan John</p>
          <span id={styles.stan} >Developer</span>
        </div>
      </section>
      <footer>
        created by <a href="https://github.com.br/bonamigor">bonamigor</a> - devChallenges.io
      </footer>
    </div>
  );
}

export default App;
