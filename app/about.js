"use client";

import Image from "next/image";
import React from "react";

export default function TentangWebsite() {
  return (
    <section id="tentang" className="bg-gray-50 py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Judul */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          KKN UNAND 2025
        </h2>

        {/* Logo KKN */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="relative w-28 h-28 ">
            <Image
              src="/kkn.png"
              alt="Logo KKN"
              fill
              className="object-contain rounded-full shadow-lg"
            />
          </div>
          <div className="relative w-28 h-28">
            <Image
              src="/unand.jpeg"
              alt="Logo Universitas"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-28 h-28">
            <Image
              src="/panorama.jpeg"
              alt="LKJ"
              fill
              className="object-contain shadow-lg rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
