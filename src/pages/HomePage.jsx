import { Link } from 'react-router-dom';
import { PlusIcon } from '@radix-ui/react-icons';
import { Pencil, Trash } from 'lucide-react';
import useAnimesContext from '@/hooks/use-animes-context';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

function HomePage() {
  const { animes, setAnimeToUpdate, deleteAnimeById } = useAnimesContext();

  const renderedAnimes = animes.map((anime) => {
    return (
      <Card key={anime.id} className="relative overflow-hidden">
        <img
          src={anime.img}
          alt={anime.title}
          className="w-full h-80 object-cover object-center"
        />
        <div className="px-4 py-4">
          <h2 className="text-xl font-bold mb-2">{anime.title}</h2>
          <p>{anime.desc}</p>
        </div>
        <div className="absolute top-4 right-4 flex items-center justify-center gap-4 ">
          <Button
            asChild
            variant="secondary"
            size="icon"
            onClick={() => setAnimeToUpdate(anime)}
          >
            <Link to="/edit">
              <Pencil className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            variant="destructive"
            size="icon"
            onClick={() => deleteAnimeById(anime.id)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    );
  });

  return (
    <main>
      <div className="max-w-screen-lg mx-auto">
        <div className="mt-20 mb-4 px-4 py-2 max-w-screen-sm mx-auto flex items-center justify-between">
          <h1 className="font-bold text-2xl">Anime List</h1>

          <Button asChild size="lg">
            <Link to="/create">
              <PlusIcon className="h-4 w-4 mr-2" /> Add
            </Link>
          </Button>
        </div>

        <div className="py-6 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {renderedAnimes}
        </div>
      </div>
    </main>
  );
}

export default HomePage;
