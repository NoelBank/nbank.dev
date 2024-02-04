/* This file is an example. Delete it at will. */

import Layout from '../components/Layout';

export default function Homepage({}) {
  return (
    <Layout
      title='Noel Bank - Application Developer aus Hannover'
      description='Persönliche Webseite von Noel Bank Application Devloper aus Hannover'
    >
      <div class='content content-left'>
        <div class='hero'>
          <img
            src='https://gravatar.com/userimage/147666338/1a3341f02dbe89e49db1fa067d2c4e92.jpeg?size=256'
            class='avatar'
            alt='Profilbild von Noel Bank'
          />
          <h2 class='greeting'>
            Moin <div class='wave'>👋🏼</div>
          </h2>
        </div>
        <main class='main'>
          <h1>Application Developer aus Leidenschaft.</h1>

          <div class='description'>
            <p>
              Seit dem Beginn meiner Entwicklerkarriere im Jahr 2016 habe ich
              mich leidenschaftlich dem Erschaffen digitaler Wunderwelten
              verschrieben. Meine Reise führte mich durch die facettenreiche
              Welt moderner Webtechnologien, wobei ich mich insbesondere auf
              NextJS, React, NodeJS und TypeScript spezialisiert habe. Dabei
              steht nicht nur die reine Funktionalität im Vordergrund, sondern
              vor allem die Zugänglichkeit des Webs für jeden – ein Aspekt, der
              in der heutigen Zeit unverzichtbar ist.
            </p>
            <p>
              Mein Zuhause habe ich seit 2018 bei{' '}
              <a href='https://neoskop.de'>Neoskop</a> gefunden, einer Agentur,
              die mein Streben nach Innovation und kreativer Exzellenz teilt.
              Hier lebe und atme ich das Agenturleben, eingebettet in ein
              Umfeld, das meine Leidenschaft für Frontend-Entwicklung und meinen
              Hang zu allem, was gerade en vogue ist, fördert.
            </p>
          </div>
        </main>

        <div class='links'>
          <div class='link'>
            <a href='https://github.com/NoelBank'>
              <svg
                stroke='currentColor'
                fill='currentColor'
                stroke-width='0'
                role='img'
                viewBox='0 0 24 24'
                class='SocialMediaBadge_icon__nrOLp'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Github Icon</title>
                <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'></path>
              </svg>
              Github
            </a>
          </div>
        </div>
      </div>

      <div class='content'></div>
    </Layout>
  );
}
