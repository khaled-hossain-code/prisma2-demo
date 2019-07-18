import Photon from "@generated/photon";

async function main() {
  const photon = new Photon();
  await photon.connect();

  await photon.users.create({
    data: {
      email: "khaled@gmail.com",
      name: "Matt",
      posts: {
        create: [{ title: "First Post" }, { title: "Second Post" }]
      }
    }
  });

  const user = await photon.users.findOne({
    where: {
      email: "khaled@gmail.com"
    },
    select: {
      posts: {
        select: {
          title: true
        }
      }
    }
  });

  console.dir(user, {depth: Infinity});

  await photon.disconnect()
}

main().catch(console.error)