const Subscription = () => (
  <section id="contact">
    <div className="flex flex-col  gap-12 mx-auto px-4 text-center py-40 bg-gray-100 2xl:w-10/12">
      <div className="flex flex-col gap-7">
        <h2 className="font-bold uppercase text-lg md:text-2xl">
          Do you want to add your business listing with us?
        </h2>
        <p className="text-gray-600 font-medium">
          Listrace offers you to list your business with us and we are very much
          able to promote your Business.
        </p>
      </div>
      <div className="w-11/12 lg:w-7/12 2xl:w-5/12 mx-auto hover:shadow-xl">
        <form className="flex flex-col md:flex-row gap-7 md:gap-0">
          <input
            type="email"
            placeholder="Enter your email here"
            className="flex-grow p-4 rounded md:rounded-l border border-gray-300"
          />
          <button className="px-4 py-4 bg-red-500 hover:bg-red-600 text-white rounded-r">
            Create Account
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Subscription;
