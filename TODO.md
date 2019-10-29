# Refactoring/image-import

**Código Atual:**

src/components/MenuCard.tsx

```js
import feijoadaImage from "./feijoada-sm.png";

<CardMedia
  className={classes.cardMedia}
  image={feijoadaImage}
  component="img"
  title="feijoada"
/>;
```

**Problema:** No código acima estou importando uma imagem que será exibida numa lista do components. Cada ítem dessa lista deve ter sua imagem única. Da forma atual do código, é impraticável importar todas as fotos necessárias, pois para isso devemos importar uma por uma. A solução é poder importar todas as fotos e guarda-las num array para utilizarmos no momento da renderização da lista de componentes.

**Pesquisei no Google:** _"how to import a list of images in react js"_

**Encontrei:**

- https://stackoverflow.com/questions/53762640/how-to-import-all-images-from-a-folder-in-reactjs
- https://webpack.js.org/guides/dependency-management/#require-context
