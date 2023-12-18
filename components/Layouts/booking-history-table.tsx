import React from "react";

const BookingHistoryTable = ({ data }: { data: any }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full overflow-hidden rounded-lg border-2 border-gray-300 shadow-md">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="px-4 py-3 text-left sm:px-6 md:px-8">Title</th>
            <th className="px-4 py-3 text-left sm:px-6 md:px-8">Type</th>
            <th className="px-4 py-3 text-left sm:px-6 md:px-8">Price</th>
            <th className="px-4 py-3 text-left sm:px-6 md:px-8">Bookings</th>
            <th className="px-4 py-3 text-left sm:px-6 md:px-8">Date</th>
            <th className="px-4 py-3 text-left sm:px-6 md:px-8">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any) => (
            <tr
              key={item.id}
              className="bg-zinc-900 transition duration-300 hover:bg-zinc-800"
            >
              <td className="whitespace-nowrap px-4 py-4 sm:px-6 md:px-8">
                {item.title}
              </td>
              <td className="whitespace-nowrap px-4 py-4 sm:px-6 md:px-8">
                {item.type}
              </td>
              <td className="whitespace-nowrap px-4 py-4 sm:px-6 md:px-8">
                {item.price}
              </td>
              <td className="whitespace-nowrap px-4 py-4 sm:px-6 md:px-8">
                {item.bookings}
              </td>
              <td className="whitespace-nowrap px-4 py-4 sm:px-6 md:px-8">
                {item.date}
              </td>
              <td className="whitespace-nowrap px-4 py-4 sm:px-6 md:px-8">
                <button className="text-blue-500 hover:underline focus:outline-none">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingHistoryTable;
