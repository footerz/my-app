import * as d3 from "d3";
import { useEffect, useRef } from "react";

import "./ShotQuality.css";

interface ShotQualityProps {
  fillDecimal: number;
  fillColor: string;
}

export const ShotQuality: React.FC<ShotQualityProps> = ({
  fillColor,
  fillDecimal,
}) => {
  const ref = useRef<any>();

  useEffect(() => {
    const svgElement = d3.select(ref.current).append("svg");
    const width = 500;
    const height = Math.min(500, width / 2);
    const outerRadius = height / 2 - 10;
    const innerRadius = outerRadius * 0.75;

    const tau = 2 * Math.PI;

    svgElement.attr("viewBox", [0, 0, width, height]);
    const g = svgElement
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    const arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .startAngle(0);

    g.append("path")
      .datum({ endAngle: tau })
      .style("fill", "var(--lightGrey)")
      .attr("d", arc);

    g.append("path")
      .datum({ endAngle: (fillDecimal / 2) * tau })
      .style("fill", fillColor)
      .style("stroke", "var(--black)")
      .attr("d", arc);
  }, [fillColor, fillDecimal]);

  return (
    <>
      <div className="background"></div>
      <div
        data-testid="shot-quality"
        className="flex center column shot-quality-wrapper"
      >
        <svg ref={ref} width="150" height="150">
          <text
            className="shot-quality-label"
            x="50%"
            y="16%"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            Shot Quality
          </text>
          <text
            className="shot-quality-label"
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            {(fillDecimal * 100).toFixed(0)}
          </text>
        </svg>
      </div>
    </>
  );
};
