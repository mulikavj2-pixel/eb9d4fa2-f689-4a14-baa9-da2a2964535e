"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import AboutMetric from '@/components/sections/about/AboutMetric';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import TestimonialCardNine from '@/components/sections/testimonial/TestimonialCardNine';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseSocial from '@/components/sections/footer/FooterBaseSocial';
import { Star, Zap, TrendingUp, Users, Award, ShieldCheck, CreditCard, Sparkles, Crown, Gem, Heart, Network, HelpCircle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function AutoDrivePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="small"
      background="grid"
      cardStyle="gradient-subtle"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="minimal"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "home" },
            { name: "Vehicles", id: "vehicles" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
            { name: "FAQ", id: "faq" }
          ]}
          brandName="AutoDrive"
          bottomLeftText="Premium Cars Marketplace"
          bottomRightText="sales@autodrive.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Find Your Perfect Car"
          description="Discover premium vehicles with flexible financing options, transparent pricing, and expert service. Drive home your dream car today."
          tag="Trusted by Thousands"
          tagIcon={Star}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766142905264-0knp6n5x.jpg"
          imageAlt="Luxury car showcase"
          imagePosition="right"
          buttons={[
            { text: "Browse Cars", href: "vehicles" },
            { text: "Get Quote", href: "contact" }
          ]}
        />
      </div>

      <div id="featured-vehicles" data-section="featured-vehicles">
        <ProductCardOne
          title="Featured Vehicles"
          description="Explore our handpicked selection of premium cars. Each vehicle is inspected, certified, and ready to drive."
          tag="New Arrivals"
          tagIcon={Zap}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          gridVariant="four-items-2x2-equal-grid"
          useInvertedBackground="noInvert"
          products={[
            {
              id: "1",
              name: "Luxury Sedan 2024",
              price: "$45,999",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139814480-jbf7tw7n.jpg",
              imageAlt: "Silver luxury sedan"
            },
            {
              id: "2",
              name: "Premium SUV 2024",
              price: "$52,999",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139815609-1aj59i6l.jpg",
              imageAlt: "Black premium SUV"
            },
            {
              id: "3",
              name: "Sports Car 2023",
              price: "$38,999",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139813252-qgzxe62r.jpg",
              imageAlt: "Red sports car"
            },
            {
              id: "4",
              name: "Executive Sedan 2024",
              price: "$48,999",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139811695-qb26mnl3.png",
              imageAlt: "Blue executive sedan"
            }
          ]}
          buttons={[
            { text: "View All Vehicles", href: "vehicles" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Why Choose AutoDrive? We deliver excellence in every transaction with proven track record and customer-first approach."
          useInvertedBackground="noInvert"
          metrics={[
            { icon: TrendingUp, label: "Cars Sold", value: "5,000+" },
            { icon: Users, label: "Happy Customers", value: "4,800+" },
            { icon: Award, label: "Years in Business", value: "15" },
            { icon: ShieldCheck, label: "Satisfaction Rate", value: "98%" }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardEight
          title="Financing Options"
          description="Choose the payment plan that works best for you. We partner with top lenders to offer flexible terms."
          tag="Easy & Transparent"
          tagIcon={CreditCard}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
          plans={[
            {
              id: "basic",
              badge: "Popular",
              badgeIcon: Sparkles,
              price: "2-3%",
              subtitle: "Standard financing for all buyers",
              buttons: [
                { text: "Apply Now", href: "contact" }
              ],
              features: [
                "Flexible 24-60 month terms",
                "Quick 24-hour approval",
                "No origination fees",
                "Trade-in accepted"
              ]
            },
            {
              id: "pro",
              badge: "Best Value",
              badgeIcon: Crown,
              price: "1.9%",
              subtitle: "Preferred for excellent credit",
              buttons: [
                { text: "Qualify Today", href: "contact" }
              ],
              features: [
                "Lowest interest rates",
                "Extended warranty options",
                "Free maintenance package",
                "Priority customer service"
              ]
            },
            {
              id: "premium",
              badge: "Elite",
              badgeIcon: Gem,
              price: "1.5%",
              subtitle: "Exclusive for VIP members",
              buttons: [
                { text: "Become VIP", href: "contact" }
              ],
              features: [
                "Best-in-class rates",
                "Lifetime warranty available",
                "Complimentary services",
                "Dedicated account manager"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardNine
          title="What Our Customers Say"
          description="Real experiences from real customers who trusted us with their car purchase."
          tag="Customer Stories"
          tagIcon={Heart}
          variant="card"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              quote: "AutoDrive made buying my first car incredibly easy. The financing process was transparent and the sales team was genuinely helpful. Highly recommended!",
              name: "Sarah Johnson",
              role: "New Car Owner",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766142914384-2ryn26s5.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              quote: "Best car buying experience I've had. The quality of vehicles is outstanding and the customer service exceeded my expectations. I'm already recommending friends!",
              name: "Michael Chen",
              role: "Satisfied Customer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766142913201-ub6wmfl4.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              quote: "The financing options they offered saved me thousands of dollars. Fair prices, no hidden fees, and a smooth delivery process. Five stars!",
              name: "Emily Rodriguez",
              role: "Premium Car Buyer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766142911715-g6hxs35w.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              quote: "I was nervous about buying online, but AutoDrive's team was professional and made me feel confident every step of the way. Amazing experience!",
              name: "David Kim",
              role: "First-Time Buyer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766142915722-jn1v6h7v.jpg",
              imageAlt: "David Kim"
            },
            {
              id: "5",
              quote: "Excellent selection of vehicles at competitive prices. The inspection reports were detailed and honest. Will definitely buy from them again!",
              name: "Jessica Thompson",
              role: "Repeat Customer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766142918471-bbsvcgpb.jpg",
              imageAlt: "Jessica Thompson"
            },
            {
              id: "6",
              quote: "AutoDrive's commitment to customer satisfaction is genuine. They stood behind their products and went above and beyond. Trustworthy business!",
              name: "Robert Martinez",
              role: "Verified Buyer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766142917238-lv8h4ku5.jpg",
              imageAlt: "Robert Martinez"
            }
          ]}
        />
      </div>

      <div id="partners" data-section="partners">
        <SocialProofOne
          title="Trusted by Top Brands"
          description="We partner with leading manufacturers and financial institutions to serve you better."
          tag="Partner Network"
          tagIcon={Network}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          showCard={true}
          speed={40}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766142920279-3xye3vtv.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139800619-rfhvn7u2.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766142921450-c9dt2p12.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766142922685-4vcy7l46.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766142924076-puuyezbw.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766142925434-jqqa43kj.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766142926572-c7gd8yjt.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766142927833-hh677jac.png"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our vehicles, financing, and services."
          tag="Help & Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What is your return policy?",
              content: "We offer a 7-day money-back guarantee on all vehicles. If you're not completely satisfied, we'll accept the return with full refund. No questions asked, hassle-free process."
            },
            {
              id: "2",
              title: "Are all vehicles inspected and certified?",
              content: "Yes, every vehicle in our inventory undergoes a comprehensive 150-point inspection by certified technicians. All cars come with a detailed inspection report and warranty documentation."
            },
            {
              id: "3",
              title: "How long does financing approval take?",
              content: "We can approve most financing applications within 24 hours. Our team works with multiple lenders to ensure you get the best rates and terms available."
            },
            {
              id: "4",
              title: "Do you accept trade-ins?",
              content: "Absolutely! We accept trade-ins and offer competitive valuations. We'll handle all the paperwork and provide instant credit toward your new vehicle purchase."
            },
            {
              id: "5",
              title: "What warranty coverage is included?",
              content: "All vehicles come with at least 3 months/5,000 km warranty. Extended warranty options up to 5 years/100,000 km are available at competitive rates."
            },
            {
              id: "6",
              title: "Can I buy a car online?",
              content: "Yes! You can browse, apply for financing, and complete your purchase entirely online. We offer doorstep delivery to your home, or you can pick up at our showroom."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to drive home in your dream car? Let our expert team help you find the perfect match and secure the best financing deal."
          animationType="entrance-slide"
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Contact Sales", href: "contact" },
            { text: "Schedule Test Drive", href: "contact" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseSocial
          description="AutoDrive is your trusted partner for premium vehicle sales and flexible financing. We're committed to making car ownership accessible and rewarding."
          logoText="AutoDrive"
          copyrightText="© 2024 AutoDrive. All rights reserved."
          columns={[
            {
              title: "Vehicles",
              items: [
                { label: "Browse Cars", href: "vehicles" },
                { label: "New Arrivals", href: "vehicles" },
                { label: "Financing", href: "pricing" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "about" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Help Center", href: "faq" },
                { label: "Warranty Info", href: "faq" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "privacy" },
                { label: "Terms of Service", href: "terms" },
                { label: "Cookie Policy", href: "cookies" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}