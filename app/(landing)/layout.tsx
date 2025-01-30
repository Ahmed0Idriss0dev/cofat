import Navigation from "@/components/section/Navigation";

export default function Landing({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      < >
          <Navigation/>
          {children}
      </>
    );
  }
  