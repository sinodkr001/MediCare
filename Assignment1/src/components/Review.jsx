import React, { useState, useEffect } from 'react';


const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchReviews(currentPage);
  }, [currentPage]);

  const fetchReviews = async (page) => {
    try {
      const response = await fetch(`https://admin.tomedes.com/api/v1/get-reviews?page=${page}`);
      const data = await response.json();
      setReviews(data.data);
      setTotalPages(data.meta.last_page);
    } catch (error) {
      console.error('Error fetching the reviews:', error);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-900">Reviews</h1>
      <ul className='grid lg:grid-cols-2 gap-6'>
        {reviews.map((review) => (
          <li key={review.ID} className="mb-4 p-4 border rounded-lg bg-white shadow-md">
            <p className="text-lg font-semibold mb-4">Name:-{review.Name}</p>
            <p className="text-gray-500 mb-4">Company:-{review.Company}</p>
            <p className="mt-2 mb-4">Review:-{review.Reviews}</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg"><a href={review.link} target="_blank" rel="noopener noreferrer" className="text-white-500 ">
              View Review
            </a></button>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-4">
        <button onClick={handlePrevPage} disabled={currentPage === 1} className="bg-gray-300 p-2 rounded">
          Previous
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="bg-gray-300 p-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default Review;