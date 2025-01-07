"use client";
import {
  ClerkLoaded,
  SignInButton,
  UserButton,
  useUser,
  SignedIn,
} from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";

function Header() {
  const { user } = useUser();

  const crearClaveClerk = async () => {
    try {
      const response = await user?.createPasskey();
      console.log(response);
    } catch (err) {
      console.error("Error: ", JSON.stringify(err, null, 2));
    }
  };

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
      {/*linea superior*/}
      <div className="flex w-full flex-wrap justify-between items-center">
        <Link
          href="/"
          className="text-2xl font bold text-blue-500 hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
        >
          Mi Ti3nda
        </Link>
        <Form
          action="/buscador"
          className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
        >
          <input
            type="text"
            name="query"
            placeholder="Busque un producto"
            className="
             bg-gray-100
             text-gray-800 
             px-4 
             py-2 
             rounded 
             focus:otline-none 
             focus:ring-2
             focus:ring-blue-500 
             focus:ring-opacity-50 
             border 
             border-background-
             w-full 
             max-w-4xl"
          />
        </Form>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none">
          <Link
            href="/carrito"
            className="
                flex-1 
                relative 
                flex 
                justify-center 
                sm:flex-none 
                items-center 
                space-x-2
                bg-blue-500
                hover:bg-blue-700
                text-white
                font-bold
                py-2
                px-4
                rounded"
          >
            <TrolleyIcon className="w-6 h-6" />
            {/* TO DO: implementar contador de itens en el estado global*/}
            <span>Mi Carrito</span>
          </Link>
          {/* area de usuario*/}
          <ClerkLoaded>
            <SignedIn>
              <Link
                href="/pedidos"
                className="
                  flex-1 
                  relative 
                  flex 
                  justify-center 
                  sm:justify-start 
                  sm:flex-none 
                  items-center 
                  space-x-2
                  bg-blue-500
                  hover:bg-blue-700
                  text-white
                  font-bold
                  py-2
                  px-4
                  rounded"
              >
                <PackageIcon className="w-6 h-6" />
                <span>Mis Pedidos</span>
              </Link>
            </SignedIn>
            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton />

                <div className="hidden sm:block text-xs">
                  <p className="text-gray-400">Bienvenido/a nuevamente</p>
                  <p className="font-bold">{user.fullName}!</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal" />
            )}

            {user?.passkeys.length === 0 && (
              <button
                onClick={crearClaveClerk}
                className="bg-white hover:bg-blue-700 hover:text-white animate-pulse
                   text-blue-500 font-bold py-2 px-4 rounded border-blue-300 border"
              >
                Crea su contraseña ahora
              </button>
            )}
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
}
export default Header;
