# Manfred export apps

Proyecto [TFM del Máster Front End Lemoncode](https://lemoncode.net/master-frontend#inicio-banner).

Este proyecto tiene como objetivo exportar el formato Manfred CV a varios formatos. Cada formato se publicará en librerias independientes que esta dentro de la carpeta `packages` de este repositorio.

# Ejecutar proyecto

Este proyecto es un monorepo que esta usando [turborepo](https://turbo.build/repo) para gestionarlo. Para ejecutarlo, se necesitará clonar el repositorio y ejecutar el comando desde la ruta raiz:

```bash
npm install

```

Y ejecutar el siguiente comando para ejecutar todos los proyectos necesarios en paralelo:

```bash
npm start

```

Si necesitas instalar cualquier libreria en alguno de los proyectos (dentro de `apps` o `packages`) debes hacerlo desde la ruta raiz y usando el flag [workspace](https://docs.npmjs.com/cli/v7/using-npm/workspaces) de npm. Por ejemplo:

```bash
npm install --workspace=@lemoncode/manfred2word typescript --save-dev

```

> npm install --workspace=<package.json name>

# ¿Te animas a cursar nuestro Máster?

Si tienes ganas de ponerte al día en Front End, te ofrecemos un máster online en dos modalidades:

- **De convocatoria:** con clases en vivo y con interacción alumno profesor.
- **Continuo:** para ir a tu ritmo, en el que cuentas con el acompañamiento de un mentor a lo largo del mismo.

Más información:

- [Máster Front End Online Lemoncode](http://lemoncode.net/master-frontend)
- [Opiniones de antiguos alumnos](https://lemoncode.net/lemoncode-blog/2016/12/24/master-lemoncode-opiniones-de-los-alumnos)
- [Cómo funciona la molidad de convocatoria](https://lemoncode.net/lemoncode-blog/2017/2/6/master-front-end-lemon-que-tiene-esto-de-especial).
- [Cómo funciona la modalidad continua](https://lemoncode.net/lemoncode-blog/2020/10/1/master-front-end-continuo-lemoncode).

Si tienes cualquier dudas puedes escribirnos a: info@lemoncode.net
