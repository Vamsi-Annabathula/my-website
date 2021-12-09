import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "About Me",
    //Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        I am Full stack developer
        {/* Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly. */}
      </>
    ),
  },
  {
    title: "My Projects",
    //Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Please visit my Github.
        <a href="https://github.com/vamsi-annabathula"> Click here.</a>
        {/* Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory. */}
      </>
    ),
  },
  {
    title: "My Resume",
    //Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        View/Download.
        <a href="/resume" target="_blank">
          {" "}
          Resume
        </a>
        {/* Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer. */}
      </>
    ),
  },
  {
    title: "My Content",
    //Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Please Visit My Blog
        <a href="/blog"> Click here.</a>
        <br></br>
        My youtube Channel
        <a href="https://www.youtube.com/channel/UCcCbCNG3yKxgtK7XjRhlIww">
          {" "}
          Click here.
        </a>
        {/* Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer. */}
      </>
    ),
  },
];

function Feature({ title, description }) {
  //Svg,
  return (
    <div className={clsx("col col--3")}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div> */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
