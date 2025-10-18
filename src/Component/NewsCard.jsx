import React from "react";
import { FaStar, FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    author,
    title,
    image_url,
    details,
    rating,
    total_view,
    published_date,
  } = news;

  return (
    <div className=" rounded-xl p-4 shadow-sm mb-6 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt="Author"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-800">{author?.name}</p>
            <p className="text-sm text-gray-500">{published_date}</p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500 text-lg">
          <FaShareAlt className="cursor-pointer hover:text-blue-500" />
          <FaRegBookmark className="cursor-pointer hover:text-blue-500" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-snug">
        {title}
      </h2>

      {/* Image */}
      <img
        src={image_url}
        alt="News"
        className="w-full rounded-lg mb-3 object-cover"
      />

      {/* Details */}
      <p className="text-gray-600 text-sm md:text-base">
        {details?.length > 200 ? details.slice(0, 200) + "..." : details}
        {details?.length > 200 && (
          <span className="text-orange-500 font-semibold cursor-pointer ml-1">
            Read More
          </span>
        )}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center border-t mt-4 pt-3 text-gray-600">
        <div className="flex items-center gap-2 text-orange-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-700 ml-1 font-medium">
            {rating?.number}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
