export default function PrimaryButton({ children, onClick, className = "" }) {
  return (
<button
  onClick={onClick}
  className={`
    rounded-full

    font-bold
    drop-shadow-[0_1px_1px_rgba(0,0,0,0.12)]

    shadow-sm
    transition-all duration-300

    hover:bg-cyan-50
    hover:shadow-md
    hover:-translate-y-0.5

    active:scale-95

    ${className}
  `}
>
  {children}
</button>
  );
}
