function Welcome({ ideas }) {
  const useName = 'Samuel';
  return (
    <div className="mb-6 items-center justify-between rounded-xl px-6 py-2 text-primary-100 sm:flex">
      <div>
        <h2 className="mb-2 text-xl font-bold sm:text-2xl">
          Welcome back, {useName}!
        </h2>
        <p className="text-sm opacity-90 sm:text-xl">
          Your ideas are growing well. You have {ideas.length} ideas in your
          garden.
        </p>
      </div>
      <button className="mt-4 rounded-lg bg-primary-600 px-4 py-2 font-medium text-primary-50 transition hover:bg-primary-700 hover:bg-opacity-90">
        Plant new idea
      </button>
    </div>
  );
}

export default Welcome;
