import Footer from './_components/footer';
import Navbar from './_components/navbar';

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
        <main className="flex-1">
          {children}
        </main>
      <Footer />
    </>
  );
};

export default MarketingLayout;
