import React from 'react'

const Testimonial = () => {
  return (
    <div>
       <section className="container mx-auto px-4 py-8 md:mt-10 mt-5">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
      <p className="text-gray-600 mb-8">What our customers are saying...</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="bg-slate-100 p-4 rounded-lg shadow-md mt-2">
          <p className="text-gray-600 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat, sapien vitae congue fringilla, sem eros consequat tellus, quis volutpat leo enim at lorem.
          </p>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-2" src="avatar.jpg" alt="Customer avatar" />
            <div>
              <p className="text-base font-medium">Lance Jarvis</p>
              <p className="text-gray-600 text-sm">fin</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 p-4 rounded-lg shadow-md mt-2">
          <p className="text-gray-600 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat, sapien vitae congue fringilla, sem eros consequat tellus, quis volutpat leo enim at lorem.
          </p>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-2" src="avatar.jpg" alt="Customer avatar" />
            <div>
              <p className="text-base font-medium">Ericka Lynda</p>
              <p className="text-gray-600 text-sm">fin</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 p-4 rounded-lg shadow-md mt-2 ">
          <p className="text-gray-600 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat, sapien vitae congue fringilla, sem eros consequat tellus, quis volutpat leo enim at lorem.
          </p>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-2" src="avatar.jména" alt="Customer avatar" />
            <div>
              <p className="text-base font-medium">Neil Wilford</p>
              <p className="text-gray-600 text-sm">fin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Testimonial
