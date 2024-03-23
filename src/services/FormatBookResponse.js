const noImage = "../../public/noimg.webp"

export const formatBookResponse = (booksData) => {
  let books = [];
  console.log(booksData);
  if (booksData.items) {
    for (let item of booksData.items) {
      let book = prepareBookObject(item);
      books.push(book);
    }
  }

  return books;
};

export const prepareBookObject = (item) => {
  let book = {
    id: item.id,
    title: item.volumeInfo?.title,
    subTitle: item.volumeInfo?.subtitle,
    isbn: item.volumeInfo.industryIdentifiers
      ? item.volumeInfo.industryIdentifiers[0].identifier
      : "N/A",
    image: item.volumeInfo?.imageLinks?.thumbnail || noImage,
    author: item.volumeInfo?.authors ? item.volumeInfo.authors[0] : "Unknown",
    rating: item.volumeInfo?.averageRating || 5, // default rating is 5 if undefined
    publishedYear: item.volumeInfo?.publishedDate
      ? item.volumeInfo.publishedDate.slice(0, 4)
      : "N/A", // get the year only
  };
  return book;
};
