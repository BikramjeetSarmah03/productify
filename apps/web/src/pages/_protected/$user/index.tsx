import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/$user/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <h1>Home Dashboard</h1>;
}
