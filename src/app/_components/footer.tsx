import Container from "@/app/_components/container";

export function Footer() {
  return (
    // 背景をStitchグリーンに、文字を白にします
    <footer className="bg-[#4A7856] text-white border-t border-[#3D6347]">
      <Container>
        <div className="py-20 flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-10 lg:mb-0">
            <h3 className="text-3xl font-serif font-bold tracking-tighter leading-tight text-center lg:text-left">
              Edmonton Life Blog
            </h3>
            <p className="text-sm opacity-80 mt-2 text-center lg:text-left">
              © 2026 Our family journey in Alberta, Canada.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-center items-center">
            {/* Stitch風の白いボタン */}
            <a
              href="mailto:your-email@example.com"
              className="mx-3 bg-white text-[#4A7856] hover:bg-[#FDFCF8] font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 rounded-full"
            >
              Contact Us
            </a>
            <a
              href="#top"
              className="mx-3 font-bold hover:underline opacity-90"
            >
              Back to Top
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
