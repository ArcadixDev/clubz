import BookingHistoryTable from '@/components/Layouts/booking-history-table'
import Image from 'next/image'
import React from 'react'
import { FaTicketAlt, FaUserFriends } from 'react-icons/fa'
import { FaLocationArrow } from 'react-icons/fa6'
import { IoLocate } from 'react-icons/io5'

type Props = {}

const Bookinsgpage = (props: Props) => {
  const bookingData = [
    {
      id: 1,
      title: "Club Reservation A",
      type: "VIP",
      price: "$100",
      bookings: 20,
      date: "2023-01-15",
    },
    // Add more dummy data as needed
  ];
  return (
    <main className="flex h-full w-full flex-col gap-5 p-5">
      <h1 className="text-4xl font-bold">My Bookings</h1>
      {/* Current Booking section */}
      <section className="flex flex-col gap-5">
        <h1 className="text-xl font-semibold">Current Booking</h1>
        {/* Club Details */}
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <Image src="/assets/club1.jpg" alt="" width={200} height={100} />
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-5">
              <span className="text-lg font-semibold">Title:</span>
              <span className="text-md font-semibold text-gray-400">
                ABC Club
              </span>
            </div>
            <div className="flex flex-row gap-5">
              <span className="text-lg font-semibold">Description:</span>
              <span className="text-md font-semibold text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti deleniti iusto possimus vel mollitia dicta!
              </span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <FaLocationArrow clssName="w-10 h-10"/>
              <span className="text-xl font-semibold text-gray-200">
                15/b, Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </div>
        </div>
        {/* Booking related details and facilities */}
        <div className="flex flex-col sm:flex-row gap-5">
          {/* Booking Details */}
          <div className="flex w-full sm:w-1/2 flex-col gap-5 px-5">
            <h2 className="text-xl font-semibold underline underline-offset-8">
              Booking Details
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center gap-1">
                  <FaUserFriends />
                  <span>Total Reservation</span>
                </div>
                <span>2-5 people</span>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center gap-1">
                  <FaTicketAlt />
                  <span>Booked On</span>
                </div>
                <span>25 th december 2023</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="">Status</span>
                <span className="cursor-not-allowed rounded-xl border-2 border-green-500 px-3 py-1 text-green-500">
                  Confirmed
                </span>
              </div>
            </div>
          </div>
          <div className="h-full w-px bg-white"></div>
          {/* Facilities */}
          <div className="flex w-full sm:w-1/2 flex-col gap-5 px-5">
            <h2 className="text-xl font-semibold underline underline-offset-8">
              Facilities
            </h2>
            <div className="flex flex-row gap-3 overflow-y-hidden overflow-x-scroll">
              <Image
                src="/assets/club1.jpg"
                alt=""
                width={150}
                height={75}
                className="cursor-pointer rounded-lg transition-all duration-300 hover:scale-105"
              />
              <Image
                src="/assets/club2.jpg"
                alt=""
                width={150}
                height={75}
                className="cursor-pointer rounded-lg transition-all duration-300 hover:scale-105"
              />
              <Image
                src="/assets/club3.jpg"
                alt=""
                width={150}
                height={75}
                className="cursor-pointer rounded-lg transition-all duration-300 hover:scale-105"
              />
              <Image
                src="/assets/club4.jpg"
                alt=""
                width={150}
                height={75}
                className="cursor-pointer rounded-lg transition-all duration-300 hover:scale-105"
              />
              <Image
                src="/assets/club5.jpg"
                alt=""
                width={150}
                height={75}
                className="cursor-pointer rounded-lg transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
        {/* More photos of the club */}
        <div></div>
      </section>
      {/* Booking history section */}
      <section>
        <div className="container mx-auto">
          <h1 className="mb-8 text-2xl font-semibold">
            Club Reservation History
          </h1>
          <BookingHistoryTable data={bookingData} />
        </div>
      </section>
    </main>
  );
}

export default Bookinsgpage