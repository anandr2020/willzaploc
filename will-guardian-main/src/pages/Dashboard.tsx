import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { User, Users, Building2, Shield, Landmark, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const { toast } = useToast();
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    dateOfBirth: "",
    address: "",
    phone: "",
  });

  const [familyDetails, setFamilyDetails] = useState({
    spouse: "",
    children: "",
    beneficiaries: "",
  });

  const [assetDetails, setAssetDetails] = useState({
    property: "",
    vehicles: "",
    valuables: "",
  });

  const [insuranceDetails, setInsuranceDetails] = useState({
    policyNumber: "",
    provider: "",
    coverage: "",
  });

  const [bankDetails, setBankDetails] = useState({
    bankName: "",
    accountNumber: "",
    accountType: "",
  });

  const [investmentDetails, setInvestmentDetails] = useState({
    stocks: "",
    bonds: "",
    mutualFunds: "",
  });

  const handleSubmit = (section: string) => {
    toast({
      title: "Details Saved",
      description: `Your ${section} details have been saved successfully.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-foreground">Will Planning Dashboard</h1>
          <p className="text-muted-foreground">Secure your legacy, protect your loved ones</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
            <TabsTrigger value="personal" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Personal
            </TabsTrigger>
            <TabsTrigger value="family" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Family
            </TabsTrigger>
            <TabsTrigger value="assets" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Assets
            </TabsTrigger>
            <TabsTrigger value="insurance" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Insurance
            </TabsTrigger>
            <TabsTrigger value="bank" className="flex items-center gap-2">
              <Landmark className="h-4 w-4" />
              Bank
            </TabsTrigger>
            <TabsTrigger value="investment" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Investment
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Personal Details</CardTitle>
                <CardDescription>Enter your personal information for the will</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      value={personalDetails.fullName}
                      onChange={(e) => setPersonalDetails({ ...personalDetails, fullName: e.target.value })}
                      placeholder="Enter your full legal name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={personalDetails.dateOfBirth}
                      onChange={(e) => setPersonalDetails({ ...personalDetails, dateOfBirth: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={personalDetails.phone}
                      onChange={(e) => setPersonalDetails({ ...personalDetails, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      value={personalDetails.address}
                      onChange={(e) => setPersonalDetails({ ...personalDetails, address: e.target.value })}
                      placeholder="Enter your complete address"
                      rows={3}
                    />
                  </div>
                </div>
                <Button onClick={() => handleSubmit("personal")}>Save Personal Details</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="family">
            <Card>
              <CardHeader>
                <CardTitle>Family Details</CardTitle>
                <CardDescription>Provide information about your family members and beneficiaries</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="spouse">Spouse Information</Label>
                  <Input
                    id="spouse"
                    value={familyDetails.spouse}
                    onChange={(e) => setFamilyDetails({ ...familyDetails, spouse: e.target.value })}
                    placeholder="Spouse's full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="children">Children</Label>
                  <Textarea
                    id="children"
                    value={familyDetails.children}
                    onChange={(e) => setFamilyDetails({ ...familyDetails, children: e.target.value })}
                    placeholder="List all children with their full names and dates of birth"
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="beneficiaries">Beneficiaries</Label>
                  <Textarea
                    id="beneficiaries"
                    value={familyDetails.beneficiaries}
                    onChange={(e) => setFamilyDetails({ ...familyDetails, beneficiaries: e.target.value })}
                    placeholder="List all beneficiaries and their relationship to you"
                    rows={4}
                  />
                </div>
                <Button onClick={() => handleSubmit("family")}>Save Family Details</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assets">
            <Card>
              <CardHeader>
                <CardTitle>Asset Details</CardTitle>
                <CardDescription>Document your property and valuable possessions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="property">Real Estate & Property</Label>
                  <Textarea
                    id="property"
                    value={assetDetails.property}
                    onChange={(e) => setAssetDetails({ ...assetDetails, property: e.target.value })}
                    placeholder="List all properties with addresses and estimated values"
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vehicles">Vehicles</Label>
                  <Textarea
                    id="vehicles"
                    value={assetDetails.vehicles}
                    onChange={(e) => setAssetDetails({ ...assetDetails, vehicles: e.target.value })}
                    placeholder="List all vehicles with make, model, and year"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="valuables">Valuables & Collections</Label>
                  <Textarea
                    id="valuables"
                    value={assetDetails.valuables}
                    onChange={(e) => setAssetDetails({ ...assetDetails, valuables: e.target.value })}
                    placeholder="List jewelry, art, collections, and other valuable items"
                    rows={4}
                  />
                </div>
                <Button onClick={() => handleSubmit("asset")}>Save Asset Details</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insurance">
            <Card>
              <CardHeader>
                <CardTitle>Insurance Details</CardTitle>
                <CardDescription>Record your insurance policies</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="policyNumber">Policy Number</Label>
                    <Input
                      id="policyNumber"
                      value={insuranceDetails.policyNumber}
                      onChange={(e) => setInsuranceDetails({ ...insuranceDetails, policyNumber: e.target.value })}
                      placeholder="Enter policy number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="provider">Insurance Provider</Label>
                    <Input
                      id="provider"
                      value={insuranceDetails.provider}
                      onChange={(e) => setInsuranceDetails({ ...insuranceDetails, provider: e.target.value })}
                      placeholder="Provider name"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="coverage">Coverage Details</Label>
                    <Textarea
                      id="coverage"
                      value={insuranceDetails.coverage}
                      onChange={(e) => setInsuranceDetails({ ...insuranceDetails, coverage: e.target.value })}
                      placeholder="Describe coverage, beneficiaries, and amounts"
                      rows={4}
                    />
                  </div>
                </div>
                <Button onClick={() => handleSubmit("insurance")}>Save Insurance Details</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bank">
            <Card>
              <CardHeader>
                <CardTitle>Bank Details</CardTitle>
                <CardDescription>Enter your banking information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bankName">Bank Name</Label>
                    <Input
                      id="bankName"
                      value={bankDetails.bankName}
                      onChange={(e) => setBankDetails({ ...bankDetails, bankName: e.target.value })}
                      placeholder="Name of your bank"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accountNumber">Account Number</Label>
                    <Input
                      id="accountNumber"
                      value={bankDetails.accountNumber}
                      onChange={(e) => setBankDetails({ ...bankDetails, accountNumber: e.target.value })}
                      placeholder="Account number"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="accountType">Account Type & Details</Label>
                    <Textarea
                      id="accountType"
                      value={bankDetails.accountType}
                      onChange={(e) => setBankDetails({ ...bankDetails, accountType: e.target.value })}
                      placeholder="Checking, Savings, etc. Include branch information"
                      rows={3}
                    />
                  </div>
                </div>
                <Button onClick={() => handleSubmit("bank")}>Save Bank Details</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="investment">
            <Card>
              <CardHeader>
                <CardTitle>Investment Details</CardTitle>
                <CardDescription>Document your investment portfolio</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="stocks">Stocks & Equities</Label>
                  <Textarea
                    id="stocks"
                    value={investmentDetails.stocks}
                    onChange={(e) => setInvestmentDetails({ ...investmentDetails, stocks: e.target.value })}
                    placeholder="List all stock holdings with ticker symbols and quantities"
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bonds">Bonds & Fixed Income</Label>
                  <Textarea
                    id="bonds"
                    value={investmentDetails.bonds}
                    onChange={(e) => setInvestmentDetails({ ...investmentDetails, bonds: e.target.value })}
                    placeholder="List bonds and fixed income investments"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mutualFunds">Mutual Funds & ETFs</Label>
                  <Textarea
                    id="mutualFunds"
                    value={investmentDetails.mutualFunds}
                    onChange={(e) => setInvestmentDetails({ ...investmentDetails, mutualFunds: e.target.value })}
                    placeholder="List mutual funds, ETFs, and other investments"
                    rows={4}
                  />
                </div>
                <Button onClick={() => handleSubmit("investment")}>Save Investment Details</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
