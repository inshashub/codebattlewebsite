import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import Timeline from '@/components/Timeline'
import Registration from '@/components/Registration'
import Winners from '@/components/Winners'
import Partners from '@/components/Partners'
import Footer from '@/components/Footer'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Timeline />
        <Registration />
        <Winners />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
