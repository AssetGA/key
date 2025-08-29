"use client";

import Image from "next/image";
import React from "react";

const works = [
  {
    type: "image",
    src: "/gallery/gallery-1.jpeg",
    alt: "Установка дверной ручки",
  },
  {
    type: "image",
    src: "/gallery/gallery-2.jpeg",
    alt: "Установка ручки на двери",
  },
  {
    type: "image",
    src: "/gallery/gallery-3.jpeg",
    alt: "Установка замка",
  },
  {
    type: "video",
    src: "/video/gallery-1.mp4",
    alt: "",
  },
  {
    type: "video",
    src: "/video/gallery-2.mp4",
    alt: "Видео работы 2",
  },
  {
    type: "video",
    src: "/video/gallery-3.mp4",
    alt: "Видео работы 2",
  },
  {
    type: "video",
    src: "/video/gallery-4.mp4",
    alt: "Видео работы 2",
  },
  {
    type: "video",
    src: "/video/gallery-5.mp4",
    alt: "Видео работы 2",
  },
  {
    type: "video",
    src: "/video/gallery-6.mp4",
    alt: "Видео работы 2",
  },
];

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Галерея работ</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((item, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            {item.type === "image" ? (
              <div className="relative w-full h-64">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 
                         (max-width: 1200px) 50vw, 
                         33vw"
                />
              </div>
            ) : (
              <video
                controls
                className="w-full h-64 object-cover"
                poster="/gallery/gallery-1.jpg" // превью
              >
                <source src={item.src} type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
            )}
            <div className="p-3 text-center font-medium">{item.alt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
