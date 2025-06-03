import Hero from "@/components/Hero";
import PaymentServices from "@/components/PaymentServices";
import CopyServices from "@/components/CopyServices";
import DesignServices from "@/components/DesignServices";
import OfficeSupplies from "@/components/OfficeSupplies";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PaymentServices />
      <CopyServices />
      <DesignServices />
      <OfficeSupplies />
      <Contact />
    </div>
  );
};

export default Index;
