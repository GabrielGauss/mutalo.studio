import React from "react";
import { Link } from "react-router-dom";
import HeaderAlt from "../partials/HeaderAlt";
import Footer from "../partials/Footer";

function Solutions() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <HeaderAlt />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">
                  <span className="text-violet-500"> Welcome.</span> We exist to
                  make entrepreneurism easier.
                </h1>
              </div>

              {/* Contenido */}
              <div className="max-w-sm mx-auto"></div>
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 bg-gray-100 rounded py-6 px-4 shadow-xl">
                <h1 className="h1">
                  At the moment, we are working in this section{" "}
                </h1>
                <br />
                <h2 className="h2 text-violet-500">
                  Can you wait a little longer?
                </h2>
                <br />
                <br />
                <h1 className="h1 font-bold"> MUTALO.studio</h1>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Solutions;
