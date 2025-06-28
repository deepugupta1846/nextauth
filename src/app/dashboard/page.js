import { auth } from "../auth";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    return <p>Access Denied</p>;
  }

  return <h1>Welcome, {session.user.name}</h1>;
}
