## Toasts

### Overview

The toast module is custom written without any dependencies to reduce the complexity and the size of the bundle for the application.

In order to use the toasts, the root of the application must be wrapped with the `<ToastProvider />`. After the application is wrapped with the provider, the `useToast()` hook can be imported into any component and used to programmatically create a toast.

### Internals

Once the toast provider has been mounted, another component called the `ToastPortal` is mounted to the app. The `ToastPortal` looks for the `body` node in the DOM and then creates a dynamically created element with an `id` of `toast-root`. The toast root is then appended to the `body` node and a [React portal](https://reactjs.org/docs/portals.html) is created.

The Toast system uses the context from from the `ToastProvider` to share different types of state and methods to other components below it. Specifically, the `Toasts` component uses the toasts that are added to render them inside of the react portal.

The `ToastContext` instantiates a `WeakMap` to store the toast messages and uses the `message` of the toast as a key to ensure that duplicates aren't added.

```tsx
const [refMap] = useState<RefMap>(new Map<string, ToastType>());
```

This is an easy way to reduce the amount of array transformation you would normally have to do to iterate over the toasts. Anytime the map is updated the values of the toasts are spread back onto a state value to make them accessible for the apps.

```ts
refMap.delete(toast.message);
setToasts([...refMap.values()]);
```

The hook `useToastContext` should be used to access the `ToastContext` throughout the toast mechanism and the `useToast` hook should be used when trying to programmatically add a toast.

### How to use the toasts

To use the toast, ensure the root of the application is wrapped with the `<ToastProvider />`.

Then in any component, the `useToast()` hook can be added to create the toast.

```tsx
export const TestComponent: FC = () => {
  const { createToast } = useToast();

  const { data } = useSwr("/api/test-route");

  useEffect(() => {
    if (data) {
      createToast({
        message: "Yay, you got some data from /api/test-route",
        variant: "success"
      });
    }
  }, [data]);

  return <div>A really cool component</div>;
};
```

Check out the below example for a live demo
