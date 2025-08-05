import { testimonialsData } from "../../src/Data"

const Testimonial = () => {

    return (
        <>
            <section className="relative bg-[#FFF7E0] py-12 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-serif mb-4 text-black">
                        Real People. Real Results.
                    </h2>
                    <p className="text-lg text-gray-800 mb-8">
                        Hear how Golden Today is transforming lives with health, income, and confidence.
                    </p>

                    {/* Testimonial Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonialsData.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-4 border-l-4 border-[#FFC107] relative overflow-hidden">
                                <div className="flex items-center mb-4">
                                    <img
                                        src={testimonial.image}
                                        alt={`${testimonial.name} photo`}
                                        className="w-16 h-16 rounded-full mr-4 object-cover"
                                    />
                                    <div>
                                        <h3 className="text-lg font-medium text-[#222]">{testimonial.name}</h3>
                                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-base italic">“{testimonial.quote}”</p>
                            </div>
                        ))}
                    </div>

                    {/* Footer Text */}
                    <p className="text-lg text-gray-800 mt-8">
                        These stories are just the beginning. People across India are choosing Golden Today for better health and income.
                    </p>
                    <p className="text-lg font-semibold text-gray-800 mt-2">
                        You could be next.
                    </p>
                </div>

                {/* Decorative leaves */}
                <div className="absolute left-0 bottom-0 w-64 h-64 -z-1 pointer-events-none" style={{ background: `url('/leaves-decor.png') no-repeat left bottom / contain` }} />
            </section>
        </>
    )
}

export default Testimonial