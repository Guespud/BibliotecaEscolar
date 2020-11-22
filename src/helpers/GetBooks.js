export const getBooks = async (book) => {
    const url = `https://api.itbook.store/1.0/search/${encodeURI(book)}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
  
    const books = data.map((book) => {
      return {
        title: book.title,
        subtitle: book.subtitle,
        isbn13: book.isbn13,
        price: book.price,
        image: book.image,
        url: book.url,
      };
    });

    return books;
  };