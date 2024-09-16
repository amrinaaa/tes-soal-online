
'use client';
import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter untuk navigasi

const LandingPage = () => {
  const router = useRouter(); // Inisialisasi useRouter

  const handleRegisterClick = () => {
    router.push('/registrasi'); // Arahkan ke halaman registrasi
  };

  return (
    <div>
      <h1>Landing Page</h1>
      <p>Selamat datang di website kami. Ini adalah halaman landing page.</p>
      
      <button 
        onClick={handleRegisterClick} 
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        Daftar Sekarang
      </button>
    </div>
  );
};

export default LandingPage;
