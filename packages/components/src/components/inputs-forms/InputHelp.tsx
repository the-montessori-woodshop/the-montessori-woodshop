// import { MQColorPalette, makeRem } from "@machineq/components";
// import { forwardRef, memo } from "react";
// import styled from "styled-components";

// export type InputHelpProps = JSX.IntrinsicElements["div"] & {
//   $mqError?: boolean;
//   $mqColor?: MQColorPalette;
// };

// const StyledInputHelp = styled.div<InputHelpProps>`
//   background: ${({ theme }) => theme.palette.mq.color.white.value};
//   z-index: 10;
//   font-size: ${makeRem(12)};
//   padding-left: ${makeRem(12)};
//   padding-top: ${makeRem(8)};

//   color: ${({ theme, $mqError = false, $mqColor }) => {
//     if ($mqError) {
//       return theme.palette.mq.color["danger"].value;
//     }
//     if ($mqColor) {
//       return theme.palette.mq.color[$mqColor].value;
//     }
//     return $mqColor;
//   }};
// `;

// const InputHelpFC = forwardRef<HTMLDivElement, InputHelpProps>(
//   function InputHelpFC({ children, ...props }, ref) {
//     if (!children) {
//       return null;
//     }

//     return (
//       <StyledInputHelp {...props} ref={ref}>
//         {children}
//       </StyledInputHelp>
//     );
//   }
// );

// export const InputHelp = memo(InputHelpFC);

export {};
