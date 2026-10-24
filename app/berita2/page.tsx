"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// 1. Komponen NavLink khusus untuk menangani klik aman
function NavLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-disabled={isActive}
      className={`${className} ${
        isActive ? "pointer-events-none cursor-default font-semibold text-red-600" : ""
      }`}
    >
      {children}
    </Link>
  );
}

// 2. Halaman Utama Berita
export default function BeritaPage() {
  const [activeBerita, setActiveBerita] = useState(0);

  const berita = [
    {
      tanggal: "Selasa, 11 Agustus 2026",
      judul:
        "Menpora Erick Sambut Gembira Indonesia Semakin Dilirik Jadi Destinasi Pramusim Favorit Klub-Klub Sepak Bola Dunia",
      gambar: "/logo/berita1.jpg",
    },
  ];

  return (
    <main>
      {/* Navbar */}
      <nav className="bg-[#f4f1f1] text-white h-20 w-full z-50">
        <div className="flex justify-between items-center gap-6 md:px-10 px-5 py-4 bg-white shadow-sm">
          <Image
            src="/images/kemenpora.png"
            alt="Logo Kemenpora"
            width={120}
            height={60}
            priority
          />

          {/* Menu Items */}
          <ul className="flex items-center gap-8">
            <li>
              {/* Diubah dari /beranda ke / agar mengarah ke root Home */}
              <NavLink
                href="/"
                className="hover:text-red-600 flex items-center gap-1 h-20 transition text-black"
              >
                Beranda
              </NavLink>
            </li>

            {/* Dropdown Menu 1 */}
            <li className="relative group list-none">
              <button className="hover:text-red-600 cursor-pointer flex items-center gap-1 h-20 transition text-black">
                Profil <span className="text-xs">▼</span>
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-black shadow-xl z-50">
                <button
                  className="hover:text-red-600 block px-6 py-4 border-b border-gray-600 text-white"
                >
                  Visi Misi, Ruang Lingkup, Struktur Organisasi
                </button>
                <button
                  className="hover:text-red-600 block px-6 py-4 border-b border-gray-600 text-white"
                >
                  Informasi Pejabat
                </button>
                <button
                  className="hover:text-red-600 block px-6 py-4 text-white"
                >
                  Sejarah, Mata, Lambang
                </button>
              </div>
            </li>

            {/* Dropdown Menu 2 */}
            <li className="relative group list-none">
              <button className="hover:text-red-600 cursor-pointer flex items-center gap-1 h-20 transition text-black">
                Kebijakan <span className="text-xs">▼</span>
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-black shadow-xl z-50">
                <button
                  className="hover:text-red-600 block px-6 py-4 border-b border-gray-600 text-white"
                >
                  Laporan Kinerja
                </button>
                <button
                  className="hover:text-red-600 block px-6 py-4 border-b border-gray-600 text-white"
                >
                  Rencana Strategis
                </button>
                <button
                  className="hover:text-red-600 block px-6 py-4 text-white"
                >
                  Perjanjian Kinerja
                </button>
                <button
                  className="hover:text-red-600 block px-6 py-4 text-white"
                >
                  SPBE
                </button>
              </div>
            </li>

            <li>
              <NavLink
                href="/berita"
                className="hover:text-red-600 flex items-center gap-1 h-20 transition text-black"
              >
                Berita
              </NavLink>
            </li>
            <li>
              <button
                className="hover:text-red-600 flex items-center gap-1 h-20 transition text-black"
              >
                Galeri
              </button>
            </li>
            <li>
              <button className="hover:text-red-600 cursor-pointer flex items-center gap-1 h-20 transition text-black">
                Event
              </button>
            </li>
            <li>
              <button className="hover:text-red-600 cursor-pointer flex items-center gap-1 h-20 transition text-black">
                Pengumuman
              </button>
            </li>
            <li>
              <button className="hover:text-red-600 cursor-pointer flex items-center gap-1 h-20 transition text-black">
                Layanan
              </button>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            <input
              type="search"
              placeholder="Search"
              className="w-44 h-9 rounded-full pl-9 pr-4 text-black bg-gray-100 outline-none text-sm focus:ring-1 focus:ring-red-500"
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative mt-10 overflow-hidden">
        <div className="relative h-150 w-full">
          <Image
            src="/images/berita.jpg"
            alt="Berita Kemenpora"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

          <div className="absolute bottom-10 left-1/2 w-full max-w-6xl -translate-x-1/2 px-6">
            <div className="max-w-xl rounded-2xl bg-white p-8">
              <div className="flex items-center gap-4">
                <NavLink href="/beritaa" className="rounded-full bg-red-600 px-5 py-2 text-sm text-white">
                  Berita
                </NavLink>
                <span className="text-[#25286C]">
                  {berita[activeBerita].tanggal}
                </span>
              </div>

              <h2 className="mt-7 text-2xl font-medium leading-tight text-[#25286C] md:text-3xl">
                {berita[activeBerita].judul}
              </h2>

              {/* Slider Dots */}
              <div className="mt-10 flex justify-center gap-3">
                {berita.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveBerita(index)}
                    className={`h-3 w-3 rounded-full transition ${
                      activeBerita === index
                        ? "bg-red-600 scale-125"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 h-0.5 w-full bg-gray-200" />

        {/* Daftar Berita */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-10">
          <article className="overflow-hidden rounded-2xl bg-white shadow-md">
            <div className="relative h-56">
              <Image
                src="/images/berita.jpg"
                alt="Berita"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <span className="text-sm text-red-600">Berita</span>
              <h3 className="mt-2 text-xl font-semibold text-[#25286C]">
                Menpora Erick Sambut Gembira Indonesia Semakin Dilirik Jadi Destinasi Pramusim Favorit Klub-Klub Sepak Bola Dunia
              </h3>
              <p className="mt-3 text-sm text-gray-500">Selasa, 11 Agustus 2026</p>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl bg-white shadow-md">
            <div className="relative h-56">
              <Image
                src="/images/olahraga.jpg"
                alt="Inspirasi Pemuda"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <span className="text-sm text-red-600">Berita</span>
              <h3 className="mt-2 text-xl font-semibold text-[#25286C]">
                Menpora Erick: Terima Kasih Untuk Kepercayaan Presiden Prabowo Atas Transformasi di Kemenpora
              </h3>
              <p className="mt-3 text-sm text-gray-500">Rabu, 12 Agustus 2026</p>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl bg-white shadow-md">
            <div className="relative h-56">
              <Image
                src="/images/ttd.jpeg"
                alt="Kegiatan Pemuda"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <span className="text-sm text-red-600">Berita</span>
              <h3 className="mt-2 text-xl font-semibold text-[#25286C]">
                Kemenpora Perkuat Integrasi Data Keolahragaan untuk Dukung Manajemen Talenta Nasional
              </h3>
              <p className="mt-3 text-sm text-gray-500">Rabu, 12 Agustus 2026</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}