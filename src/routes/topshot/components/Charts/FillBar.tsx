import * as d3 from "d3";
import { useEffect, useRef } from "react";

interface FillBarProps {
  fillPercentage: number;
  fillColor: string;
}

export const FillBar: React.FC<FillBarProps> = ({
  fillColor,
  fillPercentage,
}) => {
  const ref = useRef<any>();
  useEffect(() => {
    const svgElement = d3.select(ref.current).append("svg");
    svgElement
      .append("rect")
      .attr("rx", 3)
      .attr("ry", 3)
      .attr("fill", "var(--lightGrey)")
      .attr("height", 20)
      .attr("width", function () {
        return 200;
      })
      .attr("x", 0);

    svgElement
      .append("rect")
      .attr("rx", 3)
      .attr("ry", 3)
      .attr("fill", fillColor)
      .attr("height", 20)
      .attr("stroke", "var(--black)")
      .attr("width", function () {
        return fillPercentage * 2;
      })
      .attr("x", 0);
  }, [fillColor, fillPercentage]);

  return (
    <>
      <p className="fillBar-label">{fillPercentage}</p>
      <svg ref={ref} width="12.5rem" height="1.25rem" />
    </>
  );
};
