const boxVariants = ({theme}) => {
  const {COLORS} = theme.CORE;
  const defaultVariants = {
    primary: {
      default: {
        backgroundColor: COLORS['primary-default'],
        color: COLORS['grey-16'],
        borderColor: COLORS['primary-default'],
      },
      outlined: {
        backgroundColor: 'transparent',
        color: COLORS['primary-default'],
        borderColor: COLORS['primary-default'],
      },
    },
    'primary-light': {
      default: {
        backgroundColor: COLORS['primary-light'],
        color: COLORS['primary-default'],
        borderColor: COLORS['primary-light'],
      },
      outlined: {
        backgroundColor: 'transparent',
        color: COLORS['primary-default'],
        borderColor: COLORS['primary-light'],
      },
    },
    'primary-dark': {
      default: {
        backgroundColor: COLORS['primary-dark'],
        color: '#ffffff',
        borderColor: COLORS['primary-dark'],
      },
      outlined: {
        backgroundColor: 'transparent',
        color: COLORS['primary-dark'],
        borderColor: COLORS['primary-dark'],
      },
    },
    black: {
      default: {
        backgroundColor: '#000000',
        color: COLORS['grey-1'],
        borderColor: '#000000',
      },
      outlined: {
        backgroundColor: 'transparent',
        color: '#000000',
        borderColor: '#000000',
      },
    },
    white: {
      default: {
        backgroundColor: '#ffffff',
        color: COLORS['grey-16'],
        borderColor: '#ffffff',
      },
      outlined: {
        backgroundColor: 'transparent',
        color: COLORS['grey-16'],
        borderColor: '#ffffff',
      },
    },
    'grey-light': {
      default: {
        backgroundColor: COLORS['grey-1'],
        color: COLORS['grey-18'],
        borderColor: COLORS['grey-1'],
      },
      outlined: {
        backgroundColor: 'transparent',
        color: COLORS['grey-18'],
        borderColor: COLORS['grey-18'],
      },
    },
    'grey-dark': {
      default: {
        color: '#ffffff',
        backgroundColor: COLORS['grey-18'],
        borderColor: COLORS['grey-18'],
      },
      outlined: {
        backgroundColor: 'transparent',
        color: COLORS['grey-18'],
        borderColor: COLORS['grey-18'],
      },
    },
    transparent: {
      default: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: COLORS['primary-dark'],
      },
      outlined: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: COLORS['primary-dark'],
      },
    },
    'transparent-light': {
      default: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: COLORS['primary-light'],
      },
      outlined: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: COLORS['primary-light'],
      },
    },
    info: {
      default: {
        backgroundColor: COLORS['info-default'],
        color: COLORS['on-info-default'],
        borderColor: COLORS['info-default'],
      },
      outlined: {
        backgroundColor: 'transparent',
        color: COLORS['info-default'],
        borderColor: COLORS['info-default'],
      },
    },
    'info-light': {
      default: {
        backgroundColor: COLORS['info-light'],
        color: COLORS['info-default'],
        borderColor: COLORS['info-light'],
      },
      outlined: {
        backgroundColor: 'transparent',
        color: COLORS['info-default'],
        borderColor: COLORS['info-light'],
      },
    },
    'info-dark': {
      default: {
        color: '#ffffff',
        backgroundColor: COLORS['info-dark'],
        borderColor: COLORS['info-dark'],
      },
      outlined: {
        backgroundColor: 'transparent',
        color: COLORS['info-dark'],
        borderColor: COLORS['info-dark'],
      },
    },
    success: {
      default: {
        backgroundColor: COLORS['success-default'],
        color: COLORS['on-success-default'],
        borderColor: COLORS['success-default'],
      },
      outlined: {
        backgroundColor: 'transparent',
        color: COLORS['success-default'],
        borderColor: COLORS['success-default'],
      },
    },
    'success-light': {
      default: {
        backgroundColor: COLORS['success-light'],
        color: COLORS['success-default'],
        borderColor: COLORS['success-light'],
      },
      outlined: {
        backgroundColor: 'transparent',
        color: COLORS['success-default'],
        borderColor: COLORS['success-light'],
      },
    },
    'success-dark': {
      default: {
        color: '#ffffff',
        backgroundColor: COLORS['success-dark'],
        borderColor: COLORS['success-dark'],
      },
      outlined: {
        backgroundColor: 'transparent',
        color: COLORS['success-dark'],
        borderColor: COLORS['success-dark'],
      },
    },
    warning: {
      default: {
        backgroundColor: COLORS['warning-default'],
        color: COLORS['on-warning-default'],
        borderColor: COLORS['warning-default'],
      },
      outlined: {
        backgroundColor: 'transparent',
        color: COLORS['warning-default'],
        borderColor: COLORS['warning-default'],
      },
    },
    'warning-light': {
      default: {
        backgroundColor: COLORS['warning-light'],
        color: COLORS['warning-default'],
        borderColor: COLORS['warning-light'],
      },
      outlined: {
        backgroundColor: 'transparent',
        color: COLORS['warning-default'],
        borderColor: COLORS['warning-light'],
      },
    },
    'warning-dark': {
      default: {
        color: '#ffffff',
        backgroundColor: COLORS['warning-dark'],
        borderColor: COLORS['warning-dark'],
      },
      outlined: {
        backgroundColor: 'transparent',
        color: COLORS['warning-dark'],
        borderColor: COLORS['warning-dark'],
      },
    },
    danger: {
      default: {
        backgroundColor: COLORS['danger-default'],
        color: COLORS['on-danger-default'],
        borderColor: COLORS['danger-default'],
      },
      outlined: {
        backgroundColor: 'transparent',
        color: COLORS['danger-default'],
        borderColor: COLORS['danger-default'],
      },
    },
    'danger-light': {
      default: {
        backgroundColor: COLORS['danger-light'],
        color: COLORS['danger-default'],
        borderColor: COLORS['danger-light'],
      },
      outlined: {
        backgroundColor: 'transparent',
        color: COLORS['danger-default'],
        borderColor: COLORS['danger-light'],
      },
    },
    'danger-dark': {
      default: {
        color: '#ffffff',
        backgroundColor: COLORS['danger-dark'],
        borderColor: COLORS['danger-dark'],
      },
      outlined: {
        backgroundColor: 'transparent',
        color: COLORS['danger-dark'],
        borderColor: COLORS['danger-dark'],
      },
    },
  };

  return defaultVariants;
};

export default boxVariants;
