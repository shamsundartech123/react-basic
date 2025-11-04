import React from "react";
import Header from "./assets/components/header.jsx";
import Footer from "./assets/components/footer.jsx";
import Button from "./assets/components/button.jsx";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  const footerLinks = [
    { text: "About", url: "/about" },
    { text: "Contact", url: "/contact" },
    { text: "Privacy", url: "/privacy" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        title="My React App" 
        subtitle="Welcome to our application" 
      />
      
      <main className="flex-grow p-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <Button text="Primary Button" onClick={handleClick} />
          <Button text="Secondary Button" variant="secondary" onClick={handleClick} />
          <Button text="Danger Button" variant="danger" onClick={handleClick} />
        </div>
      </main>

      <Footer 
        copyright="© 2025 My React App. All rights reserved."
        links={footerLinks}
      />
    </div>
  );
}

export default App;
