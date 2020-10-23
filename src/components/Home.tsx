import React, { FC } from 'react';
import { Dimmer, Header, Loader, Table } from 'semantic-ui-react';
import 'App.css';
import { Force } from 'domains/force';
import { Link } from 'react-router-dom';

type ForceProps = {
  forces: Force[];
  isLoading: boolean;
};

const Home: FC<Required<ForceProps>> = ({ forces = [], isLoading = false }) => (
  <div className="App">
    {isLoading || !forces.length ? (
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    ) : (
      <>
        <Header as="h1">Test App</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>ReadingName</Table.HeaderCell>
              <Table.HeaderCell>Link</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {forces.map((force: Force) => (
              <Table.Row>
                <Table.Cell>{force.name}</Table.Cell>
                <Table.Cell>{force.nameReading}</Table.Cell>
                <Table.Cell>
                  <Link to={`/crews/${force.code}`}>詳細</Link>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </>
    )}
  </div>
);

export default Home;
