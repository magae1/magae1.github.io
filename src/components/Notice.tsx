interface Props {
  content: string;
}

export default function Notice({ content }: Props) {
  return (
    <div className="flex justify-center py-2">
      <span className="badge badge-sm">{content}</span>
    </div>
  );
}
