export const formatBookResponse = (booksData) => {
  let books = [];
  if (booksData.items) {
    for (let item of booksData.items) {
      let book = {
        title: item.volumeInfo?.title,
        isbn: item.volumeInfo.industryIdentifiers
          ? item.volumeInfo.industryIdentifiers[0].identifier
          : "N/A",
        image: item.volumeInfo?.imageLinks?.thumbnail,
        author: item.volumeInfo?.authors
          ? item.volumeInfo.authors[0]
          : "Unknown",
        rating: item.volumeInfo?.averageRating || 5, // default rating is 5 if undefined
        publishedYear: item.volumeInfo?.publishedDate
          ? item.volumeInfo.publishedDate.slice(0, 4)
          : "N/A", // get the year only
      };
      books.push(book);
    }
  }

  return books;
};
