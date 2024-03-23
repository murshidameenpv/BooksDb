/* eslint-disable react/prop-types */
const BooksReadSummary = ({ booksReadData }) => {
  return (
    <div className="bg-[#eeee] p-3">
      <h3 className="m-0 font-semibold">Books You Read</h3>
      <div className="flex justify-between">
        <div>
          <span>📚</span>
          <span>{booksReadData.length} Books</span>
        </div>
        <div>
          <span>⭐</span>
          <span>4.6</span>
        </div>
        <div>
          <span>💥</span>
          <span>4.6</span>
        </div>
      </div>
    </div>
  );
};

export default BooksReadSummary;
