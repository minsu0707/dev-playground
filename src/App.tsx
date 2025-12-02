import { RouterProvider } from "react-router-dom";
import { Router } from "./Router";
import { Header } from "@components/layout/Header";
import { Footer } from "@components/layout/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ToastContainer />
      <Header />
      <main className="flex-grow">
        <RouterProvider router={Router} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
