import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import './Card.css';

const CardLanguageGroups = () => (
  <Card.Group itemsPerRow={3} className="card-group">
    <Card color="yellow">
      <Card.Content>
        <Card.Header>Python</Card.Header>
        <Card.Meta>
          <span className="date">2017/5~</span>
        </Card.Meta>
        <Card.Description>
          画像処理をやったりDjangoでWebアプリケーションを作ったりしています。
        </Card.Description>
      </Card.Content>
    </Card>
    <Card color="blue">
      <Card.Content>
        <Card.Header>Go</Card.Header>
        <Card.Meta>
          <span className="date">2019/8~</span>
        </Card.Meta>
        <Card.Description>
          絶賛勉強中です。フレームワークなしでアプリケーションを作りたい
        </Card.Description>
      </Card.Content>
    </Card>
    <Card color="brown">
      <Card.Content>
        <Card.Header>C</Card.Header>
        <Card.Meta>
          <span className="date">2017/3~</span>
        </Card.Meta>
        <Card.Description>
          初めて触った言語です。大学の授業で使ってます。
        </Card.Description>
      </Card.Content>
    </Card>
    <Card color="gleen">
      <Card.Content>
        <Card.Header>Java</Card.Header>
        <Card.Meta>
          <span className="date">2019/4~</span>
        </Card.Meta>
        <Card.Description>大学の授業で使ってます。</Card.Description>
      </Card.Content>
    </Card>
    <Card color="">
      <Card.Content>
        <Card.Header>Ruby</Card.Header>
        <Card.Meta>
          <span className="date">2019/5~</span>
        </Card.Meta>
        <Card.Description>
          Railsで時間割管理アプリケーションを作りました。
        </Card.Description>
      </Card.Content>
    </Card>
    <Card color="brown">
      <Card.Content>
        <Card.Header>Javascript</Card.Header>
        <Card.Meta>
          <span className="date">2019/8~</span>
        </Card.Meta>
        <Card.Description>勉強中です。</Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>
);

const CardFrameworkGroups = () => {
  return (
    <Card.Group itemsPerRow={3}>
      <Card color="yellow">
        <Card.Content>
          <Card.Header>Python</Card.Header>
          <Card.Meta>
            <span className="date">2017/5~</span>
          </Card.Meta>
          <Card.Description>
            画像処理をやったりDjangoでWebアプリケーションを作ったりしています。
          </Card.Description>
        </Card.Content>
        <Button content="Like" icon={{ color: 'red', name: 'like' }} />
      </Card>
    </Card.Group>
  );
};

export { CardLanguageGroups, CardFrameworkGroups };
