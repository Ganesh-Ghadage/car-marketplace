import React from 'react'
import { Link } from 'react-router-dom'

function SellSection() {
  return (
    <div className='mt-8'>
        <section
        className="relative bg-[url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat"
        >
        <div
            className="absolute inset-0  bg-white/40 from-white/95 to-white/25"
        ></div>

        <div
            className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
            <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
                Let us find
                <strong className="block font-extrabold text-rose-700"> Best Price </strong>
                for your Car.
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                We offer best car sell services without any headache.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
                <Link
                to='/profile'
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                Sell Your Car
                </Link>

                <Link
                to="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                Learn More
                </Link>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default SellSection