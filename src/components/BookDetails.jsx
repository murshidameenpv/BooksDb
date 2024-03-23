/* eslint-disable react/prop-types */

const BookDetails = ({ selectedId, handleBack }) => {
  return (
    <div>
      <div>
        <button onClick={handleBack} className="px-2 py-2 text-xl">
          🔙
        </button>
      </div>
      {selectedId}
    </div>
  );
};

export default BookDetails;
