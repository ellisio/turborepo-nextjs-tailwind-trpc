import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>MyApp</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col items-center">
        <div className="container mt-12 flex flex-col items-center justify-center gap-4 px-4 py-8">
          test page
        </div>
      </main>
    </>
  );
};

Home.layout = ({ children }: LayoutChildren) => (
  <div className="min-w-screen min-h-screen">
    <div>Header</div>
    {children}
    <div>Footer</div>
  </div>
);

export default Home;
