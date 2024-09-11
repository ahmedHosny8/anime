/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import axios from 'axios';

const AnimesContext = createContext();

function AnimesProvider({ children }) {
  const [animes, setAnimes] = useState([]);
  const [animeToUpdate, setAnimeToUpdate] = useState(null);

  const fetchAnimes = async () => {
    const res = await axios.get('http://localhost:4000/animes');
    console.log(res.data);

    setAnimes(res.data);
  };

  const createAnime = async (title, desc, img) => {
    const res = await axios.post('http://localhost:4000/animes', {
      title,
      desc,
      img,
    });
    console.log(res.data);

    const updatedAnimes = [...animes, res.data];
    setAnimes(updatedAnimes);
  };

  const deleteAnimeById = async (id) => {
    await axios.delete(`http://localhost:4000/animes/${id}`);

    const updatedAnimes = animes.filter((anime) => {
      return anime.id !== id;
    });

    setAnimes(updatedAnimes);
  };

  const editAnimeById = async (id, newTitle, newDesc, newImg) => {
    const res = await axios.put(`http://localhost:4000/animes/${id}`, {
      title: newTitle,
      desc: newDesc,
      img: newImg,
    });

    const updatedAnimes = animes.map((anime) => {
      if (anime.id === id) {
        return { ...anime, ...res.data };
      }

      return anime;
    });

    setAnimes(updatedAnimes);
  };

  const valueToShare = {
    animes,
    animeToUpdate,
    setAnimeToUpdate,
    fetchAnimes,
    createAnime,
    deleteAnimeById,
    editAnimeById,
  };

  return (
    <AnimesContext.Provider value={valueToShare}>
      {children}
    </AnimesContext.Provider>
  );
}

export { AnimesProvider };
export default AnimesContext;
