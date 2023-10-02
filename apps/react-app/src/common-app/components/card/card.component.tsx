import React from 'react';
import * as classes from './card.styles';

interface Props {
  avatar: string;
  name: string;
  job: string;
  linkedin_url: string;
  description: string;
}

export const Card: React.FC<Props> = (props: Props) => {
  const { avatar, name, job, linkedin_url, description } = props;
  return (
    <div className={classes.root}>
      <div className={classes.avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={classes.name}>{name}</div>
      <div className={classes.job}>{job}</div>
      <div className={classes.description}>{description}</div>
      <a href={linkedin_url} target="_blank">
        <img src="./assets/logo-linkedin.svg" alt="linkedin image" />
      </a>
    </div>
  );
};
