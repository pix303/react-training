export function Greeting() {
  return (
    <>
      <p className="bg">
        This is a paragraph of <strong>Greeting comp</strong> with .bg css class
        applied that take <strong>no effect because from module.css</strong>
      </p>
      <p className="my-font">
        This is a paragraph of <strong>Greeting comp</strong> that has an
        applied class form AppGlobal.css that is globally applied due to
        different import
      </p>
    </>
  );
}
