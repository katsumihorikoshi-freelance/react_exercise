import React, { FC } from 'react';
import { Dimmer, Header, Loader, Table } from 'semantic-ui-react';
import 'App.css';
import { Crew } from 'domains/crew';
import { Link } from 'react-router-dom';

type CrewProps = {
  crews: Crew[];
  isLoading: boolean;
};

const Crews: FC<Required<CrewProps>> = ({ crews = [], isLoading = false }) => (
  <div className="App">
    {isLoading || !crews.length ? (
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    ) : (
      <>
        <Header as="h1">Test App</Header>
        <div>
          <Header as="h3" textAlign="right">
            <Link to="/">Back</Link>
          </Header>
        </div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Code</Table.HeaderCell>
              <Table.HeaderCell>ForceCord</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>ReadingName</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {crews.map((crew) => (
              <Table.Row>
                <Table.Cell>{crew.code}</Table.Cell>
                <Table.Cell>{crew.forceCode}</Table.Cell>
                <Table.Cell>{crew.name}</Table.Cell>
                <Table.Cell>{crew.nameReading}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </>
    )}
  </div>
);

export default Crews;
