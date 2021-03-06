/* eslint-disable @next/next/no-img-element */
import CardWave from "../src/components/CardWave/CardWave";
import styles from "../styles/Home.module.css";
import CardLogo from "../src/components/CardLogo/CardLogo";
import ContactUsFooter from "./../src/components/ContactUsFooter/ContactUsFooter";
import ImageModal from "../src/components/ImageModal/ImageModal";
import SocialMediaShare from "../src/components/SocialMediaShare/SocialMediaShare";

export default function Home() {
  //lessons learnt strings
  const list = {
    dadjokes: [
      "My first deployed react app",
      "Uses web API to retrieve data and store in localstorage",
      "Uses movable animated components ",
      "Pre React Hooks state handling",
      "First experience with Axios and JSON parsing",
      "Dynamic component state management",
    ],

    recipes: [
      "First use of Next JS in a React project",
      "Uses 2 web APIs to populate 200+pages dynamically on server side with re-usable templates",
      "NextJS Static generation - fetch and populate date at build time",
      "NextJS Static generation - specify dynamic routes to pre-render pages based on data",
      "Modular Design with re-usable components",
      "CSS - Mobile friendly and responsive",
      "CSS - Modern, stylish look and feel",
    ],

    icedreams: [
      "Focus on modern front end styling concepts with pure CSS",
      "Mobile friendly layout",
      "Responsive web design",
      "React functional card components",
      "Refactoring cards for re-use",
      "Introduction to SVG waves, overlays and SVG gotchas",
      "CSS positioning: relative, absolute",
      "CSS negative margins",
      "CSS Neomorphism box shadows",
      "Cross browser testing",
      "This portfolio website re-uses and enhances components created in Ice Dreams",
    ],

    cocktails: [
      "Responsive web design",
      "Mobile friendly layout",
      "React functional components",
      "Components designed for re-use",
      "Social Media Integration",
      "Using fetch for getting JSON from API",
      "All data is fetched async from API: www.thecocktaildb.com",
      "Using template literals for parsing dynamic json properties",
      "React hooks for managing state",
      "CSS Neomorphism box shadows",
      "CSS display:grid layout design pattern",
    ],

    trivia: [
      "First full interactive MERN stack project",
      "Express backend web server",
      "Developed backend API to GET/POST from MongoDB Atlas",
      "React front end used for interactive triva game",
      "Fetching random questions from free API",
      "Using MongoDB Atlas to store every user score",
      "Developed a progressbar and customizable snackbar",
      "Summary page scrolls to users score in overall list",
      "React Router for swicthing between launcher, header, game, summary pages",
      "Responsive web design",
      "Mobile friendly layout",
      "Components designed for re-use",
      "Axios for GET/POST to API",
      "React hooks for managing state",
    ],

    zorcalc:
      "Created in 80 hours during ZOR project. It allows the user to upload recs_config, weights, recommendation, viewing history STB files, and then accurately calculate the recommendations for that particular time.This one click solution allowed all members of the team to quickly compare results found in the STB with this application which saved much time and enhanced the quality of the product",

    memory:
      "This is a proof of concept application to show STB memory usage over time, by allowing user to upload log file which then gets automatically parsed and displays a graph of memory usage over time",

    qrcode:
      "Created in 4 hours to assist with SI triage of qrcode related defects. Shows success or error if qrcode string length is invalid. Parses the string and shows corresponding values.",
  };

  //image modal arrays
  const imageList = {
    coursesImages: ["screens/cert1.png", "screens/cert2.png"],
    zorImages: [
      "screens/zor1.png",
      "screens/zor2.png",
      "screens/zor3.png",
      "screens/zor4.png",
      "screens/zor5.png",
      "screens/zor6.png",
    ],
    memImages: ["screens/mem1.png", "screens/mem2.png"],
    qrImages: ["screens/qr1.png", "screens/qr2.png", "screens/qr3.png"],
  };

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.wave}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="xMidYMax slice"
          >
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,128L80,138.7C160,149,320,171,480,160C640,149,800,107,960,101.3C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.logoHeader}>
          <img src="me3.jpg" alt="Avinash"></img>
          <div>AVINASH GANGA</div>
        </div>
        <div className={styles.tagline}>
          <div>web developer portfolio</div>
        </div>

        <div className={styles.lessonLearned}>
          <div className={styles.listImage}>
            <img src="/lessons.png" alt="logo"></img>
          </div>

          <div className={styles.listItems}>
            <h4>courses completed and key skills acquired</h4>
            <ul>
              <li>
                <b>Udemy Certification - Web Development Bootcamp</b>, 47 hour
                course, Jun 2018 to Nov 2019
              </li>
              <li>
                <b>Udemy Certification - Modern React Bootcamp</b>
                (Hooks,Context,NextJS,Router), 39 hour course, Dec 2019 to Jan
                2021
              </li>
              <li>
                <b>Key competency</b>: MERN Stack (Mongo, Express, React, Node )
              </li>
              <li>
                <b>Skills acquired</b>: HTML5, CSS3, Javascript (Modern syntax
                ES6, ES7)
              </li>
              <li>Flexbox, grid, responsive design</li>
              <li>Modern CSS - SVG, Neomorphism, Glassmorphism</li>
              <li>
                Asynchronous JavaScript - Promises, async/await, REST, CRUD, Web
                API
              </li>
              <li>Bootstrap, Material UI</li>
              <li>React Hooks, Context</li>
              <li>
                <b>8 Projects</b> including this portfolio developed and
                deployed in 2021 including private and work, details below
              </li>
            </ul>
          </div>
        </div>
        <ImageModal images={imageList.coursesImages} title="certifications" />

        <div className={styles.tagline}>
          <div>web applications developed and deployed</div>
        </div>

        <div className={styles.gridParent}>
          <div className={styles.gridChild}>
            <CardWave
              cardTitle="Dad Jokes"
              imageSrc="./joke.png"
              waveColor="#ffee00"
              list={list.dadjokes}
              link="https://dad-jokes3333.herokuapp.com/"
              github="https://github.com/TwistZA/dad-jokes3333"
            />
          </div>
          <div className={styles.gridChild}>
            <CardWave
              cardTitle="recipes"
              imageSrc="./recipe.png"
              waveColor="#96530b"
              list={list.recipes}
              link="https://gold-medal-meals.vercel.app/"
              github="https://github.com/TwistZA/gold-medal-meals"
            />
          </div>
          <div className={styles.gridChild}>
            <CardWave
              cardTitle="ice dreams"
              imageSrc="./product3.png"
              waveColor="#5000ca"
              list={list.icedreams}
              link="https://ice-dreams.vercel.app/"
              github="https://github.com/TwistZA/ice-dreams"
            />
          </div>
          <div className={styles.gridChild}>
            <CardWave
              cardTitle="cocktails"
              imageSrc="./Cocktail.png"
              waveColor="#ff7700"
              list={list.cocktails}
              link="https://cocktail-recipes-chi.vercel.app/"
              github="https://github.com/TwistZA/cocktail-recipes"
            />
          </div>
          <div className={styles.gridChild}>
            <CardWave
              cardTitle="trivia game"
              imageSrc="./quiz.png"
              waveColor="#d10606"
              list={list.trivia}
              link="https://trivia-royale.herokuapp.com/"
              github="https://github.com/TwistZA/trivia-game"
            />
          </div>
        </div>

        <div className={styles.tagline}>
          <h4>work specific projects</h4>
        </div>
        <div className={styles.grid2Parent}>
          <div className={styles.grid2Child}>
            <CardLogo
              cardTitle="zor calc"
              imageLogo="./goldstar2.png"
              imageCover="./recs4.jpg"
              waveColor="#50e632"
              bodyText={list.zorcalc}
            />
            <ImageModal
              images={imageList.zorImages}
              title="sample zor output"
            />
          </div>

          <div className={styles.grid2Child}>
            <CardLogo
              cardTitle="memory analyser"
              imageLogo="./goldstar.png"
              imageCover="./graph.jpg"
              waveColor="#011091"
              bodyText={list.memory}
            />
            <ImageModal
              images={imageList.memImages}
              title="sample memory output"
            />
          </div>

          <div className={styles.grid2Child}>
            <CardLogo
              cardTitle="qr code analyser"
              imageLogo="./new.png"
              imageCover="./qrcode4.jpg"
              waveColor="#63c5f2"
              bodyText={list.qrcode}
            />
            <ImageModal
              images={imageList.qrImages}
              title="sample qrcode output"
            />
          </div>
        </div>
      </div>

      <h1>Share</h1>
      <SocialMediaShare />

      <div className={styles.footerBlock}>
        <h3>2021 Web Dev Project, by Avinash Ganga</h3>
        <p>Last Updated November 2021</p>
      </div>
      <div className={styles.footer}>
        <div className={styles.wave}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,128L80,138.7C160,149,320,171,480,160C640,149,800,107,960,101.3C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className={styles.wave}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#5000ca"
              fillOpacity="0.1"
              d="M0,32L48,37.3C96,43,192,53,288,101.3C384,149,480,235,576,240C672,245,768,171,864,154.7C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className={styles.wave}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#5000ca"
              fillOpacity="0.2"
              d="M0,32L60,58.7C120,85,240,139,360,154.7C480,171,600,149,720,144C840,139,960,149,1080,128C1200,107,1320,53,1380,26.7L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
