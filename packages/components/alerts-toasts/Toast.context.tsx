import React, {
  FC,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState
} from "react";

import { Toast, ToastProps } from "./Toast";
import { createRandomId } from "./toast.utils";
import { ToasterPortal } from "./ToasterPortal";
import { ToasterSlot } from "./ToasterSlot";

export type CreateToastParams = Omit<ToastProps, "id" | "dismiss">;
export type CreateToast = (toast: CreateToastParams) => void;
type ToastList = Omit<ToastProps, "dismiss">[];
type ToastContextType = {
  createToast: CreateToast;
};

export type ToastVariants = ToastProps["variant"];

const ToastContext = React.createContext<ToastContextType | null>(null);

type ToastProviderProps = Pick<ToastProps, "timeout" | "dismissType">;

export const ToastProvider: FC<ToastProviderProps> = ({
  children,
  dismissType = "auto",
  timeout = 5
}) => {
  const toasterSlotRef = useRef<HTMLUListElement | null>(null);
  const [toastList, setToastList] = useState<ToastList>([]);

  const deleteToast = useCallback((id: string) => {
    setToastList((prevList) => prevList.filter((toast) => toast.id !== id));
  }, []);

  const createToast = useCallback<CreateToast>((toast) => {
    setToastList((prevList) => {
      return [
        ...prevList,
        {
          dismissType,
          timeout,
          ...toast,
          id: createRandomId(16)
        }
      ];
    });
  }, []);

  const value = useMemo(
    () => ({
      createToast
    }),
    []
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToasterPortal>
        <ToasterSlot ref={toasterSlotRef}>
          {toastList.map((toast) => (
            <li key={toast.id}>
              <Toast {...toast} dismiss={deleteToast} />
            </li>
          ))}
        </ToasterSlot>
      </ToasterPortal>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error(
      "'useToastContext()' must be used within a <ToastProvider /> component"
    );
  }
  return context;
};
