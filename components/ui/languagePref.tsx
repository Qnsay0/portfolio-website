interface LanguageProps {
  placeholder: string;
}

export default function LanguageBox(props: LanguageProps) {
  return (
    <div className="bg-white px-6 py-1">
      <p className="text-black font-medium text-sm rounded-2xl">
        {props.placeholder}
      </p>
    </div>
  );
}
