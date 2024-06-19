/* eslint-disable react/no-unescaped-entities */


const FreqQuestions = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:px-40 md:px-10 px-5 mt-10 lg:mt-28">
            <div>
            <h2 className="lg:text-5xl text-xl text-center font-semibold text-secondary">Frequently Asked Questions</h2>
            </div>
            {/* Questions and answers */}
            <div className="join join-vertical w-full">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" defaultChecked /> 
    <div className="collapse-title text-xl font-medium">
    How do you make money from a travel blog?
    </div>
    <div className="collapse-content"> 
      <p>Through affiliate marketing, sponsored posts, brand partnerships, selling products/services, and crowdfunding platforms like Patreon.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    What are the essential tools and equipment for starting a travel blog?
    </div>
    <div className="collapse-content"> 
      <p>A good camera, reliable laptop, travel-friendly gadgets, photo/video editing software, and blog management tools.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    How do you grow your travel blog's audience and increase engagement?
    </div>
    <div className="collapse-content"> 
      <p>By creating quality content, using SEO strategies, active social media marketing, sending email newsletters, and collaborating with other bloggers/influencers.</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default FreqQuestions;