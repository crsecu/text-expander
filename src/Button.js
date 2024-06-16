export default function Button({ children, handleClick, textColor, textSize }) {
  return (
    <button
      onClick={handleClick}
      style={{
        marginLeft: "6px",
        background: "none",
        border: "none",
        cursor: "pointer",
        color: textColor,
        fontSize: `${textSize}rem`,
      }}
    >
      {children}
    </button>
  );
}
