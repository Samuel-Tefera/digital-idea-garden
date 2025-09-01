'use client';

import { signOut } from 'next-auth/react';
import { useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import SpinnerMini from './SpinnerMini';

function SignOutButton() {
  const [isLogouting, setIsLogouting] = useState(false);

  async function handleLogout() {
    setIsLogouting(true);
    await signOut({ redirectTo: '/' });
  }

  return (
    <div className="hover:text-primary-400">
      <button onClick={handleLogout}>
        {isLogouting ? <SpinnerMini /> : <FiLogOut />}
      </button>
    </div>
  );
}

export default SignOutButton;
