"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Twitter, Instagram, ExternalLink, Calendar, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [imageError, setImageError] = useState(false);
  
  // Debug: Log image path for troubleshooting
  if (typeof window !== 'undefined') {
    console.log('Image path:', '/hardik-nyc-photo.jpg');
  }
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                Hi, I'm <span className="font-medium">Hardik</span>,
              </h1>
              <p className="text-xl text-gray-500 italic mt-2">an engineer by accident and a founder by choice.</p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I build tools that bridge the gap between people and opportunity, whether it's freshers breaking into
                the job market, or companies looking to hire their next 10x team.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Right now, I'm working on two things I deeply believe in:{" "}
                <span className="font-medium text-gray-900">Saarthi</span>, the last platform freshers need to land
                their first job, no matter where they studied. and{" "}
                <span className="font-medium text-gray-900">Elexis</span>, an AI copilot that helps companies hire
                faster and smarter.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
                <Link href="https://outlook.office.com/bookwithme/me" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Me for a Talk
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50 bg-transparent">
                <a href="mailto:hardik.panchal@amaxatech.com">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Say Hello
                </a>
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0">
            {!imageError ? (
              <Image
                src="/hardik-nyc-photo.jpg"    
                alt="Hardik - Engineer and Founder"
                width={450}
                height={450}
                className="object-cover rounded-2xl w-full max-w-[450px] h-auto"
                priority
                onError={() => setImageError(true)}
              />
            ) : (
              <img
                src="/hardik-nyc-photo.jpg"
                alt="Hardik - Engineer and Founder"
                className="object-cover rounded-2xl w-full max-w-[450px] h-auto"
              />
            )}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          <h2 className="text-3xl font-light text-gray-900">More About Me</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p className="text-lg">I'm a first-gen engineer, Carnegie Mellon grad, and AI builder.</p>
            <p>
              I started my journey in chemical engineering, designing one of India's fastest ATVs, publishing solar
              energy research, and developing nanotech catalytic converters. Later, I developed machine learning
              algorithms at ExxonMobil to detect oil density across offshore rigs and that's where I truly fell in love
              with AI.
            </p>
            <p>
              Within a year, I pivoted into software and AI, landing roles in product, ML, and engineering. Over 8+
              years, I worked across global tech teams, learning what makes great products, how companies hire, and why
              traditional hiring leaves so much potential on the table.
            </p>
            <p>
              Today, I'm building for those without a straight path in, because talent doesn't always come with a
              perfect résumé, and a perfect résumé doesn't always mean real talent.
            </p>
            <p>
              I build tools to make hiring clearer and kinder, where opportunity meets potential, and companies don't
              waste time sifting through noise.
            </p>
            <p className="font-medium text-gray-900">
              I believe hard work beats talent, and staying focused on your own journey matters most. Potential is
              everywhere, we just need smarter ways to discover and support it.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <h2 className="text-3xl font-light text-gray-900">Saarthi and Elexis: My Why</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-gray-200 shadow-sm">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-medium text-gray-900">Saarthi</h3>
                <p className="text-gray-600 leading-relaxed">
                  It's not just a job board, but a full ecosystem that helps students discover, prepare, and get hired
                  based on potential, not pedigree.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  In just 60 days, over 3,000 freshers joined us. This is proof that the problem is real and the need is
                  urgent. Saarthi is here to support fresh talent from Tier 3 towns to top campuses. Built for freshers,
                  powered by AI, and designed to walk with you every step of the way.
                </p>
                <Button asChild variant="outline" className="mt-4 bg-transparent">
                  <Link href="https://joinsaarthi.com/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Explore Saarthi
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-sm">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-medium text-gray-900">Elexis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Elexis is an AI-powered recruitment copilot designed to fix the broken hiring process. Traditional
                  hiring relies too heavily on polished resumes and lengthy interviews, often overlooking real potential
                  and creating delays that cost companies time and money.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With Elexis, recruiters get a smart assistant that goes beyond keywords, analyzing candidate profiles,
                  skills, and behaviors to surface the best-fit talent quickly and fairly. It cuts down time-to-hire by
                  automating initial screening, delivering structured insights, and enabling more meaningful hiring
                  decisions.
                </p>
                <Button asChild variant="outline" className="mt-4 bg-transparent">
                  <Link href="https://elexis.ai/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Explore Elexis
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Speaking Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          <h2 className="text-3xl font-light text-gray-900">Let's Connect</h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I love sharing my learnings from building, failing, and reimagining hiring and education. Invite me to
              speak on:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                Startups & AI
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                Career building for freshers
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                Tech from non-tech paths
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                Building trust-first platforms
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
                <Link href="https://outlook.office.com/bookwithme/me" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Me for a Talk
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50 bg-transparent">
                <a href="mailto:hardik.panchal@amaxatech.com?subject=Media%20Inquiry">Contact for Media</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <p className="text-lg text-gray-600">
              Want to build something together, or just curious about what I'm building next?
            </p>
            <Button asChild size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50 bg-transparent">
              <a href="mailto:hardik.panchal@amaxatech.com?subject=Let's%20Stay%20in%20Touch">Let's Stay in Touch</a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
            <a
              href="mailto:hardik.panchal@amaxatech.com"
              className="flex items-center hover:text-gray-900 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email
            </a>
            <a
              href="mailto:hardik.panchal@amaxatech.com?subject=Collaboration%20Inquiry"
              className="flex items-center hover:text-gray-900 transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Collaborate
            </a>
            <a
              href="https://joinsaarthi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-gray-900 transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Saarthi
            </a>
            <a
              href="https://elexis.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-gray-900 transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Elexis
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://x.com/hrdikvp94?t=tLsKGUcwSr2Jv36Mc8FQ1A&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/hardikvp94"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
