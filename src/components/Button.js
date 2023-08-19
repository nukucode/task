function Button({
  buttonOneTitle,
  buttonTwoTitle,
  buttonOneCallback,
  buttonTwoCallback,
}) {
  return (
    <div className="flex items-center gap-3">
      <button className="button">{buttonOneTitle}</button>
      <button className="button bg-[#414052]">{buttonTwoTitle}</button>
    </div>
  );
}

export default Button;
