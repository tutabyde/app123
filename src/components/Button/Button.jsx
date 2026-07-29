export default function Button({ text }) {
  return (
    <button
      className="
        w-full
        bg-violet-600
        hover:bg-violet-700
        text-white
        rounded-xl
        py-4
        font-semibold
        transition
      "
    >
      {text}
    </button>
  );
}