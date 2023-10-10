import Image from "next/image";
import Link from "next/link";

function Appbar({onMenuToggle}) {
  return (
    <div className="flex justify-between items-center bg-gray-700 p-4">
      <div className="text-white">My App</div>
      <button onClick={onMenuToggle}>
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
  );
    
}

export default Appbar;
