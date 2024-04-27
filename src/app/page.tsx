"use client";

import { usePosts } from "@/utils/queries";
import { useState } from "react";

export default function Home() {
  const limit = 3;
  const [page, setPage] = useState(0);

  const posts = usePosts(limit, page * limit);


  const handlePrevButton = () => {
    setPage(page === 0 ? 0 : page - 1);
  };
  const handleNextButton = () => {
    setPage((page) => page + 1);
  };

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-3xl">Hello World</h1>

      <div className="border border-white p-3 m-3">
        <div>Itens por página : {limit}</div>
        <div>Página Atual: {page}</div>
        <button onClick={handlePrevButton}
        className="border mx-2 px-2"
        >Pagina anterior</button>
        <button onClick={handleNextButton}
        className="border mx-2 px-2"
        >Próxima Pagina</button>
      </div>

      {posts.isLoading && <div>Carregando...</div>}
      {!posts.isLoading && posts.isFetching && <div>Buscando...</div>}

      <ul>
        {posts.data?.map((post) => (
          <li key={post.id}>{post.id}: {post.title}</li>
        ))}
      </ul>
    </div>
  );
}
