interface User {
  avatar: string;
  name: string;
  job: string;
  description: string;
}

export const userList: User[] = [
  {
    avatar: './assets/teresa.jpg',
    name: 'Teresa Milanés',
    job: 'Frontend Developer',
    description:
      'Soy  MªTeresa,  desarrolladora  de  aplicaciones  web  enfocada  en el  Frontend  y diseño UI- UX.Combino habilidades en diseño y comprensión de la experiencia de usuario para crear interfaces atractivas y funcionales',
  },
  {
    avatar: './assets/flavio.png',
    name: 'Flavio Forte',
    job: 'Frontend Developer',
    description:
      'Soy un desarrollador Front End, hace dos años arranque mi carrera cursando un Bootcamp de fundamentos, y me especialice cursando el Máster Front End Lemoncode, en la actualidad me encuentro colaborando en proyectos tales como ManfredExport y complementado mis capacidades cursando el Bootcamp Backend Lemoncode.',
  },
  {
    avatar: './assets/juan-berrocal.png',
    name: 'Juan Berrocal',
    job: 'Frontend Developer',
    description:
      'Graduado en informática de sistemas, gestioné la empresa familiar, fui freelance y desde hace tiempo trabajo en logística para una multinacional de alimentación. Las nuevas tecnologías brindan hoy unas posibilidades impensables hace unos años y estoy reciclándome para incorporarme a este fascinante mundo.',
  },
];
