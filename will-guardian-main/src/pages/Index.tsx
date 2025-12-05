import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Users, Building2, Shield, Landmark, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
    <header className="border-b bg-card">
  <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-primary">WillZap</h1>

    <Link to="/contact">
      <Button className="bg-orange-500 text-white hover:bg-white hover:text-orange-500 border-2 border-orange-500 transition-all duration-200">
        Contact Us
      </Button>
    </Link>
  </div>
</header>


      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Empower Your Legacy: Create Your{" "}
            <span className="text-primary italic">will</span> today!
          </h2>
         <br></br>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Link to="/contact">
    <Button
      size="lg"
      className="w-full sm:w-auto bg-orange-500 text-white hover:bg-white hover:text-orange-500 border-2 border-orange-500 transition-all duration-200"
    >
      Contact Lawyer
    </Button>
  </Link>
</div>

        </div>
      </section>

      {/* How We Work Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              How do we <span className="text-primary italic">Work</span>?
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-card p-6 rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Personal Details</h4>
              <p className="text-muted-foreground">
                Start by entering your basic personal information and contact details.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Family Details</h4>
              <p className="text-muted-foreground">
                Add information about your spouse, children, and beneficiaries.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Asset Details</h4>
              <p className="text-muted-foreground">
                Document your properties, vehicles, and valuable possessions.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Insurance Details</h4>
              <p className="text-muted-foreground">
                Record all your insurance policies and coverage information.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Landmark className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Bank Details</h4>
              <p className="text-muted-foreground">
                Add your banking information and account details securely.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Investment Details</h4>
              <p className="text-muted-foreground">
                Document your stocks, bonds, and other investment portfolios.
              </p>
            </div>
          </div>

          
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>
          
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h4 className="text-lg font-semibold mb-2">Q.1: What is a will?</h4>
              <p className="text-muted-foreground">
                A will is a legal document that states how a person's money, property, and belongings 
                should be distributed after they die. It ensures your wishes are followed and your 
                loved ones are taken care of.
              </p>
            </div>

            <div className="border-b pb-4">
              <h4 className="text-lg font-semibold mb-2">Q.2: Why do I need a will?</h4>
              <p className="text-muted-foreground">
                A will ensures your assets are distributed according to your wishes, protects your 
                family, and can help minimize conflicts and legal complications after your passing.
              </p>
            </div>

            <div className="border-b pb-4">
              <h4 className="text-lg font-semibold mb-2">Q.3: Is my information secure?</h4>
              <p className="text-muted-foreground">
                Yes, all information is stored securely and kept confidential. We use industry-standard 
                encryption to protect your sensitive data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 WillZap. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
