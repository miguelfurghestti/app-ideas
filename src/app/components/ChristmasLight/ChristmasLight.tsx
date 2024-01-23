import styled, { keyframes } from "styled-components";

interface ChristmasLightProps {
  color: string;
  width: string;
  height: string;
  borderRadius: string;
}

const glowAnimation = keyframes`
  from {
    box-shadow: 0px 0px 0px 0px #FFFFFF;
  }
  to {
    box-shadow: 0px 0px 20px 10px #FFFFFF;
  }
`;

const StyledChristmasLight = styled.div<ChristmasLightProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ color }) => color};
  border-radius: ${({ borderRadius }) => borderRadius};
  animation: ${glowAnimation} 1s linear infinite alternate;
`;

export function ChristmasLightB({
  color,
  width,
  height,
  borderRadius,
}: ChristmasLightProps) {
  return (
    <StyledChristmasLight
      color={color}
      width={width}
      height={height}
      borderRadius={borderRadius}
    />
  );
}
