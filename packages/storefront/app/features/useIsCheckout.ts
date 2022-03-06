import { useLocation } from "remix";

/**
 * Hook to determine if the route includes
 * a checkout route. This can be used to conditionally show
 * or hide things from certain pages during the checkout experience
 *
 * @returns boolean
 */
export const useIsCheckout = () => {
  const { pathname } = useLocation();
  return pathname.includes("checkout");
};
