import Head from "next/head";
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I’m a self-motivated and experienced front-end and WordPress developer.</p>
        <p>I have several years of experience in HTML(5), CSS(3), Sass, jQuery, Javascript, Photoshop, GitHub. I'm renowned for fast HTML and CSS coding, accuracy and attention to detail as well as awesome interpersonal skills and relaxed temperament.</p>
        <p>Detail-oriented WordPress Developer with extensive experience with WordPress themes, plugins and widgets. Well versed in many other programming languages. Deliver well-made projects on time.</p>
        <p>I have worked as a part of a team or independently and have managed contractors in their projects. My goal is to plan, build, test, deploy and maintain websites and applications for desktop and mobile devices. I can provide you with web, graphics, interactive and programming to develop optimum and user-friendly web solutions.</p>        
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
