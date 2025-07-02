
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to build your dream home? Contact us for a consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-900 p-3 rounded-full">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Phone</h3>
                <p className="text-slate-600">708-372-1689</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-900 p-3 rounded-full">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Email</h3>
                <p className="text-slate-600">info@mistyharborbhomes.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-900 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Service Area</h3>
                <p className="text-slate-600">Chicagoland & Surrounding Areas</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-900 p-3 rounded-full">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Hours</h3>
                <p className="text-slate-600">Monday - Friday: 8AM - 6PM</p>
                <p className="text-slate-600">Saturday: 9AM - 4PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input placeholder="Email Address" type="email" />
              <Input placeholder="Phone Number" type="tel" />
              <Input placeholder="Project Type (New Home, Renovation, etc.)" />
              <Textarea 
                placeholder="Tell us about your project..."
                className="min-h-[120px]"
              />
              <Button 
                className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 text-lg font-semibold transition-colors duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
