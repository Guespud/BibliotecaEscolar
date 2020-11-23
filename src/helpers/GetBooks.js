const GetBooks = async (search = 'sql') => {
    // const url = `https://api.itbook.store/1.0/search/${encodeURI(search)}`;
    const resp = await fetch(`https://api.itbook.store/1.0/search/${encodeURI(search)}`);
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

  export default GetBooks;