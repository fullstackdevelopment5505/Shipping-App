import React from 'react';
import PropTypes from 'utils/propTypes';

import { Media } from 'reactstrap';

import Avatar from 'components/Avatar';

const  Mails = ({  MailsData }) => {
  return (
     MailsData &&
     MailsData.length &&
     MailsData.map(({ id, avatar, message, date }) => (
      <Media key={id} className="pb-2">
        <Media left className="align-self-center pr-3">
          <Avatar tag={Media} object src={avatar} alt="Avatar" />
        </Media>
        <Media body middle className="align-self-center">
          {message}
        </Media>
        <Media right className="align-self-center">
          <small className="text-muted">{date}</small>
        </Media>
      </Media>
    ))
  );
};

 Mails.propTypes = {
   MailsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.ID,
      avatar: PropTypes.string,
      message: PropTypes.node,
      date: PropTypes.date,
    })
  ),
};

 Mails.defaultProps = {
   MailsData: [],
};

export default  Mails;
