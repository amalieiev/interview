export const getComponentNameFromRoute = (route: string): string => {
  return (
    route
      .split('-')
      .map((part) => {
        return part[0].toUpperCase().concat(part.slice(1));
      })
      .join('') + 'Component'
  );
};
