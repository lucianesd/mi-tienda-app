"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Categoria } from "@/sanity.types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface SelectorProps {
  categorias: Categoria[];
}

export function Selector({ categorias }: SelectorProps) {
  const [selectedCategoria, setSelectedCategoria] = useState<{
    id: string;
    alias: string;
  } | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (selectedCategoria) {
      const { alias } = selectedCategoria;
      if (alias) {
        router.push(`/categorias/${alias}`);
      } else {
        console.error("El alias de la categoría seleccionada es indefinido.");
      }
    }
  }, [selectedCategoria, router]);

  return (
    <Select
      onValueChange={(id) => {
        const categoria = categorias.find((categoria) => categoria._id === id);
        if (categoria) {
          setSelectedCategoria({
            id: categoria._id,
            alias: categoria.alias || "",
          });
        } else {
          console.error(`Categoría con ID ${id} no encontrada.`);
        }
      }}
    >
      <SelectTrigger
        className="w-[260px] relative flex justify-center sm:justify-start sm:flex-none items-center 
          space-x-2 bg-blue-500 hover:bg-blue-700 hover:text-white text-white 
          font-bold py-2 px-4 rounded"
      >
        <SelectValue placeholder="Seleccionar Categoría" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup
          className="w-full max-w-full relative flex-justify-center sm:justify-start 
            sm:flex-none items-center space-x-2 bg-blue-500
            text-white font-bold py-2 px-4 rounded"
        >
          <SelectLabel>Categorías</SelectLabel>
          {categorias.map((categoria) => (
            <SelectItem key={categoria._id} value={categoria._id}>
              {categoria.titulo}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
