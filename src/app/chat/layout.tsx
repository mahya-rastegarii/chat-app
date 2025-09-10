import Chats from "@/components/sidebar/Chats";
import Navbar from "@/components/sidebar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
      <div className=" h-screen w-full bg-gray-300  overflow-hidden flex justify-center items-center shadow-md shadow-gray-200">
      <div className=" h-full relative w-1/3 bg-gradient-to-br from-gray-800 via-gray-900 to-black ">
    <div>
      
                  <Navbar/>
                  <Chats/>
          </div>
          </div>
          <div className="h-full w-2/3 ">
        {children}
          </div>
        </div>
      </body>
    </html>
  );
}
