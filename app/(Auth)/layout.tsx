export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="grid grid-cols-2 w-full h-dvh " >
       
         <div className="">{children} </div>
         <div className="bg-Brand w-full h-full"></div>
        
      </div>
    );
  }
  