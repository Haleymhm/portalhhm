"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section light">
      <div className="container section-title mx-auto">
        <h2>Testimonials</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container mx-auto">
        <Swiper
          loop
          speed={600}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 30 },
            1200: { slidesPerView: 3, spaceBetween: 1 },
          }}
          modules={[Autoplay, Pagination]}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name} className="px-2 py-4">
              <div className="testimonial-item rounded bg-white p-6 shadow-sm">
                <p className="fst-italic text-sm text-gray-700">
                  <i className="bi bi-quote quote-icon-left mr-1 text-[var(--accent)]" />
                  <span>{t.quote}</span>
                  <i className="bi bi-quote quote-icon-right ml-1 text-[var(--accent)]" />
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="testimonial-img mx-auto mt-3 h-20 w-20 rounded-full border-4 border-white shadow object-cover"
                />
                <h3 className="mt-3 text-center text-base font-bold">
                  {t.name}
                </h3>
                <h4 className="text-center text-xs uppercase text-gray-500">
                  {t.role}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
