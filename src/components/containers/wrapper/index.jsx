function wrapper({ children }) {
  return (
    <>
      <div className="flex items-center justify-between">{children}</div>
    </>
  );
}

export default wrapper;
