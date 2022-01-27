// import { makeRem } from "@machineq/components";
// import { forwardRef, memo } from "react";
// import styled from "styled-components";

// export type InputLabelProps = JSX.IntrinsicElements["label"] & {
//   $mqSize?: "default" | "small";
//   $mqError?: boolean;
// };

// const StyledInputLabel = styled.label<InputLabelProps>`
//   font-size: ${makeRem(12)};
//   line-height: ${makeRem(12)};
//   margin-top: -${makeRem(12 / 2)};
//   margin-left: ${makeRem(12)};
//   position: absolute;
//   font-family: "F37 Bolton", "sans-serif";
//   margin-bottom: ${makeRem(4)};
//   color: ${({ theme, $mqError = false }) =>
//     $mqError
//       ? theme.palette.mq.color.danger.value
//       : theme.palette.mq.color["grey-4"].value};
//   cursor: pointer;
//   padding: 0 ${makeRem(12)};
//   background: ${({ theme }) => theme.palette.mq.color.white.value};
//   z-index: 10;

//   &:focus-within {
//     color: ${({ theme }) => theme.palette.mq.color["light-blue"].value};
//   }
// `;

// const InputLabelFC = forwardRef<HTMLLabelElement, InputLabelProps>(
//   function InputLabelFC({ children, ...props }, ref) {
//     return (
//       <StyledInputLabel {...props} ref={ref}>
//         {children}
//       </StyledInputLabel>
//     );
//   }
// );
// export const InputLabel = memo(InputLabelFC);
export {};
