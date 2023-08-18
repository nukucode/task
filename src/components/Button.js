
function Button() {
//   const [active, setActive] = useState(true);
  return (
    <div className="flex items-center gap-3">
      <button className="button">Favorites</button>
      <button className="button bg-[#414052]">All Collections</button>
    </div>
  );
}

export default Button;
