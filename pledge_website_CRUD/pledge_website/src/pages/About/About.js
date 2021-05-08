import React from "react";
import about_pledge from "../../images/pledgy_2.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <h1>our pledge</h1>

      <img src={about_pledge} alt="pledge-icon" />
      <p>
        The Pledge is a movement by individuals committed to making a change in
        their life and address important issues. The Pledge was brought to life
        through a society of philanthropists around the world about there is a
        need for a standard of generosity The Pledge follows one simple idea: a
        call to anyone to publically commit to their wealth to philanthropy.
        This example is already set by millions of people at all income levels
        who donate generously to make their community better. The Pledge is
        pictured as cross generaional effort with the goal of shifiting the
        ideals of philanthropy among all individuals and inspire people to give
        more and give in intelligent manners. Those who join The Pledge often
        write a paragraph explainging their decision to engage deeply in
        philanthropy and describe what motivates them. Common reasons include
        poverty alleviation, refugee aid, disaster relief, global health,
        education, women and girls’ empowerment, medical research, criminal
        justice reform, environmental sustainability, and arts and culture. This
        movement orignally began in the United States but expanded globally as
        philanthropists around the world took interest. In May 2021, the pledge
        went global with supporters from Australia, Germany, India, Malaysia,
        Russia, South Africa, Ukraine and the United Kingdom. Today, the Pledge
        continues to grow and inspire new generations. Joining the The Pledge is
        more than a one-time event. It means becoming part of an energized
        community of some of the world’s most engaged philanthropists to discuss
        challenges, successes, and failures, and to share ideas about smarter
        giving. Supporters are united by a shared commitment to learning and
        giving, and The Pledge team provides opportunities for supporters to
        gather throughout the year to learn from experts how to best leverage
        their philanthropy to address some of the world’s biggest challenges.
      </p>
    </section>
  );
};

export default About;
