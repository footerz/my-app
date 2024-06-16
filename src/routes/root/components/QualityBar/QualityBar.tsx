import "./QualityBar.css";

interface QualityBarProps {
  shotQuality?: number;
  shotCategory?: string;
}

export const QualityBar: React.FC<QualityBarProps> = ({
  shotQuality,
  shotCategory,
}) => {
  return (
    <>
      <div
        className="progress"
        data-testid="quality-bar"
        style={
          {
            "--percentage": shotQuality,
            "--color": `var(--category${shotCategory})`,
          } as React.CSSProperties
        }
      >
        <div className="number">{shotQuality?.toFixed(0)}</div>
      </div>
    </>
  );
};
