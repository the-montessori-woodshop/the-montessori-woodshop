import {
  Button,
  FormFieldText,
  InputText,
  PageSection,
  PageSectionPane,
  PageSectionPaneContent,
  PageSectionPaneTitle,
  TypographyCopy,
  TypographyHeading,
} from "@woodshop/components";
import type {
  MetaFunction} from "remix";
import {
  type LoaderFunction,
  useLoaderData,
  Outlet
} from "remix";
import { medusaClient } from "~/clients/medusa-client";
import { RouteWrapper } from "~/components/RouteWrapper";
import { getPageTitle } from "~/utils/getPageTitle";

export const meta: MetaFunction = () => {
  return { title: getPageTitle("Mission") };
};

// export let loader: LoaderFunction = async () => {
//   try {
//     const { response, ...data } = await medusaClient.products.list();
//     return data;
//   } catch (error) {
//     console.log("ERROR", error);
//     throw new Error(error as string);
//   }
// };

export default function Index() {
  // const data = useLoaderData();
  const data = {};

  console.log(data);

  return (
    <RouteWrapper>
      <PageSection cxLayout="split-pane" cxBackground="main">
        <PageSectionPane cxAlign="left">
          <PageSectionPaneTitle>
            Always handmade montessori staples that will last for generations.
          </PageSectionPaneTitle>
          <PageSectionPaneContent>
            <TypographyCopy cxColor="textSecondary">
              Take home an elegant and functional montessori piece that will
              last as long as your child does
            </TypographyCopy>
          </PageSectionPaneContent>
        </PageSectionPane>
        <PageSectionPane>img here</PageSectionPane>
      </PageSection>
      <PageSection>
        <PageSectionPane>
          <PageSectionPaneTitle>
            Join our mailing list for 10% off!
          </PageSectionPaneTitle>
          <PageSectionPaneContent>
            <TypographyCopy cxColor="textSecondary">
              Periodically, we’ll be releasing new products and updating you on
              activities related to the business. Join today to receive 10% off
              of your first purchase at the Montessori Woodshop!
            </TypographyCopy>
            <div>
              <div
                style={{
                  marginTop: "1rem",
                  maxWidth: "60ch",
                }}
              >
                <FormFieldText
                  id="join"
                  placeholder="your-email@domain.com"
                  cxAlignment="center"
                />
              </div>
              <Button
                cxColor="primary"
                cxVariant="contained"
                style={{
                  marginTop: "2rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Join
              </Button>
            </div>
          </PageSectionPaneContent>
        </PageSectionPane>
      </PageSection>
      <PageSection>
        <PageSectionPane>
          <PageSectionPaneTitle>The Mission</PageSectionPaneTitle>
          <PageSectionPaneContent>
            <TypographyCopy cxColor="textSecondary">
              Read about our mission and our commitment to making generational
              pieces
            </TypographyCopy>
            <Button
              cxColor="primary"
              cxVariant="contained"
              style={{
                marginTop: "2rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Read more
            </Button>
          </PageSectionPaneContent>
        </PageSectionPane>
      </PageSection>
      <PageSection cxLayout="split-pane">
        <PageSectionPane>test</PageSectionPane>
        <PageSectionPane cxAlign="left">
          <PageSectionPaneTitle>The Nova Stool</PageSectionPaneTitle>
          <PageSectionPaneContent>
            <TypographyCopy cxColor="textSecondary" cxNode="p">
              Named after my daughter, this stool merges function and style into
              one uniuqe piece that is designed to last everykind of use every
              day.
            </TypographyCopy>
            <TypographyCopy
              cxColor="textSecondary"
              cxNode="p"
              style={{
                marginTop: "1rem",
              }}
            >
              The design calls for stability without sacrificing the asthetic
              that is sure to impress your child and make using it fun.
            </TypographyCopy>
          </PageSectionPaneContent>
        </PageSectionPane>
      </PageSection>
      <Outlet />
    </RouteWrapper>
  );
}
