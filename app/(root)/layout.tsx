/**
 * RootLayout component that serves as the main layout structure
 * wrapping around child components.
 *
 * @param {object} props - The props object.
 * @param {React.ReactNode} props.children - The children components to be rendered inside the layout.
 * @returns {JSX.Element} The JSX code for the main layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="">
      {/* Sidebar section */}
      sidebar
      {/* Render child components */}
      {children}
    </main>
  );
}

// typescript =>  javascript

//  prplem

// e-commece =>

// bootstrap =>
