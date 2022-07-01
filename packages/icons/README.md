## Icon File Types

All of the icons that are needed for the application are stored in 2 various forms.

### Raw SVG

This allows us to keep these icons in source control and update them based upon their actual vector properties. The properties are what actually make the SVG and are important to keep controlled.

You can find all of the application SVGs in the `src/icons/svg` directory.

### Generated `.TS` files

These are the files that are used by the application. These files are created by running the below script.

```bash
yarn icons:generate
```

Running the above script runs the `svgr` CLI to convert the raw SVG files into typescript files that can then be used throughout the application.

## Creating a new icon

In order to create a new icon that can be used in the application, follow the below instructions:

1. Add a SVG file to the `src/icons/svg` directory.
2. Ensure that the file has been run through a SVGO utility. The default configurations are fine.
3. Ensure that the color of the icon is set to `currentColor`. Check the path and fills to see what makes sense.
4. Run the `yarn icons:generate` script from the root of the PWA directory
5. Import the name of the icon from `src/icons` and use it inside of a `SVGIcon` component

## Using an icon

Here is an example of how to use the icon

```tsx
import { AlertSolid } from "src/icons";
import { SVGIcon } from "src/components/simple";

export const SampleIconComponent: FC = () => (
  <div>
    <SVGIcon iconColor="mq-blue">
      <AlertSolid />
    <SVGIcon>
  </div>
);
```
