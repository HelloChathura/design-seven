"use client";

import { useState } from 'react';
import Button from "./ui/button";
import Input from "./ui/input";
import Textarea from "./ui/textarea";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface ContactUsProps {
  showBackgroundImage?: boolean;
}

export default function ContactUs({ showBackgroundImage = true }: ContactUsProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, mobile, message }),
        });
  
        const data = await response.json();
  
        if (data.success) {
          console.log('Email sent successfully');
          // You can show a success message or reset the form fields
          setName('');
          setEmail('');
          setMobile('');
          setMessage('');
          setErrors({});
        } else {
          console.error('Failed to send email:', data.message);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };
  

  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const center = {
    lat: 40.7128, // Replace with your desired location
    lng: -74.0060,
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: showBackgroundImage
          ? "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')"
          : 'none',
        backgroundColor: showBackgroundImage ? 'rgba(0, 0, 0, 0.6)' : 'transparent',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Conditionally render background overlay */}
      {showBackgroundImage && <div className="absolute inset-0 bg-black bg-opacity-60"></div>}

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden shadow-xl">
        <div className="w-full lg:w-1/2 h-64 lg:h-auto order-2 lg:order-1">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={14}>
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
        <div className="w-full lg:w-1/2 p-8 order-1 lg:order-2">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Your Mobile Number (optional)"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[150px]"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
