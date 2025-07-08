
export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`transition-all duration-200 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
