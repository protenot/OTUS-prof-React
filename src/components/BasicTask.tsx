

interface BasicTaskProps {
  description: string;
  complexity: number;
  language: string;
  tag: string;
}

function BasicTask(props: BasicTaskProps) {
  const { description, complexity, language, tag } = props;

  return (
    <>
      <p>Description: {description}</p>
      <p>Complexity: {complexity}</p>
      <p>Language: {language}</p>
      <p>Tag: {tag}</p>
    </>
  );
}

export default BasicTask;
