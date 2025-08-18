export const getStageIcon = (stage) => {
  switch (stage) {
    case 'seed':
      return '🌱';
    case 'sprout':
      return '🌿';
    case 'plant':
      return '🌳';
    default:
      return '💡';
  }
};
