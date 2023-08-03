import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavbarAndSidebar from "../NavbarAndSidebar";
import { useNavigate } from "react-router-dom";
import NotificationCounter from "../menssages/NotificationCounter";

function SearchVista() {
  const location = useLocation();
  // const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    // const query = new URLSearchParams(location.search);
    // setSearchTerm(query.get("query"));
    setProduct(location.state.product);
  }, [location]);

  return (
    <div>
      <NavbarAndSidebar />
      <div className="h-full">
        <div className="p-4 pt-10 bg-bggray min-h-screen sm:ml-64">
          <div className="p-4 px-10 pt-8 mt-14">
            <div className="flex items-center justify-center h-10 mb-4 rounded">
              <div className="text-4xl text-white dark:text-gray-500">
              {product.length === 0 ? (
              <p className="p-8 text-white">No se encontraron publicaciones.</p>
            ) : (
              <p className="p-8 text-white">Estos son los resultados.</p>
            )}
              </div>
            </div>
            <div className="flex justify-center flex-wrap gap-5 h-full p-5 py-10 mb-4 rounded-xl bg-gray-700">
              {product.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="w-80 max-w-sm bg-bggray border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                  >
                    <a href="#">
                      <img
                        className="object-cover h-52 w-96 p-8 rounded-t-lg"
                        src={product.img}
                        alt={product.title}
                      />
                    </a>
                    <div className="px-5 pb-5">
                      <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-white">
                          {product.title}
                        </h5>
                      </a>
                      <div className="text-gray-500 mt-2.5 mb-5">
                        {product.description}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-white">
                          $ {product.price}
                        </span>
                        <a
                          onClick={() =>
                            navigate("/menu/info", { state: product.id })
                          }
                          className="btn font-medium text-sm cursor-pointer"
                        >
                          Ver más
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <NotificationCounter />
      </div>
    </div>
  );
}

export default SearchVista;
