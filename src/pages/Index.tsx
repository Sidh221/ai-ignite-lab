
const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome</h1>
        <p className="text-lg text-gray-600">This is a basic webpage</p>
      </header>
      
      <main>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="text-gray-700 mb-4">
            This is a simple, clean webpage with basic HTML structure and minimal styling.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700">
            Get in touch: contact@example.com
          </p>
        </section>
      </main>
      
      <footer className="mt-16 pt-8 border-t border-gray-200">
        <p className="text-gray-500 text-center">© 2024 Basic Website</p>
      </footer>
    </div>
  );
};

export default Index;
