import { client } from "@repo/db/client"



export default async function Home() {
  const data = await client.user.findFirst()

  return <div>
    {data?.username}
    {data?.password}
  </div>
}