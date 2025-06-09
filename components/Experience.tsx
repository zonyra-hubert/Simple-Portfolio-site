import Edditer from "./Edditer";

const Experience = () => {
  return (
    <section className="bg-[#1c2b3a] text-white py-10 px-6">
      <div className="space-y-10 max-w-5xl mx-auto">
        {/* Job 1 */}
        <div className="flex items-start gap-4">
          <div>
            <h3 className="text-xl font-bold">
              <span>•</span> Frontend Engineer Intern
            </h3>
            <p className="text-sm text-gray-300 mb-2">
              Fihankra Comtech LLC • <span>2024 March – 2024 May</span>
            </p>
            <p className="text-gray-200 left-0">
              As a Frontend Engineer Intern at Fihankra Comtech LLC (March–May
              2024), I focused on building responsive and visually appealing
              user interfaces using React.js, TypeScript, Tailwind CSS, and
              Framer Motion. My work involved optimizing performance,
              implementing reusable component-based architectures, and ensuring
              smooth, intuitive user experiences. I collaborated closely with
              designers, backend developers, and project managers to develop
              scalable solutions and integrate RESTful APIs efficiently. This
              internship strengthened my frontend development skills and kept me
              current with modern web technologies like Zod for validation and
              seamless UI animations.
            </p>
            <h3 className="text-xl font-bold mt-4">
              <span>•</span> Ecommerce Website with Next.js
            </h3>
            <p className="mt-1">
              Having completed the Ultimate Next.js course, I have gained
              comprehensive expertise in full-stack web development,
              specifically in building production-grade e-commerce applications.
              This course equipped me with over 25 hours of in-depth training,
              where I mastered cutting-edge technologies such as Next.js, Stripe
              for secure payment processing, and Tailwind CSS for rapid UI
              development. I successfully implemented advanced features like
              AI-powered search with Algolia, authentication using Next Auth V5,
              and efficient state management with Zustand. My hands-on
              experience includes developing an intuitive admin dashboard and a
              seamless front-end shopping experience, demonstrating my ability
              to integrate modern best practices and deliver high-quality,
              scalable web solutions. <Edditer />
            </p>
          </div>
        </div>

        {/* Job 2
        <div className="flex items-start gap-4">
          <ArrowRight className="mt-1 text-white" />
          <div>
            <h3 className="text-xl font-bold">
              Full-Stack Developer (Freelance)
            </h3>
            <p className="text-sm text-gray-300 mb-2">
              Freelance & Open Source • <span>2022 – 2024</span>
            </p>
            <p className="text-gray-200">
              I worked on various freelance projects for clients across fintech,
              education, and e-commerce sectors. One key project was developing
              a membership-based family website using
              <strong> Next.js</strong>, <strong>MongoDB</strong>, and{" "}
              <strong>Paystack</strong>, enabling announcements, dues payment,
              and SMS/email notifications. I was responsible for user
              authentication, admin panel creation, and integration with
              third-party APIs. This role strengthened my ability to manage
              full-stack projects independently, maintain secure systems, and
              deliver products from concept to deployment.
            </p>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Experience;
