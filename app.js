const books = [
  {
    author: "Люсі Фолі",
    name: "Список запрошених",
    price: 70,
  },
  {
    author: "Сюзанна Кларк",
    name: "Джонатан Стрейндж і м-р Норрелл",
  },
  {
    name: "Дизайн. Книга для недизайнерів.",
    price: 70,
  },
  {
    author: "Алан Мур",
    name: "Неономікон",
    price: 70,
  },
  {
    author: "Террі Пратчетт",
    name: "Рухомі картинки",
    price: 40,
  },
  {
    author: "Анґус Гайленд",
    name: "Коти в мистецтві",
  },
];
const root = document.querySelector("#root");

function addBooksList(list, target) {
  const ul = document.createElement("ul");

  list.forEach(({ author, name, price }, index) => {
    try {
      if (author && name && price) {
        const li = document.createElement("li");
        li.innerText = `Автор: ${author}. Назва: "${name}". Ціна: ${price} грн`;
        ul.append(li);
      } else {
        throw new Error(
          `Incomplete data! Missing: ${
            author ? "" : "'author'"}${
            name ? "" : "'name'"}${
            price ? "" : "'price'"} in index ${index} of the list`
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  });

  target.append(ul);
}

addBooksList(books, root);
