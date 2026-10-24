"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
        isActive ? "pointer-events-none cursor-default text-red-600 font-semibold" : ""
      }`}
    >
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <main>
      {/*NAVBAR*/}
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
              <NavLink
                href="/beranda"
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

      

      {/* 3. Hero Section */}
      <section className="relative z-0 h-170 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hometop-bg.png"
            alt="Background"
            fill
            className="object-cover w-full h-full"
          />
        </div>

        <div className="absolute -bottom-11.25 left-[5%] z-10">
          <Image
            src="/images/hometop-img@2x.png"
            alt="Atlet"
            width={901}
            height={636}
            priority
            className="w-162.5 h-auto"
          />
        </div>

        <div className="absolute right-[8%] top-107.5 z-20 w-150">
          <h1 className="whitespace-nowrap text-3xl font-bold text-[#25286C]">
            BERGERAK, BERSATU, BERPRESTASI
          </h1>

          <p className="mt-4 max-w-150 text-xl leading-5 text-[#25286C]">
            Kementerian Pemuda dan Olahraga berfokus pada pengembangan bakat generasi muda,
            pembinaan prestasi olahraga, dan kemajuan kegiatan kepemudaan di seluruh Indonesia.
          </p>

          <button
            className="mt-6 rounded-full bg-[#25286C] text-white px-10 py-4 cursor-pointer inline-flex items-center gap-1 h-14 transition hover:bg-blue-900"
          >
            PROFIL KEMENPORA →
          </button>
        </div>
      </section>

      {/* 4. Marathon Section */}
      <section className="relative z-10 bg-white px-6 py-10">
        <div className="mx-auto flex h-37.5 max-w-375 items-center overflow-hidden rounded-xl bg-linear-to-r from-[#0072c6] to-[#24c9ec] px-12">
          <h2 className="text-3xl text-white font-bold">MAYBANK MARATHON 2026</h2>

          <div className="ml-auto flex items-center gap-5">
            <div className="flex h-22.5 w-22 flex-col items-center justify-center rounded-xl bg-white text-[#25286C]">
              <span className="text-3xl font-bold">11</span>
              <span>Hari</span>
            </div>

            <span className="text-3xl text-white">:</span>

            <div className="flex h-22.5 w-22 flex-col items-center justify-center rounded-xl bg-white text-[#25286C]">
              <span className="text-3xl font-bold">12</span>
              <span>Jam</span>
            </div>

            <span className="text-3xl text-white">:</span>

            <div className="flex h-22.5 w-22 flex-col items-center justify-center rounded-xl bg-white text-[#25286C]">
              <span className="text-3xl font-bold">16</span>
              <span>Menit</span>
            </div>

            <div className="ml-8 h-25 w-45 bg-[#ffd83d]">
              <Image
                src="/images/marathon.png"
                alt="Maybank Marathon"
                width={180}
                height={100}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Berita Terbaru Header */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-[#25286C] md:text-4xl">BERITA TERBARU</h2>
      </div>

      {/* 6. Berita Utama Section */}
      <section className="relative h-150 w-full overflow-hidden mt-6">
        <Image
          src="/images/berita.jpg"
          alt="Berita Utama"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

        <div className="absolute bottom-14 left-[10%] z-10 max-w-150 text-white">
          <div className="mb-5 flex items-center gap-4">
            <NavLink
              href="/beritaa"
              className="rounded-full bg-white px-5 py-2 text-sm text-red-500 font-medium"
            >
              Berita
            </NavLink>
            <span className="text-sm text-white">Jumat, 07 Agustus 2026</span>
          </div>

          <h2 className="text-3xl font-bold leading-tight md:text-4xl cursor-pointer transition">
            Menpora Erick Sambut Gembira Indonesia Semakin Dilirik Jadi Destinasi Pramusim Favorit
            Klub-Klub Sepak Bola Dunia
          </h2>
        </div>

        <div className="absolute bottom-14 right-[3%] z-10">
          <NavLink
            href="/berita"
            className="flex items-center gap-3 rounded-full bg-white px-7 py-3 text-sm font-medium text-red-600 transition hover:bg-red-600 hover:text-white"
          >
            LIHAT BERITA LAINNYA
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
              →
            </span>
          </NavLink>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
          <div className="h-2 w-2 rounded-full bg-white/60" />
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="relative overflow-hidden bg-white pt-16">
        <button
          className="
            fixed
            bottom-5
            left-6
            z-50
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            border-4
            border-white
            bg-blue-600
            text-white
            shadow-xl
            cursor-pointer
          "
        >
          ♿
        </button>
      </footer>
      <nav>
        <div className="relative w-full h-15 md:h-20 bg-[#E11D2A]">
                <Image
                  src="/images/banner.jpeg"
                  alt="Dirgahayu Republik Indonesia"
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain md:object-cover object-center"
                />
              </div>
      </nav>

      {/* Kepemudaan & Olahraga */}

      <section className="w-full bg-white px-5 py-10 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-350 grid-cols-1 gap-6 md:grid-cols-2">
         {/*Kepemudaan*/}
         <div className="relative h-120 overflow-hidden rounded-[25px] bg-[#2860AE] p-7 text-white md:h-120">
          {/*Judul Kepemudaan*/}
          <h2 className="relative z-10 tex-3xl font-bold tracking-wide md:text-4xl">
            KEPEMUDAAN
          </h2>
          {/*DESK*/}
          <p className="relative z-10 mt-3 max-w-162.5 text-lg leading-7">
            Mendorong kreativitas dan partisipasi aktif pemuda di seluruh Indonesia
          </p>
          {/*PICT*/}
          <div className="absoulute bottom-0 -right-5 z-10 w-[65%] md:-right-2.5 md:w-[60%]">
            <Image
            src="/images/kepemudaan.png"
            alt="kepemudaan"
            width={700}
            height={600}
            className="h-auto w-full object-contain"
            />
          </div>
          {/*Button*/}
           <button className="absolute bottom-5 left-7 z-20 flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium tracking-wide text-[#2860AE] transition hover:bg-gray-100">
            LIHAT KEPEMUDAAN
            </button>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2860AE] text-xs text-white">
          →
        </span>
      
    </div>
    </div>
      </section>

      <footer className="mt-16 border-t border-gray-200 bg-white py-6 text-center">
      <p className="text-sm text-[#25286C]">
      Di buat oleh Siswa
      </p>

  <p className="mt-1 text-lg font-semibold text-[#25286C]">
    XI RPL 5
  </p>

  <p className="mt-1 text-xs text-gray-500">
    © 2026 XI RPL 5. All Rights Reserved.
  </p>
  </footer>
    </main>
  );
}