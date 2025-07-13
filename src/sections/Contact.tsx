import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 lg:py-24 pt-12 lg:pt-20 relative z-20">
        <div className="container">
          <div
            className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10
            rounded-3xl text-center md:text-left relative overflow-hidden z-0">
            <div
              className="absolute inset-0 opacity-5 -z-10 pointer-events-none"
              style={{
                backgroundImage: `url(${grainImage.src})`
              }}
            ></div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center relative z-10">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl">Let's create something amazing together</h2>
                <p className="text-sm md:text-base mt-2">
                  Got a cool idea, an internship opportunity, or just want to talk about shared interests? I'm all ears - feel free to get in touch!
                </p>
              </div>
              <div>
              <a
                href="mailto:kunalmgsachdev@gmail.com"
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-950 hover:bg-gray-800 transition-colors"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
            </div>
          </div>
        </div>
    </div>
  );
};
