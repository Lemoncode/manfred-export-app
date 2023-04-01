import React from 'react';
import { MfButton } from '@/common/forms';

interface Props {
  goToManfredJsonInput: () => void;
}

export const Home: React.FunctionComponent<Props> = (props: Props) => {
  const { goToManfredJsonInput } = props;

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>Icon1</li>
            <li>Icon2</li>
            <li>Icon3</li>
          </ul>
        </nav>
      </header>
      <section>
        <p>
          Este es un proyecto Open Source realizado por los alumnos del{' '}
          <a href="www.google.es">Máster Frontend Lemoncode</a>
        </p>
        <article>
          <h1>Exporta tu perfil JSON de Manfred a Word</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </article>
        <article>
          <video width="200" height="200" controls>
            <source src="https://www.youtube.com/watch?v=29Rr7at3sJY" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <span>Cómo extraer tu perfil de Manfred en formato JSON</span>
        </article>
      </section>
      <MfButton onClick={goToManfredJsonInput}>Exportar CV</MfButton>
      <footer>
        <span>
          <small>Copyright © 2023</small>
        </span>
        <span>
          <small>
            Creado por los alumnos del <a href="www.google.es">Máster Frontend Lemoncode</a>
          </small>
        </span>
      </footer>
    </>
  );
};
