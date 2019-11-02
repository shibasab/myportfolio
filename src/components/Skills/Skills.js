import React from 'react';
import { CardLanguageGroups, CardFrameworkGroups } from '../Card/Card';
import { Tab } from 'semantic-ui-react';

const panes = [
  {
    menuItem: 'Language',
    render: () => (
      <div>
        <Tab.Pane>
          <CardLanguageGroups />
        </Tab.Pane>
      </div>
    )
  },
  {
    menuItem: 'Framework',
    render: () => (
      <Tab.Pane>
        <CardFrameworkGroups />
      </Tab.Pane>
    )
  }
];

const Skills = () => {
  return (
    <div style={{ backgroundColor: 'lightblue' }} className="container">
      <div>
        <Tab panes={panes} />
      </div>
    </div>
  );
};

export default Skills;
