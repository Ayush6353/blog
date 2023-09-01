import { useNavigate } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import styles from "./index.module.css";
import Polygon from "../../../assets/images/background/polygon-35.png"
import Background1 from "../../../assets/images/background/background-1.png";
import Background2 from "../../../assets/images/background/background-4.png";

const SharedLayout = ({ children, title, className = "" }) => {
  const isDMCA = title === "DMCA";
  const isPrivacy = title === "privacy";
  const isResources = title === "resources";
  const isTerms = title === "terms&service";
  const isHome = title === "home";
  const isBlog = title === "Blog";
  const isAbout = title === "about";
  const router = useNavigate();
  return (
    <>
    <div className="min-h-screen relative flex flex-col justify-between overflow-hidden bg-[#0E0125]">
      <Header />
      {isHome && (
        <>
          <div className={styles.directorSectionBg} >
            <img className='w-[875px] h-[800px]' src={Polygon} alt='bg' />
          </div>
          <div className={styles.discoverSectionBg} >
            <img className="w-[875px] h-[800px] blur-md" src={Background1} alt='bg' />
          </div>
          <div className={styles.carouselRightBg} >
            <img className="w-[875px] h-[800px]" src={Background2} alt='bg' />
          </div>
          <div className={styles.carouselLeftBg} >
            <img className="w-[875px] h-[1000px] blur-md" src={Polygon} alt='bg' />
          </div>
          <div className={`${styles.bottomRight} h-[550px] w-[250px]`}>
            <img src={Polygon} alt='bg' />
          </div>
          <div className='absolute left-[-100px] bottom-0 h-[650px] w-[708px]'>
            <img src={Polygon} alt='bg' />
          </div>
        </>
      )}
      {isDMCA && (
        <>
          <div className={styles.middleRightCorner}>
            <img src={Polygon} />
          </div>
          <div className={styles.middleLeftCorner}>
            <img src={Polygon} />
          </div>
        </>
      )}
      {router.pathname === "/faq/questions/creator" && (
        <>
          <div className={`${styles.bottomRight} h-[152px] `}>
            <img src={Polygon} />
          </div>
        </>
      )}
      {isResources && (
        <div className={`${styles.resourceLeftBottomCorner} w-[400px]`}>
          <img src={Polygon} />
        </div>
      )}
      {isTerms && (
        <>
          <div className={`${styles.bottomLeftCorner}`}>
            <img src={Polygon} />
          </div>
          <div className={styles.middleRightCorner}>
            <img src={Polygon} />
          </div>
          <div className={`${styles.bottomRightCorner}`}>
            <img src={Polygon} />
          </div>
        </>
      )}
      {isBlog && (
        <div className={styles.bottomRightCorner}>
          <img src={Polygon} />
        </div>
      )}
      {isPrivacy && (
        <div className={styles.bottomRightCorner}>
          <img src={Polygon} />
        </div>
      )}
      {isAbout && (
        <>
          <div className='absolute left-0 bottom-[100px]'>
            <img className="w-[875px] h-[1000px] blur-md" src={Polygon} alt='bg' />
          </div>
          <div className={`absolute bottom-0 right-0`}>
            <img className=" h-[600px] w-[600px]" src={Polygon} />
          </div>
        </>
      )}
      <main className={`${className} mt-20`}>{children}</main>
      <Footer />
    </div>
    </>
  );
};

export default SharedLayout;
