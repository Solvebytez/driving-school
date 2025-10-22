"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What are the requirements to start driving lessons?",
      answer:
        "To start driving lessons, you must be at least 16 years old, have a valid G1 license, and provide government-issued photo ID. You'll also need to complete our registration form and meet any additional requirements specific to your chosen course.",
    },
    {
      question: "How long does it take to complete the driving course?",
      answer:
        "Our 4-Day In-Class course runs for 4 consecutive days (9 AM - 2:30 PM), while our Online E-Learning course is self-paced and can be completed at your own convenience. Both courses provide the same 4-month reduction on your road test waiting period.",
    },
    {
      question: "Do you provide pickup and drop-off services?",
      answer:
        "Yes! We provide free pickup and drop-off services for all in-car lessons from your home or a convenient location. This service is available for both our in-class and online course students.",
    },
    {
      question: "What is the difference between in-class and online courses?",
      answer:
        "Both courses are MTO-approved and provide the same 4-month reduction. The in-class course offers face-to-face interaction in a structured environment over 4 days, while the online course allows you to learn at your own pace with 24/7 access to materials and technical support.",
    },
    {
      question: "How much does the driving course cost?",
      answer:
        "Course prices vary depending on the package you choose. We offer competitive rates for both our in-class and online courses. For detailed pricing information, please visit our Packages page or contact us directly at (905)-392-1472.",
    },
    {
      question: "Are your instructors MTO-certified?",
      answer:
        "Yes, all our instructors are MTO-certified and have years of experience in both classroom and online teaching environments. They are carefully selected for their teaching ability and commitment to student success.",
    },
    {
      question: "What happens if I fail the course?",
      answer:
        "If you don't pass the course on your first attempt, we provide additional support and guidance to help you succeed. Our students achieve a 95% first-time pass rate, demonstrating the effectiveness of our teaching methods.",
    },
    {
      question: "Can I switch from online to in-class course or vice versa?",
      answer:
        "Yes, we understand that circumstances can change. Please contact us to discuss your options for switching between course formats. We'll work with you to find the best solution for your learning needs.",
    },
    {
      question: "What materials do I need for the online course?",
      answer:
        "For the online course, you'll need a reliable internet connection, a computer, tablet, or smartphone, an email address for course access, and basic computer skills. All course materials are provided digitally.",
    },
    {
      question: "How do I book my first driving lesson?",
      answer:
        "You can book your first driving lesson by calling us at (905)-392-1472 or by filling out our registration form online. Our team will help you schedule your lessons at a time that works best for you.",
    },
    {
      question: "Do you offer private driving lessons?",
      answer:
        "Yes, we offer private driving lessons for both G1 and G2 preparation. These one-on-one sessions are perfect for students who prefer personalized instruction or need extra practice in specific areas.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve multiple locations including Bradford, Markham, Newmarket, Richmond Hill, and Scarborough. Each location has its own dedicated team of instructors and offers the same high-quality driving education.",
    },
  ];

  return (
    <section className="relative w-full py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="bg-red-500 text-white px-3 py-1 rounded-md text-xs font-semibold uppercase inline-block mb-4">
            FAQ
          </div>
          <h2 className="pathway-extreme text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl mb-6">
            Frequently Asked Questions
          </h2>
          <p className="onest text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our driving courses,
            services, and policies. If you don't see your question here, feel
            free to contact us directly.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="pathway-extreme text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>

              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="onest text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="pathway-extreme text-xl font-bold text-gray-800 mb-4">
              Still Have Questions?
            </h3>
            <p className="onest text-gray-600 mb-6">
              Our friendly team is here to help! Contact us for personalized
              assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(905)-392-1472"
                className="pathway-extreme inline-flex items-center justify-center px-6 py-3 bg-brand text-white font-semibold rounded-md hover:bg-brand/90 transition-colors"
              >
                Call (905)-392-1472
              </a>
              <a
                href="/contact"
                className="pathway-extreme inline-flex items-center justify-center px-6 py-3 border border-brand text-brand font-semibold rounded-md hover:bg-brand hover:text-white transition-colors"
              >
                Contact Us Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

