export interface ColorBoxProps {
  color: string;
}

export function ColorBox(props: ColorBoxProps) {
  const { color } = props;
  return (
    <div
      style={{
        backgroundColor: color,
      }}
    >
      <h1>Welcome to ColorBox!</h1>
    </div>
  );
}

export default ColorBox;
