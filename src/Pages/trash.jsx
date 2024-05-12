{/* <div className='mt-3'>
<section className="p-6 w-[35rem]  bg-white rounded-md shadow-md flex-1 md:min-h-[350px] ">
<h2 className="text-lg font-bold text-gray-700 capitalize ">
  Apply For This Job
</h2>

<form onSubmit={handleFormSubmit}>
  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
    <div>
      <label className="text-gray-700 " htmlFor="price">
        Price
      </label>
      <input
        id="price"
        type="text"
        name="price"
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
      />
    </div>

    <div>
      <label className="text-gray-700 " htmlFor="emailAddress">
        Email Address
      </label>
      <input
        id="emailAddress"
        type="email"
        name="email"
        disabled
        defaultValue={user?.email}
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
      />
    </div>

    <div>
      <label className="text-gray-700 " htmlFor="comment">
        Comment
      </label>
      <input
        id="comment"
        name="comment"
        type="text"
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
      />
    </div>
    <div className="flex flex-col gap-2 ">
      <label className="text-gray-700">Deadline</label>

      <DatePicker className="border p-2 rounded-md block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" selected={startDate} onChange={(date) => setStartDate(date)} />

    </div>
  </div>

  <div className="flex justify-end mt-6">
    <button
      type="submit"
      className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
    >
      Apply Now
    </button>
  </div>
</form>
</section>
</div> */}