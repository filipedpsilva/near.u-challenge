export default function ImageNotFound(props: {
  height: string;
  width: string;
}) {
  const { height, width } = props;
  return (
    <div className={`flex rounded ${width} ${height} bg-black`}>
      <span className="flex w-full items-center justify-center">
        Image Not found
      </span>
    </div>
  );
}
