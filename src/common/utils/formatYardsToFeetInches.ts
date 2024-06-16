const formatFeetInchesText = ({
  feet,
  inches,
}: {
  feet: number;
  inches: number;
}): string => {
  feet = Math.trunc(feet);
  inches = Math.trunc(inches);

  const inchesString = `${inches}"`;
  const feetString = `${feet}ft`;

  if (feet === 0) {
    return inchesString;
  }

  if (inches === 0) {
    return feetString;
  }

  return `${feetString} ${inchesString}`;
};

const yardsToFeetInches = (
  yards?: number | null
): { feet: number; inches: number } | undefined => {
  if (typeof yards !== "number") return;

  // eg: yards = 1.5
  const feetFraction = yards * 3; // 4.5
  const feet = Math.trunc(feetFraction);
  const inches = (feetFraction - feet) * 12; // 0.5 * 12 = 6

  return { feet, inches };
};

export const formatYardsToFeetInches = (
  yards?: number | null,
  shotEndLie?: string
): string => {
  if (!yards || !shotEndLie) return "-";

  if (shotEndLie !== "GREEN") return `${yards?.toFixed(0)}yds`;

  const feetInches = yardsToFeetInches(yards);

  if (!feetInches) return "";

  return formatFeetInchesText(feetInches);
};
