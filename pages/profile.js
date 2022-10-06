import ProfileCard from "../components/ProfileCard";
import { useUser } from "@auth0/nextjs-auth0";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
export default function Profile() {
  return (
    <div>
      <h1>profile page</h1>
      <h2>profile deatais</h2>
      <h2>order deatais</h2>
      <div>
        <ProfileCard />
      </div>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
