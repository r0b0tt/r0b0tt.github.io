import {
  IconAppStore,
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconLocation,
  IconLogo,
  IconPlayStore,
  IconStar,
  IconTwitter,
  IconZap,
} from '@components/icons';
import PropTypes from 'prop-types';
import React from 'react';

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'LinkedIn':
      return <IconLinkedin />;
    case 'Location':
      return <IconLocation />;
    case 'Logo':
      return <IconLogo />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'Star':
      return <IconStar />;
    case 'Twitter':
      return <IconTwitter />;
    case 'Zap':
      return <IconZap />;
    default:
      return <IconExternal />;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;
