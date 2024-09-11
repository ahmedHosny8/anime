import { Link } from 'react-router-dom';
import { UserRound } from 'lucide-react';
import { Button } from '../ui/button';

function Header() {
  return (
    <header className="border-stone-200 bg-yellow-400 px-4 py-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between">
        <Link to="/" className="font-bold">
          ANIME
        </Link>

        <Button variant="gost" onClick={() => console.log('Clicled')}>
          <UserRound size={16} className="mr-2" />
          Login
        </Button>
      </div>
    </header>
  );
}

export default Header;
