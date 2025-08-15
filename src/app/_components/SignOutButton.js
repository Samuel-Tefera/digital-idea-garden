import { FiLogOut } from 'react-icons/fi';

function SignOutButton() {
  return (
    <div className="hover:text-primary-400">
      <button>
        <FiLogOut />
      </button>
    </div>
  );
}

export default SignOutButton;
