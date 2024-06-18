import SubscriptionForm from "./SubscriptionForm";

const Subscription = () => {
  return (
    <section id="contact">
      <div className="flex flex-col  gap-12 mx-auto px-4 text-center py-40 bg-gray-100 2xl:w-10/12">
        <div className="flex flex-col gap-7">
          <h2 className="font-bold uppercase text-lg md:text-2xl">
            Do you want to add your business listing with us?
          </h2>
          <p className="text-gray-600 font-medium">
            Listrace offers you to list your business with us and we are very
            much able to promote your Business.
          </p>
        </div>
        <div className="w-11/12 lg:w-7/12 2xl:w-5/12 mx-auto hover:shadow-xl">
          <SubscriptionForm />
        </div>
      </div>
    </section>
  );
};

export default Subscription;
