type Props = {
  readonly title: string;
  readonly description: string;
};

export const ComponentA = ({ title, description }: Props) => (
  <>
    <h1>{title}</h1>
    <p>{description}</p>
  </>
);

export const ComponentB = ({ title }: Props) => <>{title}</>;
