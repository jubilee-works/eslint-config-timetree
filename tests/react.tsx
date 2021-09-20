import { VFC } from "react";

type Props = {
  readonly title: string;
  readonly description: string;
};

export const ComponentA: VFC<Props> = ({ title, description }) => (
  <>
    <h1>{title}</h1>
    <p>{description}</p>
  </>
);

export const ComponentB: VFC<Props> = ({ title }) => <>{title}</>;
