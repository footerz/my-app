export function Chevron({ color = "#000" }): JSX.Element {
  return (
    <svg
      data-testid="chevron"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 7 12"
      height="0.875rem"
      width="0.875rem"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M.784 12L0 11.242 5.43 6 0 .758.784 0l5.432 5.242L7 6l-.784.758z"
      />
    </svg>
  );
}
