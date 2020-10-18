import React, { FC } from 'react';
import { Button, Dimmer, Header, Loader, Table } from 'semantic-ui-react';
import './App.css';

export type Force = {
  id: string;
  name: string;
  nameReading: string;
};

type CounterProps = {
  count?: number;
  add?: (amount: number) => void;
  decrement: () => void;
  increment: () => void;
  isLoading: boolean;
  data: Force[];
};

const PresentationalApp: FC<Required<CounterProps>> = ({
  count = 0,
  add = () => undefined,
  decrement = () => undefined,
  increment = () => undefined,
  isLoading = false,
  data = [],
}) => (
  <div className="App">
    {isLoading || !data.length ? (
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    ) : (
      <>
        <Header as="h1">Test App</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>ReadingName</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map((d) => (
              <Table.Row>
                <Table.Cell>{d.id}</Table.Cell>
                <Table.Cell>{d.name}</Table.Cell>
                <Table.Cell>{d.nameReading}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <p>count: {count}</p>
        <Button onClick={() => add}>add</Button>
        <Button onClick={decrement}>-</Button>
        <Button onClick={increment}>+</Button>
      </>
    )}
  </div>
);

export default PresentationalApp;
