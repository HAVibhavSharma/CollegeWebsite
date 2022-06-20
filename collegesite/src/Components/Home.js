import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.outercontainer}>
      <h1 className={styles.heading}>
        WELCOME TO BANGALORE INSTITUTE OF TECHNOLOGY
      </h1>
      <p className={styles.content}>
        Bangalore Institute of Technology (BIT) was started in the year 1979
        with the objective of providing quality education in the ﬁeld of
        Technology and thereby serving the society. It has reached enviable
        level of excellence in technical education. This was achieved due to the
        unconditional support of Rajya Vokkaligara Sangha, committed staff and
        students. The environment of BIT motivates the student to quench their
        thirst for knowledge. The college thrives to achieve the all-round
        development of the students.
      </p>
      <p className={styles.content}>
        BIT has always been at the forefront of modern technology and has the
        distinction of being the ﬁrst College to introduce a full-ﬂedged degree
        in Computer Science and Engineering in Karnataka. The institute has
        visualized the areas of future growth and incorporated various courses
        over the years. At present BIT has 10 undergraduate, 10 post graduate
        and 13 research centers. BIT has an annual intake of 1300 students.
        There are a number of centers carrying out inter-disciplinary research
        and many collaborative programs exist between the college and other
        professional institutions, like IISc, NAL. The Chemistry department has
        been recognized as one of the latest research centers in Karnataka. BIT
        also has the acclaim of being the Study center for IGNOU programmes.
      </p>
      <p className={styles.content}>
        BIT is proud to say that it has 289 faculty members with excellent
        knowledge and teaching caliber. 83 faculty members have PhD degree and
        71 are pursuing PhD. Sixty percent of faculty members have served BIT
        for more than twenty years. The Institution has 294 efficient and
        committed team of supporting staff.
      </p>
    </div>
  );
};

export default Home;
