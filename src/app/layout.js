import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "HotwheelzMonrovia",
  description: "Drive Your Dream, Liberia's Way.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="flex gap-6 p-4 bg-gray-100 shadow mb-8">
        <Image
              src="/hotwheelz_navbar.png"
              alt="HotwheelzMonrovia Logo"
              width={116} // e.g., 116
              height={48}
              className="mr-2"
            />
          <Link href="/" className="font-bold text-xl text-gray-700 hover:text-blue-600">HotwheelzMonrovia</Link>
          <Link href="/search" className="text-gray-700 hover:text-blue-600">Search</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          <Link href="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
          <Link href="/admin/login" className="text-gray-700 hover:text-blue-600">Admin</Link>
        </nav>
        <div className="max-w-4xl mx-auto">{children}</div>
       <footer className="w-full text-center text-gray-500 text-sm py-6 border-t mt-16">
  &copy; {new Date().getFullYear()} HotwheelzMonrovia — Drive Your Dream, Liberia's Way.<br />
  WhatsApp: +231 881582130 | HotwheelzMonrovia@gmail.com

  {/* Social Icons */}
  <div className="flex justify-center gap-6 mt-4 text-gray-300">
    {/* WhatsApp */}
    <a
      href="https://wa.me/231881582130"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="hover:text-green-500 transition"
    >
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.47A12.03 12.03 0 0 0 12.01 0C5.37 0 .01 5.37.01 12c0 2.11.56 4.19 1.62 6.03L0 24l6.17-1.62A11.98 11.98 0 0 0 12.01 24C18.65 24 24 18.63 24 12c0-3.21-1.25-6.23-3.48-8.53zM12.01 21.85a9.77 9.77 0 0 1-5.01-1.36l-.36-.22-3.66.97.97-3.56-.24-.37A9.74 9.74 0 0 1 2.19 12c0-5.42 4.41-9.83 9.83-9.83 2.63 0 5.11 1.03 6.98 2.9 1.86 1.87 2.89 4.35 2.89 6.93 0 5.42-4.41 9.85-9.85 9.85zm5.32-7.51c-.29-.15-1.72-.85-1.98-.95-.27-.1-.46-.15-.65.15-.2.29-.75.95-.91 1.14-.16.2-.33.21-.62.07-.29-.15-1.23-.45-2.35-1.44-.87-.78-1.46-1.73-1.63-2.02-.17-.29-.02-.44.13-.58.13-.13.29-.34.44-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.03-.51-.08-.15-.65-1.57-.89-2.17-.23-.57-.47-.5-.65-.51h-.56c-.19 0-.5.07-.76.34-.26.26-1.01.98-1.01 2.4s1.03 2.78 1.17 2.98c.14.2 2.03 3.1 4.95 4.23.69.27 1.23.44 1.65.56.69.22 1.32.19 1.82.12.56-.08 1.72-.7 1.96-1.38.24-.67.24-1.24.17-1.37-.07-.14-.26-.21-.54-.36z" />
      </svg>
    </a>

    {/* Instagram */}
    <a
      href="https://instagram.com/YOUR_USERNAME"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="hover:text-pink-500 transition"
    >
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.246 2.43.414a4.92 4.92 0 0 1 1.74 1.02c.478.474.822 1.028 1.01 1.735.168.462.358 1.263.415 2.43.058 1.267.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.246 1.97-.415 2.43a4.92 4.92 0 0 1-1.02 1.74c-.474.478-1.028.822-1.735 1.01-.462.168-1.263.358-2.43.415-1.267.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.246-2.43-.415a4.92 4.92 0 0 1-1.74-1.02c-.478-.474-.822-1.028-1.01-1.735-.168-.462-.358-1.263-.415-2.43C2.212 15.783 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.246-1.97.415-2.43a4.92 4.92 0 0 1 1.02-1.74c.474-.478 1.028-.822 1.735-1.01.462-.168 1.263-.358 2.43-.415C8.417 2.212 8.8 2.2 12 2.2zm0-2.2C8.74 0 8.332.012 7.052.07 5.752.128 4.74.317 3.87.585a7.047 7.047 0 0 0-2.548 1.61A7.043 7.043 0 0 0 .585 3.87c-.268.87-.457 1.883-.515 3.182C.012 8.332 0 8.74 0 12c0 3.26.012 3.668.07 4.948.058 1.299.247 2.312.515 3.182a7.047 7.047 0 0 0 1.61 2.548 7.047 7.047 0 0 0 2.548 1.61c.87.268 1.883.457 3.182.515C8.332 23.988 8.74 24 12 24c3.26 0 3.668-.012 4.948-.07 1.299-.058 2.312-.247 3.182-.515a7.047 7.047 0 0 0 2.548-1.61 7.047 7.047 0 0 0 1.61-2.548c.268-.87.457-1.883.515-3.182.058-1.28.07-1.688.07-4.948 0-3.26-.012-3.668-.07-4.948-.058-1.299-.247-2.312-.515-3.182a7.047 7.047 0 0 0-1.61-2.548A7.047 7.047 0 0 0 20.13.585c-.87-.268-1.883-.457-3.182-.515C15.668.012 15.26 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.338-10.162a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
      </svg>
    </a>

    {/* Facebook */}
    <a
      href="https://facebook.com/YOUR_USERNAME"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="hover:text-blue-700 transition"
    >
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35C.601 0 0 .6 0 1.333v21.334C0 23.4.601 24 1.325 24H12.82V14.692h-3.175v-3.622h3.175V8.413c0-3.131 1.908-4.835 4.699-4.835 1.341 0 2.496.099 2.833.144v3.283h-1.946c-1.526 0-1.823.725-1.823 1.79v2.347h3.646l-.476 3.622h-3.17V24h6.217c.725 0 1.326-.6 1.326-1.333V1.333C24 .6 23.4 0 22.675 0" />
      </svg>
    </a>

    {/* TikTok */}
    <a
      href="https://tiktok.com/@YOUR_USERNAME"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="TikTok"
      className="hover:text-black transition"
    >
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.23 2.25c.64 0 1.16.52 1.16 1.16v12.35c0 2.15-1.73 3.9-3.89 3.9-2.16 0-3.91-1.75-3.91-3.9 0-2.16 1.75-3.91 3.91-3.91.34 0 .62.28.62.62v1.06c0 .34-.28.61-.62.61a2.22 2.22 0 0 0 0 4.44c1.22 0 2.21-.99 2.21-2.21V3.41c0-.64.52-1.16 1.16-1.16zm5.52 2.13c.12.56.43 1.12 1.07 1.12h1.13c.64 0 1.16-.52 1.16-1.16 0-.64-.52-1.16-1.16-1.16h-1.14c-.65 0-.96.56-1.06 1.2zm-1.29 2.07V5.24c0-.34.28-.61.61-.61h1.06c.34 0 .61.27.61.61 0 .33-.27.61-.61.61h-1.06c-.34 0-.61-.28-.61-.61zm4.07 6.27c.63 0 1.15-.52 1.15-1.16v-1.14c0-.64-.52-1.16-1.16-1.16s-1.16.52-1.16 1.16v1.14c0 .64.52 1.16 1.16 1.16zm-3.3 4.53c.34 0 .61-.28.61-.61v-1.06c0-.34-.27-.61-.61-.61s-.61.27-.61.61v1.06c0 .33.27.61.61.61z" />
      </svg>
    </a>
  </div>
</footer>

        
      </body>
    </html>
  );
}
