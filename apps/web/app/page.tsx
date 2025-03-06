import { client } from "@repo/db/client"



export default async function Home() {
  const data = await client.user.findFirst()

  return <div>
    <div>Nav Bar</div>
    <div>also checking the auto depolyment from github</div>
    {data?.username}
    {data?.password}
  </div>
}