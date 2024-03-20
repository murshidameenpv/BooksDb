const BooksReadSummary = () => {
  return (
    <div className="bg-[#eeee] p-3">
      <h3 className="m-0 font-semibold">Books You Read</h3>
      <div className="flex justify-between">
        <div>
          <span>📚</span>
          <span>2 Books</span>
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
