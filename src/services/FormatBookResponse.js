export const formatBookResponse = (booksData) => {
  let books = [];
  for (let item of booksData.items) {
    let book = {
      title: item.volumeInfo.title,
      isbn: item.volumeInfo.industryIdentifiers[0].identifier,
      image: item.volumeInfo.imageLinks?.thumbnail,
      author: item.volumeInfo?.authors[0],
      rating: item.volumeInfo?.averageRating || 5, // default rating is 5 if undefined
      publishedDate: item.volumeInfo.publishedDate.slice(0, 4), // get the year only
    };
    books.push(book);
  }
  return books;
};
