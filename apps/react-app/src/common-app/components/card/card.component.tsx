import React from 'react';
import * as classes from './card.styles';

interface Props {
  avatar: string;
  name: string;
  job: string;
  description: string;
}

export const Card: React.FC<Props> = (props: Props) => {
  const { avatar, name, job, description } = props;
  return (
    <div className={classes.root}>
      <div className={classes.avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={classes.name}>{name}</div>
      <div className={classes.job}>{job}</div>
      <div className={classes.description}>{description}</div>
    </div>
  );
};
