import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Enjoy a Seamless Experience",
    description: (
      <>
        Sketch offers regular updates and new features, ensuring a smooth and
        up-to-date cheating experience in the game. Stay ahead with the latest
        tools and dominate the battlefield effortlessly.
      </>
    ),
  },
  {
    title: "Tailor Your Gameplay",
    description: (
      <>
        With a user-friendly interface and customizable settings, Sketch allows
        you to personalize your cheating experience to suit your playstyle. Make
        the game more enjoyable and conquer your opponents with ease.
      </>
    ),
  },
  {
    title: "Cheat with Confidence",
    description: (
      <>
        Choose Sketch for a reliable and safe cheating experience. Our dedicated
        team stays ahead of anti-cheat measures, providing you with the best and
        most advanced features in the world of Krunker cheats.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
