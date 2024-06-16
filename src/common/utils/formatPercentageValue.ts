export const formatPercentageValue = (stat?: number) => {
  if (!stat) return "-";

  return `${(stat * 100).toFixed(0)}%`;
};
