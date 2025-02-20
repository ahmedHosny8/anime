import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAnimesContext from '@/hooks/use-animes-context';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

function EditPage() {
  const { animeToUpdate, editAnimeById } = useAnimesContext();
  console.log(animeToUpdate);

  const [title, setTitle] = useState(animeToUpdate.title);
  const [desc, setDesc] = useState(animeToUpdate.desc);
  const [img, setImg] = useState(animeToUpdate.img);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    editAnimeById(animeToUpdate.id, title, desc, img);

    setTitle('');
    setDesc('');
    setImg('');

    navigate('/');
  };

  const handleCancel = (event) => {
    event.preventDefault();

    setTitle('');
    setDesc('');
    setImg('');

    navigate('/');
  };

  return (
    <main>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center gap-8">
        <h1 className="mt-20 font-bold text-2xl">Edit this Anime</h1>

        <Card className="px-6 py-12 min-w-80">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1.5">
              <Label>Title</Label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Description</Label>
              <Textarea
                placeholder="Type your Description here."
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Image URL</Label>
              <Input value={img} onChange={(e) => setImg(e.target.value)} />
            </div>

            <Button className="mt-6">Save</Button>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </form>
        </Card>
      </div>
    </main>
  );
}

export default EditPage;
