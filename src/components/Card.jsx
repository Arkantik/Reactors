export default function Card() {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg"
        src="https://media.istockphoto.com/id/1295031273/fr/photo/big-ben-clock-tower-%C3%A0-londres-royaume-uni-par-une-belle-journ%C3%A9e-composition-panoramique-avec.jpg?s=612x612&w=0&k=20&c=oq7cOYglVjV7tipSWFdS-xLQ9J3b_iQy_WjMhs06b2o="
        alt="big ben"
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          London
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          United Kingdom
        </p>
      </div>
    </div>
  );
}